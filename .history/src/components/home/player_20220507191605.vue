<template>
  <div class="player">
    <el-slider
      v-model="control.progress"
      active-color="#00cc99"
      @change="changeLong"
      class="process"
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
      :width="0"
      show-arrow="true"
      effect="light"
      trigger="click"
      popper-class="myPopover"
    >
      <template #reference>
        <el-image
          :src="require(`/src/assets/home/volume.svg`)"
          class="volume"
        ></el-image>
      </template>
      <el-slider
      :show-tooltip="false"
        class="volumepro"
        v-model="control.volume"
        vertical
        height="120px"
        @change="changeVolume"
        
      />
      <div
      style="margin: 12px 0; font-size: 17px"
      >{{control.volume}}%</div>
       <hr size="1px" style="margin: 10px 8px 10px -8px"/>
        <svg t="1651917648019" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5325" width="24" height="24"><path d="M469.333333 106.666667v810.666666a21.333333 21.333333 0 0 1-36.42 15.086667L225.833333 725.333333H53.333333a53.393333 53.393333 0 0 1-53.333333-53.333333V352a53.393333 53.393333 0 0 1 53.333333-53.333333h172.5l207.08-207.086667A21.333333 21.333333 0 0 1 469.333333 106.666667z m548.42 612.42a21.333333 21.333333 0 0 0 0-30.173334L840.833333 512l176.92-176.913333a21.333333 21.333333 0 1 0-30.173333-30.173334L810.666667 481.833333 633.753333 304.913333a21.333333 21.333333 0 0 0-30.173333 30.173334L780.5 512l-176.92 176.913333a21.333333 21.333333 0 0 0 30.173333 30.173334L810.666667 542.166667l176.913333 176.92a21.333333 21.333333 0 0 0 30.173333 0z" fill="#bfbfbf" p-id="5326">
            </path></svg>
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
        volume: 50,
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
      this.control.progress =
        (this.control.currentTime / this.control.duration) * 100;
    },
    /**
     * <audio>
     * 当浏览器能够开始播放指定的音频/视频时，发生 canplay 事件。
     * 音频加载成功后获取时长
     */
    showLong() {
      this.control.duration = parseInt(this.$refs.audio.duration);
      this.control.volume = this.$refs.audio.volume
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
    changeVolume() {
      let volume = this.control.volume /100;
      console.log("改变音量："+volume)
      this.$refs.audio.volume = volume
    }
  },
  mounted: async function () {},
};
</script>


<style lang="scss">
/* 播放器组件 */
.player {
  position: relative;
  margin-top: -5.8%;
}

/* 播放按键 */
.play {
  cursor: pointer;
}

.volume {
  cursor: pointer;
  margin: 0px -35px 9px 20px;
}

</style>
<style lang="scss">
.el-popover.myPopover {
  padding:0 0 0 20px;
  margin: 0 0 0 90px;
  min-width: 60px;
  .popper__arrow,
  .popper__arrow::after {
    display: none !important;
  }
}
  </style>
<style scoped>
/* 引入两个style是为了改变el-slider的内置样式 */
:deep() .el-slider__button {
  width: 8px;
  height: 8px;
  background: #00cc99;
  margin: 11px 0 0 12px;
  visibility: hidden;
}
:deep() .el-slider__runway:hover .el-slider__button {
  visibility: visible;
}

:deep() .el-slider__bar {
  background-color: #00cc99;
  height: 5px;
}
:deep() .el-slider__runway {
  background-color: #fff;
  height: 5px;
  border-radius: 0;
  margin-top: 6px;
  margin-bottom: 11px;
}

/* 
:deep() .volumepro .el-slider__runway {
  background-color: #00cc99;
  height: 5px;
  border-radius: 0;
  margin-top: 6px;
  margin-bottom: 11px;
}
:deep() .volumepro .el-slider__button {
  width: 8px;
  height: 8px;
  background: #00cc99;
  margin: 11px 0 0 12px;
  visibility: hidden;
} */
</style>
