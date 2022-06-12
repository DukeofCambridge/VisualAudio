<template >
    <div class="bgd">
      <div class="tip">
        <p class="AIsing" style="user-select: none">选择您感兴趣的标签吧！</p>
        <div class="connect_btn">
          <div class="connect_btn_text" @click="pushTagSelect" style="cursor:pointer">我选好了!</div>
        </div>
      </div>
      <div class='items'>
        <div class='item' @click="changeTag(0)">
          <card :tag_name="taglist[0]" :img_src="require('../assets/tag/华语.png')" >
            <audio id="audioMusic" class="audio" src="../assets/piano/c-#2.mp3" controls autoplay="autoplay"      hidden="true" ref="audio"></audio>
          </card>
        </div>
        <div class='item' @click="changeTag(1)">
          <card :tag_name="taglist[1]" :img_src="require('../assets/tag/欧美.jpg')"></card>
        </div>
        <div class='item' @click="changeTag(2)">
          <card :tag_name="taglist[2]" :img_src="require('../assets/tag/粤语.jpg')"></card>
        </div>
        <div class='item' @click="changeTag(3)">
          <card :tag_name="taglist[3]" :img_src="require('../assets/tag/民谣.png')"></card>
        </div>

        <div class='item' @click="changeTag(4)">
          <card :tag_name="taglist[4]" :img_src="require('../assets/tag/复古.jpg')"></card>
        </div>
        <div class='item' @click="changeTag(5)">
          <card :tag_name="taglist[5]" :img_src="require('../assets/tag/摇滚.jpg')"></card>
        </div>
        <div class='item' @click="changeTag(6)">
          <card :tag_name="taglist[6]" :img_src="require('../assets/tag/电音.png')"></card>
        </div>
        <div class='item' @click="changeTag(7)">
          <card :tag_name="taglist[7]" :img_src="require('../assets/tag/流行.jpg')"></card>
        </div>
        <div class='item' @click="changeTag(8)">
          <card :tag_name="taglist[8]" :img_src="require('../assets/tag/纯音乐.jpg')"></card>
        </div>
        <div class='item' @click="changeTag(9)">
          <card :tag_name="taglist[9]" :img_src="require('../assets/tag/后摇.png')"></card>
        </div>

        <div class='item' @click="changeTag(10)">
          <card :tag_name="taglist[10]" :img_src="require('../assets/tag/rap.jpg')"></card>
        </div>
        <div class='item' @click="changeTag(11)">
          <card :tag_name="taglist[11]" :img_src="require('../assets/tag/影视.jpg')"></card>
        </div>

        </div>
        <!-- <div id="nextbutton">
            <i class="el-icon-d-arrow-right"></i>
        </div> -->
    </div>
<!-- <div class='options'>
  <button class='dark'></button>
  <button class='light'></button>
</div> -->

</template>

<script>
import $ from "jquery";
import { gsap, Power2 , Expo} from "gsap";
import card from "../components/Card.vue"
import { searchPlayListDetails,searchById,searchLyricById} from "@/apis/songs";
export default {
  name: "TagSelect",
  components:{
    card
  },
  data: function(){
    return{
      taglist:["华语","欧美","粤语","民谣","复古","摇滚","电音","流行","纯音乐","后摇","rap","影视"],
      catID:[2746193185,433008347,2811695732,939320758,926939573,2100636362,2554594486,167966646,2457752542,6860376211,2345048322,2560753628],
      tagselect:[0,0,0,0,0,0,0,0,0,0,0,0],
      songsID:[],
      songs:[],
      singers:["nue_ni","Smile_小千","崔子格","Seredris","不才","陈希同","Jori King","郁欢","石白其"],
    }
  },
  mounted() {
    $('.connect_btn').hover(function(){
          gsap.to($(this), 0.1, {y: -10, ease: Power2.easeInOut}),
              $(this).addClass('shadow')
        },
        function(){
          gsap.to($(this), 0.1, {y: 0, ease: Power2.easeInOut}),
              $(this).removeClass('shadow')
        });
  },
  methods:{
    //改变选中状态
    changeTag(param){
      if(this.tagselect[param]===0)
      {
        this.tagselect[param]=1;
      }
      else
      {
        this.tagselect[param]=0;
      }
      console.log(this.tagselect);
    },

    //获取歌单详情
    async getPlayListDetails(id) {
      this.$store.commit("issueRequest");
      let res = await searchPlayListDetails({ id: id });
      this.$store.commit("getResponse");

      this.detailList = res.playlist;
      this.songs = res.playlist.tracks;
      console.log("曲目列表");
      console.log(this.songs);

    },

    //加入歌单
    handleClick(e) {
      console.log(e);
      this.getPlayListDetails(e);

      //在加载完毕后才打开歌单侧边栏
      var list = setInterval(() => {
        if (this.$store.getters.loadingShow == false) {
          //this.play();
          this.playSong();
          this.$message({
          message: '推荐成功',
          type: 'success'
        });
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
      for (let i = 0; i < this.songs.length && i < 30; i++) {
        let element = this.songs[i];
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

    async pushTagSelect()
    {
      for(var i=0;i<this.tagselect.length;i++)
      {
        if(this.tagselect[i]==1)
        {
          await this.handleClick(this.catID[i]);
          // let res=await searchListById({id:this.catID[i]})
          // for(var j=0;j<10;j++)
          // {
          //   let song = {
          //     name: String,
          //     singer: String,
          //     url: String,
          //     picUrl: String,
          //     lyric: String
          //     };
          //   song.name=res.playlist.tracks[j].name;

          //   var index = Math.floor((Math.random()*this.singers.length));
          //   song.singer=this.singers[index];

          //   let _res = await searchById({id: res.playlist.tracks[j].id});
          //   song.url=_res.data[0].url


          //   song.picUrl = res.playlist.tracks[j].al.picUrl; //海报url

          //   _res = await searchLyricById({id: res.playlist.tracks[j].id})
          //   song.lyric=_res.lrc.lyric

          //   this.$store.commit('pushEmo', song)

          // }

        }

      }
      console.log("ssg")
      console.log(this.$store.state.songList)
        this.$router.push('/index/face')
    }

  },
}
</script>

<style scoped>
.AIsing {
  font-size: 30px;
  font-style: italic;
  color: #ffffff;
  text-shadow: 0px 0px 8px #fff, 0px 0px 42px #f72, 0px 0px 72px #f84, 0px 0px 150px #fa5;
}
.shadow {
  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.4);
}
.connect_btn {
  border-radius: 12px;
  width: 24vh;
  height: 7vh;
  background-image: linear-gradient(280deg, #2f2a29 0%, #2f2a29 100%);
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  position:absolute;
  left:28vw;
  top:2vh;
}
.connect_btn .connect_btn_text {
  font-size: 20px;
  font-style: italic;
  text-shadow: 0px 0px 8px #fff, 0px 0px 42px #f72, 0px 0px 72px #f84, 0px 0px 150px #fa5;
  z-index: 9;
  top: 1vh;
}

.connect_btn:before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  border-radius: 12px;
  transition: opacity 0.5s ease-out;
  opacity: 0;
  background-image: linear-gradient(225deg, #ff6700 0%, #ff2df0 100%);
  transition: 0.5s;
}

.connect_btn:hover:before {
  opacity: 1;
}

 * {
  margin: 0;
  box-sizing: border-box;
}

#nextbutton{
  position: absolute;
  height:50px;
  width: 50px;
  top:620px;
  left: 1420px;
  font-size: 70px;
}

/*.bgd{*/
/*  background: rgb(135, 135, 146);*/
/*  height:705px;*/
/*  width:1520px;*/
/*}*/

.tip{
  position:absolute;
  left:12vw;
  top:4vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

header {
  text-align: center;
  padding-bottom: 3rem;
}

h1 {
  font-size: 2.6rem;
  line-height: 1.2em;
  padding-bottom: 1rem;
  font-weight: 600;
}


text {
  font-size: 1.1rem;
  text-transform: uppercase;
  text-anchor: middle;
  letter-spacing: 1px;
  font-weight: 600;
}



.items {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  position: absolute;
  top:18vh;
}

.item {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  width: 20vw;
  height: 25vh;
  margin: 5px;
  cursor: pointer;
  box-shadow: 0 5px 5px rgba(255, 255, 255, 0.02), inset 0 0 0 1px rgba(252, 252, 252, 0.07);
  transform: translateZ(0);
  border-radius:15px;
}




</style>
