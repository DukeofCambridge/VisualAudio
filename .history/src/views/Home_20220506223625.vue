<template>

    
    <el-container>
     <el-main >
     <div  class="warp">
       <div class="bg" :style="{backgroundImage:'url('+url+')'}"> </div>
     </div>
     </el-main>
     <el-footer class="palyer">
       <hr style="FILTER:alpha(opacity=100,finishopacity=0,style=1); margin-bottom:13px; " width="97%" color=#fffff SIZE=3>
      <hr style="FILTER:alpha(opacity=100,finishopacity=0,style=1); margin-top:-16px;width:50%;margin-right:50%" width="97%" color=#00cc99 SIZE=3
      @change="changeLong"
      >
       <el-image :src="require(`/src/assets/home/previous.svg`)"
       style="margin-left:17px; margin-bottom:7px"
       ></el-image>
       <!-- <el-image :src="require(`/src/assets/home/${playUrl}`)"
       style="margin: 0 12px"
       @click="change"
       ></el-image> -->
       <el-image :src="require(`/src/assets/home/play.svg`)"
       :style="{'opacity':is_stop?'1':'0','margin':'0px 12px'}"
       
       ></el-image>
       <el-image :src="require(`/src/assets/home/pause.svg`)"
        :style="{'opacity':is_stop?'0':'1','margin':'0px 0px 0px -56px','position':'absolute'}"
       @click="change()"
       v-on:click.stop
       ></el-image>
       <el-image :src="require(`/src/assets/home/next.svg`)"
       style="margin-bottom:7px"
       ></el-image>
       
     </el-footer>
     
    </el-container> 
      <audio  :src="mUrl"
       id="audio"
       ref="audio"
        @pause="is_stop==true"
        @play="is_stop==false"
      >
    </audio>
</template>

<script>

import {searchByKey, searchById, searchAlbumById} from '@/apis/songs.js'


export default {
  name: 'Home',
  data() {
    return{
      url: String,
      mUrl: String,
      is_stop: true,
      currentTime: Number,
      progress: 0,
      duration: 0,
      curr: 0
    }
  },
  methods: {
    change() {
      var audio =document.querySelector('#audio');
      /* console.log("持续时长"+audio.duration)
      console.log("音量"+audio.volume)
      console.log("当前时间"+audio.currentTime) */
      console.log("当前时间"+this.currentTime)
      //暂停 -> 启动
      if(this.is_stop == true) {
        console.log("启动")
        this.is_stop = false;
        audio.play();
      }
      //启动 -> 暂停
      else {
        console.log("暂停")
        this.is_stop = true;
        audio.pause();
      }
    },
        getCurr() { //音频进度改变时触发
 
        this.curr = parseInt(this.$refs.audio.currentTime)
 
        this.progress = this.curr / this.duration * 100
        console.log("当前时间")
    },
    showLong() { //音频加载成功后获取时长
        this.duration = parseInt(this.$refs.audio.duration)
 
 
    },
    changeLong() { //改变进度
        let ct = this.progress * this.duration / 100
        if (!isNaN(ct)) {
            this.$refs.audio.currentTime = ct
        }
 
        console.log(this.progress)
    },
  },
  mounted: async function(){
    //根据关键词搜索，获取音乐id列表
    var idList = new Array();
    var res = await searchByKey({keywords: "方大同"})
    res.result.songs.forEach(element => {
        //console.log(element.id)
        idList.push(element.id)
      });
    var id = idList[1]
    console.log("歌曲id"+id)
    var albumId = res.result.songs[0].album.id
    console.log("专辑id"+albumId)
    //根据歌曲id获取歌曲详细信息（包括Url）
    res = await searchById({id: id})
    console.log(this.url)
    console.log(res.data[0].url)
    this.mUrl = res.data[0].url //音乐url

    //根据专辑id获取专辑详情（包括海报）
    res = await searchAlbumById({id: albumId})
    this.url = res.songs[0].al.picUrl             //海报url
    //console.log("ww"+res.songs[0])
    console.log("海报url"+this.url)
  },
    
  watchMusicTime(){
    //监听播放时间
    let musicDom = document.querySelector('audio');//获取Audio的DOM节点
    //使用事件监听方式捕捉事件
    musicDom.addEventListener("timeupdate",function(){//监听音频播放的实时时间事件
        let timeDisplay;
        //用秒数来显示当前播放进度
        timeDisplay = Math.floor(musicDom.currentTime);//获取实时时间
        // console.log(timeDisplay)
            //持续时间    （歌曲长度）
        //console.log(musicDom.duration)
      
        //this.$store.state.realMusicTime = minutes+":"+seconds;//将实时时间存储到vuex中
        // console.log(_this.$store.state.realMusicTime);
        this.currentTime = timeDisplay
        
    },false);
}

}
</script>

<style scoped>
/* wrap和bg用于设置背景图像和遮罩层 */
.warp{
  position: relative;
  margin: -10px 0 0 0;
  width: 100%;
  height: 755px;
   z-index: -1; 
  background-color: rgba(0,0,0,0.5);
}
.bg{
width: 100%;
height: 100%;
position:absolute;
top: 0;
left: 0;
z-index: -1; 
filter: blur(15px);
/* 横向和纵向居中 */
background-position-x: center;
background-position-y: center;
background-size:1630px
}

.palyer{
  position: relative;
  margin-top: -5.8%;
}

</style>
