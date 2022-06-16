<template>
  <div>
    <!-- <div class="search">
       <el-input v-model="input" placeholder="请输入内容"></el-input>
      <el-button round class="search_button" @click="dialogVisible = true">搜索</el-button>
       <el-input
      v-model="input"

      size="large"
      placeholder="Please Input"
      :suffix-icon="Search"
    />
    </div> -->
    <!-- <div class="wrap">
      <div class="search">
        <input
          type="text"
          class="searchTerm"
          placeholder="搜索歌单"
        />
        <button type="submit" class="searchButton">
          <i class="fa fa-search"></i>
        </button>
      </div>
    </div> -->
    <SearchInput></SearchInput>
    <div>
      <el-dialog
        title="提示"
        v-model="dialogVisible"
        width="30%"
        :before-close="handleClose"
      >
        <span>这是一段信息</span>
      </el-dialog>
    </div>
    <el-carousel :interval="4000" type="card" height="200px" width="300px">
      <el-carousel-item v-for="item in imgList" :key="item.name">
        <img
          :src="item.src"
          style="height: 100%; width: 100%"
          alt="图片丢失了"
          :title="item.title"
        />
      </el-carousel-item>
    </el-carousel>
    <div class="title">
      <p style="font-weight: bold">精选歌单</p>
      <p>Enjoy some new awesome music</p>
    </div>
    <div class="items">
      <div class="arrow" @click="change(1)">
        <i class="el-icon-arrow-left" style="font-size: 30px"></i>
      </div>
      <div class="item" @click="handleClick(6666112560)">
        <img :src="cursonglist1_0[0].picUrl" class="image" />
      </div>
      <div class="item" @click="handleClick(4920881606)">
        <img :src="cursonglist1_0[1].picUrl" class="image" />
      </div>
      <div class="item" @click="handleClick(6666112560)">
        <img :src="cursonglist1_0[2].picUrl" class="image" />
      </div>
      <div class="item" @click="handleClick(740666719)">
        <img :src="cursonglist1_0[3].picUrl" class="image" />
      </div>
      <div class="item" @click="handleClick(6620660821)">
        <img :src="cursonglist1_0[4].picUrl" class="image" />
      </div>
      <div class="item" @click="handleClick(740666719)">
        <img :src="cursonglist1_0[5].picUrl" class="image" />
      </div>
      <div class="arrow" @click="change(1)">
        <i class="el-icon-arrow-right" style="font-size: 30px"></i>
      </div>
    </div>
    <div class="songlist1_name">
      <span class="name">{{ cursonglist1_0[0].name }}</span>
      <span class="name">{{ cursonglist1_0[1].name }}</span>
      <span class="name">{{ cursonglist1_0[2].name }}</span>
      <span class="name">{{ cursonglist1_0[3].name }}</span>
      <span class="name">{{ cursonglist1_0[4].name }}</span>
      <span class="name">{{ cursonglist1_0[5].name }}</span>
    </div>

    <div class="title">
      <p style="font-weight: bold">精彩推荐</p>
      <p>Wonderful recommendation</p>
    </div>
    <div class="items">
      <div class="arrow" @click="change(2)">
        <i class="el-icon-arrow-left" style="font-size: 30px"></i>
      </div>
      <div class="item" @click="handleClick(6666112560)">
        <img :src="cursonglist2_0[0].picUrl" class="image" />
      </div>
      <div class="item" @click="handleClick(4920881606)">
        <img :src="cursonglist2_0[1].picUrl" class="image" />
      </div>
      <div class="item" @click="handleClick(6666112560)">
        <img :src="cursonglist2_0[2].picUrl" class="image" />
      </div>
      <div class="item" @click="handleClick(6620660821)">
        <img :src="cursonglist2_0[3].picUrl" class="image" />
      </div>
      <div class="item" @click="handleClick(740666719)">
        <img :src="cursonglist2_0[4].picUrl" class="image" />
      </div>
      <div class="item" @click="handleClick(740666719)">
        <img :src="cursonglist2_0[5].picUrl" class="image" />
      </div>
      <div class="arrow" @click="change(2)">
        <i class="el-icon-arrow-right" style="font-size: 30px"></i>
      </div>
    </div>
    <div class="songlist1_name">
      <span class="name">{{ cursonglist2_0[0].name }}</span>
      <span class="name">{{ cursonglist2_0[1].name }}</span>
      <span class="name">{{ cursonglist2_0[2].name }}</span>
      <span class="name">{{ cursonglist2_0[3].name }}</span>
      <span class="name">{{ cursonglist2_0[4].name }}</span>
      <span class="name">{{ cursonglist2_0[5].name }}</span>
    </div>

    <div class="title">
      <p style="font-weight: bold">巅峰榜</p>
      <p>Witness the birth of a miracle</p>
    </div>
    <div class="items">
      <div class="item1" @click="handleClick(740666719)">
        <img src="../assets/peak/p1.png" class="image" />
      </div>
      <div class="item1" @click="handleClick(740666719)">
        <img src="../assets/peak/p2.png" class="image" />
      </div>
      <div class="item1" @click="handleClick(740666719)">
        <img src="../assets/peak/p3.png" class="image" />
      </div>
      <div class="item1" @click="handleClick(740666719)">
        <img src="../assets/peak/p4.png" class="image" />
      </div>
      <div class="item1" @click="handleClick(740666719)">
        <img src="../assets/peak/p5.png" class="image" />
      </div>
    </div>

    <el-container>
      <el-footer>2022@用户交互技术 </el-footer>
    </el-container>
  </div>

  <!--歌单侧边栏-->
<!--  <div class="player" id="player">-->
<!--    <div class="playback_wrapper">-->
<!--      <div class="playback_blur"></div>-->
<!--      <div-->
<!--        class="playback_thumb"-->
<!--        :style="{ backgroundImage: 'url(' + detailList.coverImgUrl + ')' }"-->
<!--      ></div>-->
<!--      <div class="playback_info">-->
<!--        <div class="title" style="color: #252120">{{ detailList.name }}</div>-->
<!--        <div class="artist">{{ detailList.creator.nickname }}</div>-->
<!--      </div>-->
<!--      <div class="playback_btn_wrapper" style="margin: -9vh 0 0 13vw">-->
<!--        <div class="btn-switch">-->
<!--          <el-button-->
<!--            color="#fab5b0"-->
<!--            type="primary"-->
<!--            size="large"-->
<!--            class="button"-->
<!--            @click="playSong"-->
<!--          >-->
<!--            <template #icon>-->
<!--              <div class="btn-switch">-->
<!--                <i class="btn-play fa fa-play" aria-hidden="true"></i>-->
<!--              </div>-->
<!--            </template>-->
<!--            播放全部</el-button-->
<!--          >-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="list_wrapper">-->
<!--      <ul class="list">-->
<!--        <li-->
<!--          v-for="item in songList"-->
<!--          :key="item.id"-->
<!--          class="list_item"-->
<!--          @click="switchList(item)"-->
<!--        >-->
<!--          <div-->
<!--            class="thumb"-->
<!--            :style="{ backgroundImage: 'url(' + item.al.picUrl + ')' }"-->
<!--          ></div>-->
<!--          <div class="info">-->
<!--            <div class="title">{{ item.name }}</div>-->
<!--            <div class="artist">{{ item.ar[0].name }}</div>-->
<!--          </div>-->
<!--        </li>-->
<!--      </ul>-->
<!--    </div>-->
<!--  </div>-->
</template>

<script >
//import card from "../components/Card.vue"
import { Search } from "@element-plus/icons-vue";
import SearchInput from "../components/SearchInput.vue"
import {  searchPlayListDetails ,searchById,searchLyricById} from "@/apis/songs.js";
import $ from "jquery";
import { gsap, Power2, Expo } from "gsap";
export default {
  name: "MusicSquare",
  components:{SearchInput},
  data() {
    return {
      Search,
      current1: 1,
      current2: 1,
      dialogVisible: false,
      imgList: [
        {
          name: "logo",
          src: require("@/assets/carousel/c1.png"),
          title: "c1.png",
        },
        {
          name: "bg",
          src: require("@/assets/carousel/c2.png"),
          title: "c2.png",
        },
        {
          name: "sadmas",
          src: require("@/assets/carousel/c3.png"),
          title: "c3.png",
        },
        {
          name: "sadmas",
          src: require("@/assets/carousel/c4.png"),
          title: "c4.png",
        },
        {
          name: "sadmas",
          src: require("@/assets/carousel/c5.png"),
          title: "c5.png",
        },
      ],
      cursonglist1_0: [],
      cursonglist1_1: [
        {
          name: "可爱摇滚｜一剂抵挡春困的上好良药",
          picUrl:
            "http://p1.music.126.net/SA6bW1UlPP04rFB2pj-FvQ==/109951165813403264.jpg",
          songs: [],
        },
        {
          name: "民谣 | 一听就是一个故事",
          picUrl:
            "http://p1.music.126.net/UDpjFEHmXInxGd_xMAI12w==/109951162811986419.jpg",
        },
        {
          name: "美学电影｜画语人生，艺术的自我修养",
          picUrl:
            "http://p1.music.126.net/lOdqEbPagBUGf547BjmCMQ==/109951164840594920.jpg",
        },
        {
          name: "欧美｜我们听过的那首歌，原来采样了它",
          picUrl:
            "http://p1.music.126.net/D-7Dhh8trQwSwlqG7HuXYg==/109951163017662871.jpg",
        },
        {
          name: "乐团世代丨台湾乐团编年史（1980-2021）",
          picUrl:
            "http://p1.music.126.net/81tojskuryyjFefILzzfIQ==/109951165930646405.jpg",
        },
        {
          name: "韩国独立音乐|正确的打开方式",
          picUrl:
            "http://p1.music.126.net/WKxWDJu_7o8Dzlq1c0NTSA==/109951163753165342.jpg",
        },
      ],
      cursonglist1_2: [
        {
          name: "小众系｜宝岛台湾的温柔海风",
          picUrl:
            "http://p1.music.126.net/5noG3sFSgZk5vHl9yV_5Mw==/109951165796624203.jpg",
          songs: [],
        },
        {
          name: "水果味汽水｜清甜软萌音捕获你的心",
          picUrl:
            "http://p1.music.126.net/sKLyavYaAPCY0t59-ltuqw==/109951166145967969.jpg",
        },
        {
          name: "FC游戏音乐精选 TOP100",
          picUrl:
            "http://p1.music.126.net/lK5DazcKnzQL-zu75d4O7w==/109951165309734994.jpg",
        },
        {
          name: "新式后摇 | 致敬旅行者号 最孤独的星际行者",
          picUrl:
            "http://p1.music.126.net/deOawP0TcGe62Ve_RoQZPA==/109951166085687441.jpg",
        },
        {
          name: "【德语】莱茵河畔之风拂过心田",
          picUrl:
            "http://p1.music.126.net/kzt5CaQv9Fk3XIiQr5Ubeg==/109951165289612523.jpg",
        },
        {
          name: "浪漫美学 | 宝藏独立乐队指南",
          picUrl:
            "http://p1.music.126.net/9jLAgcjvCm0PhQUBK18DwQ==/109951165443784230.jpg",
        },
      ],
      cursonglist2_0: [],
      cursonglist2_2: [
        {
          name: "可爱摇滚｜一剂抵挡春困的上好良药",
          picUrl:
            "http://p1.music.126.net/SA6bW1UlPP04rFB2pj-FvQ==/109951165813403264.jpg",
          songs: [],
        },
        {
          name: "民谣 | 一听就是一个故事",
          picUrl:
            "http://p1.music.126.net/UDpjFEHmXInxGd_xMAI12w==/109951162811986419.jpg",
        },
        {
          name: "美学电影｜画语人生，艺术的自我修养",
          picUrl:
            "http://p1.music.126.net/lOdqEbPagBUGf547BjmCMQ==/109951164840594920.jpg",
        },
        {
          name: "欧美｜我们听过的那首歌，原来采样了它",
          picUrl:
            "http://p1.music.126.net/D-7Dhh8trQwSwlqG7HuXYg==/109951163017662871.jpg",
        },
        {
          name: "乐团世代丨台湾乐团编年史（1980-2021）",
          picUrl:
            "http://p1.music.126.net/81tojskuryyjFefILzzfIQ==/109951165930646405.jpg",
        },
        {
          name: "韩国独立音乐|正确的打开方式",
          picUrl:
            "http://p1.music.126.net/WKxWDJu_7o8Dzlq1c0NTSA==/109951163753165342.jpg",
        },
      ],
      cursonglist2_1: [
        {
          name: "致郁纯音丨那些用符号编织的梦境",
          picUrl:
            "http://p1.music.126.net/u-Zz9CBR7ij7l1KhZjHbbA==/109951165211748358.jpg",
          songs: [],
        },
        {
          name: "怀旧金曲丨那些原唱是日语的经典老歌",
          picUrl:
            "http://p1.music.126.net/8ZKNk9SRjm6Kn3hrfygvFw==/109951165290790925.jpg",
        },
        {
          name: "不期而遇丨indie音乐场景·「韩国乐队",
          picUrl:
            "http://p1.music.126.net/EFEmzyeAulJSp6t8pih9Zg==/109951164380511761.jpg",
        },
        {
          name: "国人雷鬼 | 探索不拘一格的玩性洒脱",
          picUrl:
            "http://p1.music.126.net/ssmGC5NSAG4hDAV9Yv1NoA==/109951165737454973.jpg",
        },
        {
          name: "童话风电子｜异世界环游，糖果与幻想",
          picUrl:
            "http://p1.music.126.net/c62z33WEe4wBdmdvJWRnMw==/109951164950734667.jpg",
        },
        {
          name: "Funk舞厅 · 摇摆于复古派对",
          picUrl:
            "http://p1.music.126.net/c9KkSyHFhRWHoVIHzpJsfw==/109951166248029688.jpg",
        },
      ],
      input: "",
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
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.current1 = 1;
      this.cursonglist1_0 = this.cursonglist1_1;
      this.current2 = 1;
      this.cursonglist2_0 = this.cursonglist2_1;
    },
    change(num) {
      if (num == 1) {
        if (this.current1 == 1) {
          this.cursonglist1_0 = this.cursonglist1_2;
          this.current1 = 2;
        } else {
          this.cursonglist1_0 = this.cursonglist1_1;
          this.current1 = 1;
        }
      } else {
        if (this.current2 == 1) {
          this.cursonglist2_0 = this.cursonglist2_2;
          this.current2 = 2;
        } else {
          this.cursonglist2_0 = this.cursonglist2_1;
          this.current2 = 1;
        }
      }
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
      console.log(e);
      this.getPlayListDetails(e);

      //在加载完毕后才打开歌单侧边栏
      var list = setInterval(() => {
        if (this.$store.getters.loadingShow == false) {
          this.play();
          this.playSong();

          clearInterval(list);
        }
      }, 500);
    },
    //打开右侧播放列表
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

      //点击"播放全部"后，将当前歌单加载进store并进入播放主页
    async playSong() {
      console.log("搜索前清空canvas")
      //this.$store.commit("issueRequest");
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
        console.log("加入歌单" + song.url);
        if (i === 0) {
          this.$store.commit("loadSong", song);
          this.$store.state.loadingShow = false;
        }
         $("canvas").css("opacity", 0)
      }
      this.$store.commit("loadList", playList);
     this.$message({
          message: '加入歌单成功！',
          type: 'success'
        });
      //关闭右侧歌单栏
      // gsap.to(".dim", 0.5, {
      //   opacity: 0,
      //   display: "none",
      //   ease: Power2.easeInOut,
      // });
      // gsap.to(".nav", 0.5, {
      //   xPercent: -100,
      //   display: "none",
      //   ease: Power2.easeInOut,
      // });
      // gsap.to("#player", 0.5, {
      //   xPercent: 100,
      //   display: "none",
      //   ease: Power2.easeOut,
      // });

      //跳转至首页
      //this.$router.push('/index/main')
     this.$store.commit("getResponse");
    },

  },
};
</script>

<style lang="scss" >
@import url(https://fonts.googleapis.com/css?family=Open+Sans);

.search {
  width: 60%;
  position: absolute;
  top: -46vh;
  left: -25vw;
  display: flex;
}

.searchTerm {
  width: 100%;
  border: 3px solid #00b4cc;
  border-right: none;
  padding: 5px;
  height: 20px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #9dbfaf;
}

.searchTerm:focus {
  color: #00b4cc;
}

.searchButton {
  width: 40px;
  height: 36px;
  border: 1px solid #00b4cc;
  background: #00b4cc;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
}

/*Resize the wrap to see the search bar change!*/
.wrap {
  width: 30%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

//
.image {
  width: 100%;
  height: 100%;
}
.arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  width: 2vw;
  height: 25vh;
  margin: 2px;
  cursor: pointer;
  box-shadow: 0 5px 5px rgba(255, 255, 255, 0.02),
    inset 0 0 0 1px rgba(252, 252, 252, 0.07);
  transform: translateZ(0);
  border-radius: 15px;
  font-size: 20px;
}

.search_button {
  position: absolute;
  left: 310px;
}

.el-header,
.el-footer {
  background-color: rgb(210, 186, 186);
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-carousel__item h3 {
  color: #f2d7d3;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #f2d7d3;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #f2d7d3;
}

.el-carousel {
  width: 1200px;
  left: 170px;
  top: 10px;
}

.title {
  left: -170px;
}

.items {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  position: relative;
  top: 2vh;
}

.item {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  width: 12vw;
  height: 25vh;
  margin: 6px;
  cursor: pointer;
  box-shadow: 0 5px 5px rgba(255, 255, 255, 0.02),
    inset 0 0 0 1px rgba(252, 252, 252, 0.07);
  transform: translateZ(0);
  border-radius: 15px;
}

.item1 {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  width: 12vw;
  height: 50vh;

  margin: 6px;
  margin-bottom: 6vh;
  cursor: pointer;
  box-shadow: 0 5px 5px rgba(255, 255, 255, 0.02),
    inset 0 0 0 1px rgba(252, 252, 252, 0.07);
  transform: translateZ(0);
  border-radius: 15px;
  background-color: rgb(210, 186, 186);
}

.songlist1_name {
  position: relative;
  top: 2vh;
}

.name {
  display: inline-block;
  width: 12vw;
  margin: 6px;
  margin-bottom: 10px;
}

body {
  overflow-x: hidden;
  overflow-y: auto;
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
