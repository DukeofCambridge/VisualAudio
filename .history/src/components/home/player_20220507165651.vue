<template>
  <div class="player">
    <el-slider
      v-model="control.progress"
      active-color="#00cc99"
      @change="changeLong"
      class="el-slider"
      style="box-shadow: #00cc99"
      :show-tooltip="false"
    >
    </el-slider>
    <el-image
      :src="require(`/src/assets/home/previous.svg`)"
      style="margin-left: 17px; margin-bottom: 7px"
    ></el-image>
    <el-image
      :src="require(`/src/assets/home/play.svg`)"
      :style="{ opacity: control.is_stop ? '1' : '0', margin: '0px 12px' }"
      class="play"
    ></el-image>
    <el-image
      :src="require(`/src/assets/home/pause.svg`)"
      :style="{
        opacity: control.is_stop ? '0' : '1',
        margin: '0px 0px 0px -56px',
        position: 'absolute',
      }"
      @click="change()"
      v-on:click.stop
      class="play"
    ></el-image>
    <el-image
      :src="require(`/src/assets/home/next.svg`)"
      style="margin-bottom: 7px"
    ></el-image>
    
      <el-popover
    placement="top"
    :width="100"
    show-arrow = "true"
    effect="light"
    trigger="click"
    
  >
    <template #reference>
<el-image
      :src="require(`/src/assets/home/volume.svg`)"
      class = "volume"
      
    ></el-image>    </template>
    <el-slider v-model="control.volume" vertical height="200px" />

  </el-popover>
  </div>
  <audio
    :src="song.url"
    id="audio"
    ref="audio"
    @timeupdate="getCurr"
    @canplay="showLong"
    @pause="control.is_stop == true"
    @play="control.is_stop == false"
  ></audio>
</template>

<script>
/* import { defineProps } from "vue"; */

export default {
  props: {
    song: {
      url: String, //音乐url
      picUrl: String, //海报url
    },
  },
  data() {
    return {
        /**
         * 控制音乐播放的参数
         */
      control: {
        url: String, //音乐url
        picUrl: String, //海报url
        is_stop: true, //是否处于暂停状态，默认为true
        currentTime: Number, //当前播放时间
        progress: 0, //当前播放进度 = 当前播放时间 / 总时间
        duration: 0, //当前曲目总时间
      },
    };
  },
  methods: {
    /**
     * <el-image>
     * 单击播放键icon触发事件，播放或暂停
     */
    change() {
      var audio = document.querySelector("#audio");
      //暂停 -> 启动
      if (this.control.is_stop == true) {
        console.log("启动");
        this.control.is_stop = false;
        audio.play();
      }
      //启动 -> 暂停
      else {
        console.log("暂停");
        this.control.is_stop = true;
        audio.pause();
      }
    },
    /**
     * <audio>
     * 音频进度改变时触发
     */
    getCurr() {
      this.control.currentTime = parseInt(this.$refs.audio.currentTime);
      this.control.progress = (this.control.currentTime / this.control.duration) * 100;
    },
    /**
     * <audio>
     * 当浏览器能够开始播放指定的音频/视频时，发生 canplay 事件。
     * 音频加载成功后获取时长
     */
    showLong() {
      this.control.duration = parseInt(this.$refs.audio.duration);
    },
    /**
     * <el-slider>
     * 通过移动滑块改变音乐进度
     */
    changeLong() {
      let ct = (this.control.progress * this.$refs.audio.duration) / 100;
      console.log("进度" + ct);
      if (!isNaN(ct)) {
        this.$refs.audio.currentTime = ct;
      }
      this.control.is_stop = false;
      this.$refs.audio.play();
    },
  },
  mounted: async function () {
  },
};
</script>


<style lang="scss" >
/* 播放器组件 */
.player {
  position: relative;
  margin-top: -5.8%;
}

/* 播放按键 */
.play {
  cursor: pointer;
}

.volume{
    cursor: pointer;
    margin:0px -35px 9px 20px
}
</style>

<style scoped>
/* 引入两个style是为了改变el-slider的内置样式 */
/deep/.el-slider__button {
  width: 8px;
  height: 8px;
  background: #00cc99;
  margin: 11px 0 0 12px;
  visibility: hidden;
}
/deep/.el-slider__runway:hover .el-slider__button {
  visibility: visible;
}

/deep/.el-slider__bar {
  background-color: #00cc99;
  height: 5px;
}
/deep/.el-slider__runway {
  background-color: #fff;
  height: 5px;
  border-radius: 0;
  margin-top: 6px;
  margin-bottom: 11px;
}
</style>
