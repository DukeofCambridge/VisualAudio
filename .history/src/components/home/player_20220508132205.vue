<template>
  <div class="player">
    <el-slider
      v-model="control.progress"
      active-color="#00cc99"
      @change="changeLong"
      class="process"
      style="box-shadow: #00cc99;width:95%;margin-left:2.5%"
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
      effect="light"
      trigger="click"
      popper-class="myPopover"
    >
      <template #reference>
        <el-image
          :src="require('/src/assets/home/+'"control.volume == 0 || control.muted == true ? '1' : '0''.svg`)"
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
        style="margin-top: 20px"
      />
      <div style="margin: 12px 0; font-size: 17px">{{ control.volume }}%</div>
      <hr size="1px" style="margin: 15px 0px 15px -20px; opacity: 0.3" />
      <svg
        t="1651917648019"
        id="volumeIcon1"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="5325"
        width="24"
        height="24"
        :style="{
            opacity: control.volume == 0 || control.muted == true ? '1' : '0',
          }"
          @click="closeVolume()"
          v-on:click.stop
      >
        <path
          d="M469.333333 106.666667v810.666666a21.333333 21.333333 0 0 1-36.42 15.086667L225.833333 725.333333H53.333333a53.393333 53.393333 0 0 1-53.333333-53.333333V352a53.393333 53.393333 0 0 1 53.333333-53.333333h172.5l207.08-207.086667A21.333333 21.333333 0 0 1 469.333333 106.666667z m548.42 612.42a21.333333 21.333333 0 0 0 0-30.173334L840.833333 512l176.92-176.913333a21.333333 21.333333 0 1 0-30.173333-30.173334L810.666667 481.833333 633.753333 304.913333a21.333333 21.333333 0 0 0-30.173333 30.173334L780.5 512l-176.92 176.913333a21.333333 21.333333 0 0 0 30.173333 30.173334L810.666667 542.166667l176.913333 176.92a21.333333 21.333333 0 0 0 30.173333 0z"
          :fill="control.color"
          p-id="5326" 
        @mouseover="over()"
        @mouseleave="leave()"
        ></path>
      </svg>
      <svg
        t="1651922404709"
        id="volumeIcon2"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="9945"
        width="24"
        height="24"
        :style="{
            opacity: control.volume > 0 && control.muted == false ? '1' : '0',
          }"
          @click="closeVolume()"
          v-on:click.stop
      >
        <path
          d="M469.333333 106.666667v810.666666a21.333333 21.333333 0 0 1-36.42 15.086667L225.833333 725.333333H53.333333a53.393333 53.393333 0 0 1-53.333333-53.333333V352a53.393333 53.393333 0 0 1 53.333333-53.333333h172.5l207.08-207.086667A21.333333 21.333333 0 0 1 469.333333 106.666667z m146.793334 296.2a21.333333 21.333333 0 0 0-3.526667 29.96 127.366667 127.366667 0 0 1 0 158.346666 21.333333 21.333333 0 0 0 33.493333 26.433334 170.733333 170.733333 0 0 0 0-211.213334 21.333333 21.333333 0 0 0-29.966666-3.526666z m212.213333-19.3A339.393333 339.393333 0 0 0 753.333333 270.666667a346.585333 346.585333 0 0 0-22.046666-20.213334 21.333333 21.333333 0 1 0-27.446667 32.666667c6.666667 5.586667 13.146667 11.553333 19.333333 17.726667C779.6 357.22 810.666667 432.22 810.666667 512s-31.066667 154.78-87.48 211.186667c-6.173333 6.173333-12.666667 12.14-19.333334 17.726666a21.333333 21.333333 0 1 0 27.446667 32.666667 346.585333 346.585333 0 0 0 22.046667-20.213333 341.706667 341.706667 0 0 0 74.98-369.793334z"
          :fill="control.color"
          p-id="9946"
          @mouseover="over()"
          @mouseleave="leave()"
        ></path>
      </svg>
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
        volume: 100, //音量（0-100）
        muted: false, //是否静音
        color: "#bfbfbf"
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
      console.log("当前音量:" + this.control.volume + " " + audio.volume);
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
      this.control.volume = this.$refs.audio.volume * 100;
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
      let volume = this.control.volume / 100;
      console.log("改变音量：" + volume);
      this.$refs.audio.volume = volume;
    },
    /**
     * <el-image>
     * 点击音量案件，静音或取消
     */
    closeVolume() {
      console.log(
        "是否静音" + this.$refs.audio.muted + " " + this.control.muted
      );
      this.control.muted = !this.control.muted;
      this.$refs.audio.muted = !this.$refs.audio.muted;
    },
    over() {
        console.log("悬停")
        this.control.color = "#00cc99"
    },
    leave() {
        console.log("离开")
        this.control.color = "#bfbfbf"
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

#volumeIcon1 {
  cursor: pointer;
  margin: 1px 6px -13px 8px;
}
#volumeIcon2 {
  cursor: pointer;
  margin: -15px 0 12px 8px;
}

</style>

<style lang="scss">
.el-popover.myPopover {
  padding: 0 0 0 20px;
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
  width: 6px;
  height: 6px;
  background: #00cc99;
  margin: 11px 0 0 13px;
  visibility: hidden;
}
:deep() .el-slider__runway:hover .el-slider__button {
  visibility: visible;
}

:deep() .el-slider__bar {
  background-color: #00cc99;
  height: 3px;
}
:deep() .el-slider__runway {
  background-color: #fff;
  height: 3px;
  border-radius: 0;
  margin-top: 6px;
  margin-bottom: 11px;
}

</style>
