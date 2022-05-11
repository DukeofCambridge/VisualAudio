<template>
  <el-container>
    <el-header>
      <Menu></Menu>
    </el-header>
    <el-main>
      <div class="warp">
        <div
          class="bg"
          :style="{ backgroundImage: 'url(' + song.picUrl + ')' }"
        ></div>
      </div>
    </el-main>
    <el-footer>
      <Player
        :song="song"
        @switch="switchSong"
        @switchOrder="switchOrderMod"
        @end="endSong"
      ></Player>
    </el-footer>
  </el-container>
</template>

<script>
import { searchByKey, searchById, searchAlbumById } from "@/apis/songs.js";
import Player from "../components/home/player.vue";
import Menu from "@/components/Menu";

export default {
  name: "Home",
  data() {
    return {
      is_stop: true,
      currentTime: Number,
      progress: 0,
      duration: 0,
      curr: 0,
      order: "sequence",
      song: {
        url: String,
        picUrl: String, //海报url
      },
      playList: Array(),
    };
  },
  methods: {
    /**
     * 切歌
     */
    switchSong(str) {
      var index = (this.playList || []).findIndex((song) => song === this.song);
      let following = index;
      if (str == "next") {
        if (index >= this.playList.length - 1) {
          following = 0;
        } else {
          following = index + 1;
        }
      } else if (str == "previous") {
        console.log("previous");
        if (index <= 0) {
          following = this.playList.length - 1;
        } else {
          following = index - 1;
        }
      }
      this.song = this.playList[following];
    },
    /**
     * 切换播放顺序
     */
    switchOrderMod(str) {
      if (str == "sequence" || str == "loop" || str == "random") {
        this.order = str;
      }
    },
    //歌曲结束，根据听歌状态切换歌曲
    endSong() {
      /**
       * 顺序播放
       */
      if (this.order == "sequence") {
        this.switchSong("next")
      }
      //单曲循环
      else if(this.order == "loop") {
        console.log("单曲循环")
      }
      //随机播放
      else if(this.order == "random") {
        var index = (this.playList || []).findIndex((song) => song === this.song);
        let following = index;
        let len = this.playList.length
        while (following == index) {
            following = Math.floor(Math.random() * len);    // 随机获取下标
        }
        this.song = this.playList[following];
      }
    },
  },
  mounted: async function () {
    //根据关键词搜索，获取音乐id列表
    //var idList = new Array();
    var res = await searchByKey({ keywords: "方大同" });
    let songs = res.result.songs;
    for (let i = 0; i < songs.length; i++) {
      let element = songs[i];
      let id = element.id;

      let albumId = element.album.id;
      let song = {
        url: String,
        picUrl: String,
      };
      res = await searchById({ id: id });
      song.url = res.data[0].url; //音乐url
      res = await searchAlbumById({ id: albumId });
      song.picUrl = res.songs[0].al.picUrl; //海报url
      this.playList.push(song);
      console.log("加入歌单" + song.url);
    }
    this.song = this.playList[0];
    // console.log('current song', this.song)
  },
  components: {Menu, Player },
};
</script>

<style lang="scss" >
/* wrap和bg用于设置背景图像和遮罩层 */
.warp {
  position: relative;
  margin: -10px 0 0 0;
  width: 100%;
  height: 760px;
  z-index: -1;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  //top: 25vh;
}
.bg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  filter:brightness(0.5) blur(15px);
  /* 横向和纵向居中 */
  background-position-x: center;
  background-position-y: center;
  background-size: 1500px;
}
</style>
