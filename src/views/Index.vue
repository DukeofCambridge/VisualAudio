<template>
  <body>
    <div class="wrapper">
      <!--公共部分-->
      <!--遮罩层-->
      <div class="dim"></div>
      <!--左导航栏-->
      <Nav></Nav>
      <!--右播放器-->
      <div style="margin-top: 25px">
        <Player
          ref="player"
          @switch="switchSong"
          @switchOrder="switchOrderMod"
          @switchList="switchList"
          @end="endSong"
          @timeUpdate="updateTime"
          @change="changeStatus"
        ></Player>
      </div>
      <AudioWave
        v-if="wave"
        ref="wave"
        class="audioWave"
      ></AudioWave>
      <!--歌词-->
      <Lyric class="lyric" ref="lyric" :song="song"></Lyric>

      <!--子路由方式切换界面-->
      <router-view></router-view>
    </div>
  </body>
</template>

<script>
import $ from "jquery";
import { gsap, Power2 } from "gsap";
import Player from "@/components/Player.vue";
import AudioWave from "@/components/home/AudioWave.vue";
import Lyric from "@/components/Lyric.vue";
import { mapState } from "vuex";
//import { searchByKey, searchById, searchAlbumById, searchLyricById } from "@/apis/songs.js";
import Nav from "@/components/Nav";

export default {
  name: "Index",
  components: { Nav, Player, Lyric, AudioWave },
  /*  computed: {
    ...mapState(["songList","song"]),    // userid是store/index.js的state里面定义的变量名
  }, */
  computed: mapState({
    // 传字符串参数 'count' 等同于 `state => state.count`
    song: "song",
    songList: "songList",
    waveShow: "waveShow"
  }),
  watch: {
    song(newVal, oldVal) {
      console.log("index监听song")
      console.log("newVal")
      console.log(newVal)
      console.log("oldVal")
      console.log(oldVal)
      //判断oldVal是否在歌曲列表中，若oldValue为空，证明为第一次渲染
      if(this.songList.indexOf(oldVal) < 0) {
        this.wave = false;
        this.$nextTick(() => {
          // 重新渲染波浪组件
          console.log("第一次更新歌曲，刷新wave");
          this.wave = true;
        });
      } else {
        //首先删除之前的wave组件
        $("canvas").remove();
        console.log("test1")
        this.$refs.wave.stop()
        this.$refs.wave.audio = null;
        this.wave = false;
        this.$nextTick(() => {
          // 重新渲染波浪组件
          console.log("更新歌曲，刷新wave");
          this.wave = true;
          console.log("test2")
        });
        
      }
    },
    songList: {
      handler(newVal, oldVal) {
        console.log("index监听songList")
        console.log("newVal")
        console.log(newVal)
        console.log("oldVal")
        console.log(oldVal)

        //歌单更新后，默认为暂停状态
        this.$refs.player.control.is_stop = true
        // 若为第一次渲染，则无需删除之前的组件
        if (oldVal.length <= 0) {
          console.log("第一次更新歌单")
        } else {
          console.log("更新歌单")
          //$("canvas").remove();
          //this.$refs.wave.audio = null;
        }
        /* this.wave = false;
        //this.$parent.$refs.wave.audio = null
        this.$nextTick(() => {
          // 重新渲染波浪组件
          console.log("重新加载");
          this.wave = true;
        }); */
      },
      deep: true,
    },
  },
  data() {
    return {
      is_stop: true,
      progress: 0,
      duration: 0,
      curr: 0,
      order: "sequence",
      /*       song: {
        url: String, //歌曲url
        picUrl: "", //海报url
        name: "", //歌曲名称
        singer: "", //歌手名称
        lyric: String //歌曲歌词
      },
      playList: Array(), */
      wave: false,
    };
  },

  mounted: async function () {
    // 点击遮罩层或跳转界面后关闭侧边栏、去除遮罩层
    $(".dim,.nav_link").click(function () {
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
    });

    // ===== Mini Player - Play/Pause Switch =====

    $(".btn-play").click(function () {
      gsap.to($(".btn-play"), 0.2, {
        x: 20,
        opacity: 0,
        scale: 0.3,
        display: "none",
        ease: Power2.easeInOut,
      });
      gsap.fromTo(
        $(".btn-pause"),
        0.2,
        { x: -20, opacity: 0, scale: 0.3, display: "none" },
        { x: 0, opacity: 1, scale: 1, display: "block", ease: Power2.easeInOut }
      );
    });

    $(".btn-pause").click(function () {
      gsap.to($(".btn-pause"), 0.2, {
        x: 20,
        opacity: 0,
        display: "none",
        scale: 0.3,
        ease: Power2.easeInOut,
      });
      gsap.fromTo(
        $(".btn-play"),
        0.2,
        { x: -20, opacity: 0, scale: 0.3, display: "none" },
        { x: 0, opacity: 1, display: "block", scale: 1, ease: Power2.easeInOut }
      );
    });
    //当前音乐磁带，鼠标悬浮
    // ===== HoverIn/HoverOut Flash Effect =====

    $(".track_info").hover(
      function () {
        gsap.fromTo(
          $(this),
          0.5,
          { opacity: 0.5, ease: Power2.easeInOut },
          { opacity: 1 }
        );
      },
      function () {
        $(this).css("opacity", "1");
      }
    );

    //搜索歌曲部分
    //根据关键词搜索，获取音乐id列表
    //var idList = new Array();
    /* let res = await searchByKey({ keywords: "方大同" });
    let songs = res.result.songs;
    console.log('songs:',songs)
    for (let i = 0; i < songs.length && i < 10; i++) {
      let element = songs[i];
      let id = element.id;

      let albumId = element.album.id;
      let song = {
        name: String,
        singer: String,
        url: String,
        picUrl: String,
        lyric: String
      };
      song.name = element.name;
      song.singer = element.artists[0].name;

      res = await searchById({ id: id });
      song.url = res.data[0].url; //音乐url

      res = await searchAlbumById({ id: albumId });
      song.picUrl = res.songs[0].al.picUrl; //海报url

      // 获取歌词
      res = await searchLyricById({id: id})
      song.lyric = res.lrc.lyric

      this.playList.push(song);
      console.log("加入歌单" + song.url);
      if (i === 0) {
        this.song = song;
        this.$store.state.loadingShow = false
        this.$store.commit('loadSong', this.song)
      }
      this.$store.commit('loadList',this.playList)

    }
    
 */
    //console.log("歌词："+this.song.lyric)
  },
  methods: {
    /**
     * 刷新AudioWave
     */
    refreshWave() {
      //this.$refs.wave.pause();
      //this.wave = false;
      //console.log("删除");
      //$("canvas").not('[id^="canvas"]').remove();
      //$("canvas").remove();
      //this.$refs.wave.audio = null;
      this.$nextTick(() => {
        // 重新渲染波浪组件
        
        console.log("重启");
        //在waveAudio加载完毕后再重启
        var time = setInterval(() => {
          console.log("检测wave渲染完成情况")
          //通过音量检测wave是否渲染完成
          console.log(this.$refs.wave.audio.sound.getVolume())

          //检测到volume<1，证明渲染完成，自动播放
           if (this.$refs.wave.audio.sound.getVolume() < 1) {
            console.log("渲染完成");
            //this.$refs.wave.audio.play();
            this.$refs.player.songPlay();
            clearInterval(time);
          } 
        }, 500);

      });
    },
    /**
     * 切歌
     */
    switchSong(str) {
      let index = (this.songList || []).findIndex((song) => song === this.song);
      console.log("index" + index);
      let following = index;
      if (str === "next") {
        if (index >= this.songList.length - 1) {
          following = 0;
        } else {
          following = index + 1;
        }
      } else if (str === "previous") {
        console.log("previous");
        if (index <= 0) {
          following = this.songList.length - 1;
        } else {
          following = index - 1;
        }
      }
      console.log(this.songList[following]);
      this.$store.commit("loadSong", this.songList[following]);

      this.refreshWave();
    },
    /**
     * 切换播放顺序
     */
    switchOrderMod(str) {
      if (str === "sequence" || str === "loop" || str === "random") {
        this.order = str;
      }
    },
    //歌曲结束，根据听歌状态切换歌曲
    endSong() {
      /**
       * 顺序播放
       */
      if (this.order === "sequence") {
        this.switchSong("next");
      }
      //单曲循环
      else if (this.order === "loop") {
        console.log("单曲循环");
      }
      //随机播放
      else if (this.order === "random") {
        var index = (this.songList || []).findIndex(
          (song) => song === this.song
        );
        let following = index;
        let len = this.songList.length;
        while (following === index) {
          following = Math.floor(Math.random() * len); // 随机获取下标
        }
        //this.song = this.songList[following];
        this.$store.commit("loadSong", this.songList[following]);
      }
      this.refreshWave();
    },
    /**
     * 点击播放列表切歌
     */
    switchList(item) {
      //this.song = item
      this.$store.commit("loadSong", item);
      this.refreshWave();
    },

    /**
     * 切歌时，获取新的歌词
     */
    getLyric() {},
    /**
     * 更新目前播放时间
     */
    updateTime(time) {
      this.curr = time;
      this.$refs.lyric.timeUpdate(time);
    },
    /**
     * 启动或暂停音乐
     */
    changeStatus(str) {
      if (str === "play") {
        console.log("playMusic");
        this.$refs.wave.play();
      }
      if (str === "pause") {
        console.log("pauseMusic");

        this.$refs.wave.pause();
      }
    },
    /**
     * 情绪推荐音乐
     */
    pushEmo() {},
  },
};
</script>

<style>


</style>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Oswald:300,400,700");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css");
i[class^="btn"] {
  font-size: 20px;
  margin-right: 30px;
  cursor: pointer;
}

* {
  box-sizing: border-box;
}

ul,
li {
  list-style: none;
  padding: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

body {
  margin: 0;
  background-color: #f2d7d3;
  font-family: "Oswald", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1rem;
  overflow: hidden;
  width: 100vw;
}

@keyframes drift {
  from {
    transform: rotate(0deg);
  }
  from {
    transform: rotate(360deg);
  }
}

.mini-player {
  color: #252120;
  position: fixed;
  height: 32px;
  right: 2.2vw;
  top: 2.2vw;
  z-index: 1;
  display: flex;
  align-items: center;
}

.track_info_wrapper {
  border-right: 1px solid rgba(24, 38, 69, 0.11);
  margin-right: 23px;
  padding-right: 30px;
}
.track_info_wrapper .track_info {
  display: flex;
  align-items: center;
  cursor: pointer;
  opacity: 1;
}
.track_info_wrapper .track_info .thumb {
  width: 32px;
  height: 32px;
  margin-right: 10px;
  background-color: #d3d6da;
  border-radius: 1px;
  background-size: cover;
  background-image: url(https://i1.sndcdn.com/artworks-000167527289-p3zpfg-large.jpg);
}
.track_info_wrapper .track_info .title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
}
.track_info_wrapper .track_info .artist {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  color: rgba(37, 33, 32, 0.7);
  text-align: left;
}

.mini-player_btn_wrapper {
  display: flex;
  justify-content: space-between;
  position: relative;
}

.btn-switch {
  width: 30px;
  display: flex;
  margin-right: 30px;
  justify-content: center;
}

.playback_btn_wrapper .btn-switch {
  margin-right: 0;
}

.btn-play,
.btn-pause {
  position: absolute;
}

.btn-pause {
  display: none;
  opacity: 0;
}

.dim {
  will-change: opacity;
  width: 100vw;
  height: 100vh;
  top: 0;
  /*background-color: rgba(37, 33, 32, 0.2);*/
  position: fixed;
  background-color: rgba(224, 221, 209, 0.701961);
  display: none;
  z-index: 2;
  opacity: 0;
}

.playback_info {
  display: block;
  position: absolute;
  left: 164px;
  z-index: 10;
  margin: 42px 8px 8px 70px;
  width: 55%;
  min-width: 100px;
  mix-blend-mode: color-burn;
}
.playback_info .title {
  font-size: 30px;
  display: inline;
  color: #252120;
}
.playback_info .artist {
  margin-top: 14px;
  font-size: 16px;
  opacity: 0.34;
  color: #252120;
}

.playback_btn_wrapper {
  position: absolute;
  z-index: 10;
  mix-blend-mode: color-burn;
  width: 124px;
  left: 55px;
  top: 240px;
  opacity: 0.6;
  display: flex;
  justify-content: space-between;
}
.playback_btn_wrapper i {
  margin: 0;
}

.playback_timeline {
  position: absolute;
  width: 60%;
  left: 234px;
  top: 238px;
  mix-blend-mode: color-burn;
  color: #252120;
}

.playback_timeline_start-time,
.playback_timeline_end-time {
  font-size: 14px;
  opacity: 0.4;
  margin-right: 15px;
  display: inline-block;
  vertical-align: middle;
}

.playback_timeline_slider {
  height: 24.67px;
  position: relative;
  cursor: pointer;
  width: 65%;
  margin-right: 15px;
  opacity: 1;
  display: inline-block;
  vertical-align: middle;
}
.playback_timeline_slider .slider_base {
  width: 100%;
  height: 2px;
  background-color: rgba(37, 33, 32, 0.12);
  border-radius: 2px;
  position: absolute;
  top: 12px;
}
.playback_timeline_slider .slider_progress {
  transform: matrix(0.15812, 0, 0, 1, 0, 0);
  transform-origin: 0 0;
  width: 100%;
  height: 2px;
  background-color: rgba(37, 33, 32, 0.5);
  border-radius: 2px;
  position: absolute;
  top: 12px;
}
.playback_timeline_slider .slider_handle {
  transform: matrix(1, 0, 0, 1, 37, 0);
  width: 12px;
  height: 12px;
  background-color: #252120;
  border-radius: 50%;
  position: absolute;
  top: 7px;
  left: -6px;
}

.list_wrapper {
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
}
.list .info .title {
  font-size: 15px;
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

#curator {
  width: 100%;
  height: 100%;
  position: fixed;
  text-align: center;
  color: #252120;
  display: none;
}
#curator .curator_title_wrapper {
  position: fixed;
  margin-top: 17.55vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
}
#curator .curator_title_wrapper span {
  font-size: 2.16vh;
}
#curator .curator_title_wrapper .curator_title {
  font-size: 7.425vh;
}
#curator .curator_title_wrapper .curator_line {
  width: 30px;
  height: 2px;
  border-radius: 2px;
  margin: 0 30px;
  background-color: #252120;
}

.curator_list {
  position: absolute;
  text-align: center;
  font-size: 14px;
  width: 100vw;
  height: 100%;
  -webkit-overflow-scrolling: touch;
  white-space: nowrap;
  opacity: 0;
}

.connect_btn {
  border-radius: 50%;
  width: 18vh;
  height: 18vh;
  background-image: linear-gradient(280deg, #2f2a29 0%, #2f2a29 100%);
  color: #f1dfdd;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
}
.connect_btn .connect_btn_text {
  z-index: 9;
}

.connect_btn:before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transition: opacity 0.5s ease-out;
  opacity: 0;
  background-image: linear-gradient(225deg, #ff6700 0%, #ff2df0 100%);
  transition: 0.5s;
}

.connect_btn:hover:before {
  opacity: 1;
}

.curator_list_content_desc {
  position: relative;
  pointer-events: none;
  margin: 0 20px;
  margin-bottom: 60px;
}

.curator_list_content {
  padding: 0 50px;
  white-space: nowrap;
  text-align: left;
  position: absolute;
  top: 50%;
  margin-top: -6.6666666667vh;
  display: flex;
  align-items: center;
}
.curator_list_content .item {
  cursor: pointer;
  height: 25vh;
  margin: 0 20px;
}
.curator_list_content .item:active {
  transform: scale(0.95);
}
.curator_list_content .info {
  opacity: 0;
}
.curator_list_content .info .name,
.curator_list_content .info .desc {
  font-size: 13px;
  color: #f1dfdd;
  clear: both;
  position: relative;
  padding: 0 3px 1px 3px;
  background-color: #252120;
  display: inline-block;
  float: left;
  clear: both;
  border-radius: 3px 3px 0px 0px;
}
.curator_list_content .thumb {
  border-radius: 50%;
  width: 18vh;
  height: 18vh;
  background-size: cover;
  margin-bottom: 20px;
  transition: 0.5s;
}
.lyric {
  display: none;
  margin-top: -60px;
}

</style>
