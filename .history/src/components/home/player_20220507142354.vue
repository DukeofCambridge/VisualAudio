<template>
    <div  class="player">
           <el-slider v-model="progress" active-color="#00cc99" @change="changeLong" class="el-slider"
      style="box-shadow: #00cc99;"
      :show-tooltip = "false"
  
      >
                    </el-slider>
       <el-image :src="require(`/src/assets/home/previous.svg`)"
       style="margin-left:17px; margin-bottom:7px"
       ></el-image>
       <el-image :src="require(`/src/assets/home/play.svg`)"
       :style="{'opacity':is_stop?'1':'0','margin':'0px 12px'}"
       class = "play"
       ></el-image>
       <el-image :src="require(`/src/assets/home/pause.svg`)"
        :style="{'opacity':is_stop?'0':'1','margin':'0px 0px 0px -56px','position':'absolute'}"
       @click="change()"
       v-on:click.stop
       class = "play"
       ></el-image>
       <el-image :src="require(`/src/assets/home/next.svg`)"
       style="margin-bottom:7px"
       ></el-image>
    </div>
</template>

<script>


export default player({
    data() {
    return{
      song: {
        url: String,   //音乐url
        picUrl: String, //海报url
        is_stop: true,  //是否处于暂停状态，默认为true
        currentTime: Number, //当前播放时间
        progress: 0,    //当前播放进度 = 当前播放时间 / 总时间
        duration: 0,    //当前曲目总时间   
      }
    }
  },
  methods: {
      /**
       * <el-image>
       * 单击播放键icon触发事件，播放或暂停
       */
    change() {
      var audio =document.querySelector('#audio');
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
    /**
     * <audio>
     * 音频进度改变时触发
     */
        getCurr() { 
        this.currentTime = parseInt(this.$refs.audio.currentTime)
        this.progress = this.currentTime / this.duration * 100
    },
    /**
     * <audio>
     * 当浏览器能够开始播放指定的音频/视频时，发生 canplay 事件。
     * 音频加载成功后获取时长
     */
    showLong() {
        this.duration = parseInt(this.$refs.audio.duration)
    },
    /**
     * <el-slider>
     * 通过移动滑块改变音乐进度
     */
    changeLong() {
        let ct = this.progress * this.$refs.audio.duration / 100
        console.log("进度"+ct)
        if (!isNaN(ct)) {
            this.$refs.audio.currentTime = ct
        }
        console.log(this.progress)
    },
  },
    setup() {
        
    },
})
</script>


<style lang="scss" >
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

.player{
  position: relative;
  margin-top: -5.8%;
}

.play{
  cursor:pointer
}

</style>

<style scoped>
  /deep/.el-slider__button {
    width: 8px;
    height: 8px;
    background: #00cc99;
   margin: 11px 0 0 10px;
    border-radius: 10;
    visibility: hidden;
  }
  /deep/.el-slider__runway:hover .el-slider__button{
    visibility: visible;
  }

  /deep/.el-slider__bar{
    background-color: #00cc99;
    height: 5px;
  }
  /deep/.el-slider__runway{
    background-color: #fff;
    height: 5px;
    border-radius: 0;
    margin-top: 6px;
    margin-bottom: 11px;
  }
  
</style>
