<template>
  <div>
    <SearchInput></SearchInput>
    <el-table
      :data="playLists"
      style="width: 80%"
      :header-cell-style="{ background: '#f2d7d3', color: '#606266' }"
      :row-style="{ background: '#f2d7d3' }"
    >
      <el-table-column label="歌单封面" width="150">
        <template #default="scope">
          <el-image :src="scope.row.coverImgUrl"></el-image>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="歌单名称" width="350">
      </el-table-column>
      <el-table-column prop="trackCount" label="歌曲数量"> </el-table-column>
      <el-table-column prop="creator.nickname" label="创建者">
      </el-table-column>
      <el-table-column label="操作" width="100">
        <template v-slot="scope">
          <!-- <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button> -->
          <el-button type="text" @click="handleClick(scope.row)"
            >去听歌</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>

  <!--歌单侧边栏-->
  <div class="player" id="player">
    <div class="playback_wrapper">
      <div class="playback_blur"></div>
      <div
        class="playback_thumb"
        :style="{ backgroundImage: 'url(' + detailList.coverImgUrl + ')' }"
      ></div>
      <div class="playback_info">
        <div class="title" style="color: #252120">{{ detailList.name }}</div>
        <div class="artist">{{ detailList.creator.nickname }}</div>
      </div>
      <div class="playback_btn_wrapper" style="margin: -9vh 0 0 13vw">
        <div class="btn-switch">
          <el-button
            color="#fab5b0"
            type="primary"
            size="large"
            class="button"
            @click="playSong"
          >
            <template #icon>
              <div class="btn-switch">
                <i class="btn-play fa fa-play" aria-hidden="true"></i>
              </div>
            </template>
            播放全部</el-button
          >
        </div>
      </div>
    </div>
    <div class="list_wrapper">
      <ul class="list">
        <li
          v-for="item in songList"
          :key="item.id"
          class="list_item"
          @click="switchList(item)"
        >
          <div
            class="thumb"
            :style="{ backgroundImage: 'url(' + item.al.picUrl + ')' }"
          ></div>
          <div class="info">
            <div class="title">{{ item.name }}</div>
            <div class="artist">{{ item.ar[0].name }}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import SearchInput from "../components/SearchInput.vue";
import { searchByKey, searchPlayListDetails, searchById, searchLyricById } from "@/apis/songs.js";
import $ from "jquery";
import { gsap, Power2, Expo } from "gsap";

export default {
  name: "Search",
  components: { SearchInput },

  methods: {
    getQueryVariable(variable) {
      var query = window.location.search.substring(1);
      var vars = query.split("&");
      for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
          return pair[1];
        }
      }
      return " ";
    },
    /**
     * 打开界面右侧的曲目列表
     */
    play() {
      gsap.to(".dim", 0.5, {
        opacity: 1,
        display: "block",
        ease: Power2.easeInOut,
      });
      gsap.fromTo(
        "#player",
        0.5,
        { xPercent: 100 },
        { xPercent: 0, display: "block", ease: Expo.easeOut }
      );
      gsap.to(".mini-player", 0.5, { x: 50, ease: Expo.easeOut });
    },

    //查询歌单，渲染页面
    async getPlayList() {
      this.searchKey = decodeURI(this.$route.query.searchKey);
      console.log("searchKey" + this.searchKey);

      this.$store.commit("issueRequest");
      let res = await searchByKey({ type: 1000, keywords: this.searchKey });
      this.$store.commit("getResponse");

      console.log("playList" + res.result.playlists.length);
      this.playLists = res.result.playlists.slice(0, 6);
      console.log("搜索" + this.searchKey);
    },
    //查询歌单详情
    async getPlayListDetails(id) {
      this.$store.commit("issueRequest");
      let res = await searchPlayListDetails({ id: id });
      this.$store.commit("getResponse");

      this.detailList = res.playlist;
      this.songList = res.playlist.tracks;
      console.log("曲目列表");
      console.log(this.songList);
    },
    //点击“去听歌”
    handleClick(e) {
      console.log("去听歌");
      console.log(e.id);
      this.getPlayListDetails(e.id);

      //在加载完毕后才打开歌单侧边栏
      var list = setInterval(() => {
        if (this.$store.getters.loadingShow == false) {
          this.play();
          clearInterval(list);
        }
      }, 500);
    },
    //点击"播放全部"后，将当前歌单加载进store并进入播放主页
    async playSong() {
      console.log("搜索前清空canvas")
      this.$store.commit("issueRequest");
      var playList = [];
      for (let i = 0; i < this.songList.length && i < 30; i++) {
        let element = this.songList[i];
        let id = element.id;

        let song = {
          name: String,
          singer: String,
          url: String,
          picUrl: String,
          lyric: String,
        };
        song.name = element.name;
        song.singer = element.ar[0].name;

        let res = await searchById({ id: id });
        song.url = res.data[0].url; //音乐url

        song.picUrl = element.al.picUrl; //海报url

        // 获取歌词
        res = await searchLyricById({ id: id });
        song.lyric = res.lrc.lyric;

        playList.push(song);
        //console.log("加入歌单" + song.url);
        if (i === 0) {
          this.$store.commit("loadSong", song);
          this.$store.state.loadingShow = false;
        }
        
      }
      this.$store.commit("loadList", playList);
     
      //关闭右侧歌单栏
      gsap.to(".dim", 0.5, {
        opacity: 0,
        display: "none",
        ease: Power2.easeInOut,
      });
      gsap.to(".nav", 0.5, {
        xPercent: -100,
        display: "none",
        ease: Power2.easeInOut,
      });
      gsap.to("#player", 0.5, {
        xPercent: 100,
        display: "none",
        ease: Power2.easeOut,
      });

      //跳转至首页
      this.$router.push({
        path: "main"
      });
       this.$store.commit("getResponse");
    },
  },
  data() {
    return {
      //搜索关键词
      searchKey: String,
      //歌单列表
      playLists: Array(),
      //歌单详情
      detailList: {
        id: Number,
        name: String,
        coverImgUrl: String,
        trackCount: Number,
        playCount: String,
        creator: "",
      },
      //歌单中的曲目列表
      songList: Array(),
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  created: async function () {
    this.getPlayList();
  },
  mounted() {
    // ===== List  =====
    $(".item").hover(
      function () {
        gsap.to($(this), 0.5, { y: -30, ease: Power2.easeInOut }),
          $(this).children(".thumb").addClass("shadow"),
          $(this).children(".connect_btn").addClass("shadow"),
          gsap.to($(this).children(".info"), 0.5, {
            opacity: 1,
            ease: Power2.easeInOut,
          });
      },

      function () {
        gsap.to($(this), 0.5, { y: 0, ease: Power2.easeInOut }),
          $(this).children(".thumb").removeClass("shadow"),
          $(this).children(".connect_btn").removeClass("shadow"),
          gsap.to($(this).children(".info"), 0.5, {
            opacity: 0,
            ease: Power2.easeInOut,
          });
      }
    );
  },
  watch: {
    $route() {
      this.getPlayList();
    },
  },
};
</script>

<style lang="scss" scoped>
/deep/ .el-table,
.el-table__expanded-cell {
  background-color: transparent;
  left: 150px;
}

.btn-switch {
  width: 30px;
  display: flex;
  margin-right: 30px;
  justify-content: center;
  color: #ff645a;
  font-size: 20px;
}

.playback_btn_wrapper {
  position: absolute;
  margin-left: 10vw;
}

.playback_btn_wrapper .btn-switch {
  margin-right: 0;
  color: #ff645a;
}

.btn-pause {
  color: #ff645a;
  display: none;
  opacity: 0;
}

.dim {
  will-change: opacity;
  width: 100vw;
  height: 100vh;
  top: 0;
  position: fixed;
  background-color: rgba(224, 221, 209, 0.701961);
  display: none;
  z-index: 2;
  opacity: 0;
}

.player {
  will-change: transform;
  display: none;
  position: fixed;
  right: 0;
  top: 0;
  width: 500px;
  height: 100%;
  margin-top: 0px;
  background-color: #fff;
  box-shadow: 0px 25px 60px 0px rgba(97, 45, 45, 0.4);
  font-size: 14px;
  z-index: 999;
}

.playback_wrapper {
  height: 310px;
  position: relative;
  //overflow: hidden;
  background-color: #fff9e1;
  font-size: 20px;
}

.playback_blur {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  position: absolute;
  transform: scale(1.1);
  filter: blur(32px);
  opacity: 0.24;
}

.playback_thumb {
  transition: 0.5s;
  width: 164px;
  height: 164px;
  border-radius: 5px;
  background-size: cover;
  position: absolute;
  margin: 35px;
  box-shadow: 0px 12px 30px 0px rgba(97, 45, 45, 0.2);
}

.playback_info {
  display: block;
  position: absolute;
  left: 164px;
  z-index: 10;
  margin: 42px 8px 8px 70px;
  width: 55%;
  min-width: 100px;
  //mix-blend-mode: color-burn;
  text-align: left;
  color: #252120;
}
.playback_info .title {
  font-size: 25px;
  display: inline;
  max-width: 5vw;
  color: #252120;
  font-weight: 500;
  font-family: Oswald;
}
.playback_info .artist {
  margin-top: 14px;
  font-size: 18px;
  opacity: 0.8;
  color: #252120;
  font-family: Oswald;
}

.playback_btn_wrapper {
  position: absolute;
  z-index: 10;

  width: 124px;
  left: 55px;
  top: 240px;
  opacity: 0.6;
  display: flex;
  justify-content: space-between;
}
.playback_btn_wrapper i {
  margin: 0;
  color: #ff645a;
}

.list_wrapper {
  // 修改滚动条样式
  &::-webkit-scrollbar {
    width: 0px;
  }
  height: calc(100% - 310px);
  overflow: auto;
}

.list {
  padding: 20px 0;
}
.list .list_item {
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 100%;
  height: 74px;
  transition: 0.4s;
}
.list .thumb {
  width: 50px;
  height: 50px;
  margin: 0 12px 0 31px;
  border-radius: 50%;
  position: relative;
  opacity: 0.8;
  background-size: cover;
}
.list .info {
  max-width: 600px;
  text-align: left;
}
.list .info .title {
  font-size: 15px;
  font-weight: 600;
  color: #999;
}
.list .info .artist {
  font-size: 13px;
  text-transform: uppercase;
  color: #bbb;
}

.list_item:hover {
  background-color: rgba(0, 0, 0, 0.03);
}

.list_item:active {
  transform: scale(0.98);
}

.list .list_item:nth-child(1) .thumb {
  background-image: url(https://i1.sndcdn.com/artworks-000167527289-p3zpfg-large.jpg);
}
.list .list_item:nth-child(2) .thumb {
  background-image: url(https://i1.sndcdn.com/artworks-000149308680-w9rj6a-large.jpg);
}
.list .list_item:nth-child(3) .thumb {
  background-image: url(https://i1.sndcdn.com/artworks-000091003491-upr0rf-large.jpg);
}
.list .list_item:nth-child(4) .thumb {
  background-image: url(https://i1.sndcdn.com/artworks-000125642440-o2ff73-large.jpg);
}
.list .list_item:nth-child(5) .thumb {
  background-image: url(https://i1.sndcdn.com/artworks-000174340505-wv6dl1-large.jpg);
}
.list .list_item:nth-child(6) .thumb {
  background-image: url(https://i1.sndcdn.com/artworks-000169142537-e22x2o-large.jpg);
}
.list .list_item:nth-child(7) .thumb {
  background-image: url(https://i1.sndcdn.com/artworks-000180119811-wgpequ-large.jpg);
}
.list .list_item:nth-child(8) .thumb {
  background-image: url(https://i1.sndcdn.com/artworks-000133986066-hf1rz6-large.jpg);
}

.selected {
  background-color: rgba(224, 186, 171, 0.19);
}
.selected:hover {
  background-color: rgba(224, 186, 171, 0.3);
}
.selected .info .title {
  color: #252120;
  font-size: 15px;
}
.selected .info .artist {
  color: rgba(37, 33, 32, 0.7);
  font-size: 13px;
  text-transform: uppercase;
}

.active {
  display: block;
  opacity: 1;
}

.button {
  color: #fff;
  background-color: rgb(21, 47, 72);
  border-color: rgb(21, 47, 72);
}
</style>
