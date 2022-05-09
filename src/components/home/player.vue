<template>
  <el-row style="height: 20%;width: 50%">
    <canvas id="canvas" ></canvas>
  </el-row>
  <el-row class="player">
    <el-slider
      v-model="control.progress"
      active-color="#00cc99"
      @change="changeLong"
      class="process"
      style="box-shadow: #00cc99; width: 95%; margin-left: 2.5%"
      :show-tooltip="false"
    >
    </el-slider>
  </el-row>
  <el-row :gutter="0">
    <el-col :span="2" :offset="1"
      ><div class="timeStr">{{ control.timeStr }}</div></el-col
    >

    <el-col :span="1" :offset="6">
      <div>
        <el-popover
          placement="top"
          :width="0"
          show-arrow="true"
          effect="light"
          trigger="click"
          popper-class="modPopover"
        >
          <template #reference>
            <svg
              t="1652071833689"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1003"
              width="24"
              height="24"
              style="margin: 10px 0px 0px 0px; cursor: pointer"
              :style="{
                opacity: control.order == 'sequence' ? '1' : '0',
              }"
            >
              <path
                d="M106 85.5c-22.1 0-40 17.9-40 40v760.6c0 22.1 17.9 40 40 40s40-17.9 40-40V125.5c0-22.1-17.9-40-40-40zM457.3 85.5c-22.1 0-40 17.9-40 40v760.6c0 22.1 17.9 40 40 40s40-17.9 40-40V125.5c0-22.1-17.9-40-40-40zM955.1 661.4c-7.1-12.4-20.3-20-34.6-20h-72c0-0.8 0.1-1.5 0.1-2.3V125.5c0-22.1-17.9-40-40-40s-40 17.9-40 40v513.6c0 0.8 0 1.5 0.1 2.3h-87c-14.3 0-27.5 7.6-34.6 20-7.1 12.4-7.1 27.6 0 40l119.4 206.8c7.1 12.4 20.3 20 34.6 20s27.5-7.6 34.6-20l119.4-206.8c7.2-12.4 7.2-27.7 0-40z m-154 146.8L751 721.4h100.2l-50.1 86.8z"
                p-id="1004"
                fill="#ffffff"
              ></path>
            </svg>
          </template>
          <div style="font: bold 14px arial, sans-serif; cursor: pointer">
            <div class="option" v-on:click="changeOrder('random')">
              <el-image
                :src="require('@/assets/home/random.svg')"
                style="margin: 0px 0px -6.5px 0px"
              ></el-image
              ><b class="font">随机播放</b>
            </div>
            <hr size="1px" style="margin: 15px 0px 15px 0px; opacity: 0.3" />
            <div class="option" v-on:click="changeOrder('sequence')">
              <el-image
                :src="require('@/assets/home/sequence.svg')"
                style="margin: 0px 0px -6.5px 0px"
              ></el-image
              ><b class="font">顺序播放</b>
            </div>
            <hr size="1px" style="margin: 15px 0px 15px 0px; opacity: 0.3" />
            <div class="option" v-on:click="changeOrder('loop')">
              <el-image
                :src="require('@/assets/home/loop.svg')"
                style="margin: 0px 0px -6.5px 0px"
              ></el-image
              ><b class="font">单曲循环</b>
            </div>
          </div>
        </el-popover>
        <svg
          t="1652084499199"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1003"
          width="24"
          height="24"
          style="
            position: absolute;
            margin: 10px 0px 0 -25px;
            pointer-events: none;
          "
          :style="{
            opacity: control.order == 'loop' ? '1' : '0',
          }"
        >
          <path
            d="M361.5 727.8c-119.1 0-215.9-96.9-215.9-215.9 0-119.1 96.9-215.9 215.9-215.9 2.3 0 4.6-0.2 6.8-0.6v58.3c0 12.3 14 19.4 23.9 12.1l132.6-97.6c8.1-6 8.1-18.2 0-24.2l-132.6-97.6c-9.9-7.3-23.9-0.2-23.9 12.1v58.1c-2.2-0.4-4.5-0.6-6.8-0.6-39.8 0-78.5 7.9-115 23.4-35.2 15-66.8 36.3-94 63.5s-48.6 58.8-63.5 94c-15.5 36.5-23.4 75.2-23.4 115s7.9 78.5 23.4 115c15 35.2 36.3 66.8 63.5 94s58.8 48.6 94 63.5c36.5 15.5 75.2 23.4 115 23.4 22.1 0 40-17.9 40-40s-17.9-40-40-40zM938.2 396.9c-15-35.2-36.3-66.8-63.5-94s-58.8-48.6-94-63.5c-36.5-15.5-75.2-23.4-115-23.4-22.1 0-40 17.9-40 40s17.9 40 40 40c119.1 0 215.9 96.9 215.9 215.9 0 119.1-96.9 215.9-215.9 215.9-4.1 0-8.1 0.6-11.8 1.8v-60.8c0-12.3-14-19.4-23.9-12.1l-132.6 97.6c-8.1 6-8.1 18.2 0 24.2L629.9 876c9.9 7.3 23.9 0.2 23.9-12.1V806c3.7 1.2 7.7 1.8 11.8 1.8 39.8 0 78.5-7.9 115-23.4 35.2-15 66.8-36.3 94-63.5s48.6-58.8 63.5-94c15.5-36.5 23.4-75.2 23.4-115s-7.8-78.5-23.3-115z"
            p-id="1004"
            fill="#ffffff"
          ></path>
          <path
            d="M512.8 660.6c22.1-0.1 39.9-18.1 39.8-40.2l-1.2-214.1c-0.1-22-18-39.8-40-39.8h-0.2c-22.1 0.1-39.9 18.1-39.8 40.2l1.2 214.1c0.1 22 18 39.8 40 39.8h0.2z"
            p-id="1005"
            fill="#ffffff"
          ></path>
        </svg>
        <svg
          t="1652084640536"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1218"
          width="24"
          height="24"
          style="
            position: absolute;
            margin: 10px 0px 0 -25px;
            pointer-events: none;
          "
          :style="{
            opacity: control.order == 'random' ? '1' : '0',
          }"
        >
          <path
            d="M914.2 705L796.4 596.8c-8.7-8-22.7-1.8-22.7 10V688c-69.5-1.8-134-39.7-169.3-99.8l-45.1-77 47-80.2c34.9-59.6 98.6-97.4 167.4-99.8v60.1c0 11.8 14 17.9 22.7 10l117.8-108.1c5.8-5.4 5.8-14.6 0-19.9L796.4 165c-8.7-8-22.7-1.8-22.7 10v76H758c-4.7 0-9.3 0.8-13.5 2.3-36.5 4.7-72 16.6-104.1 35-42.6 24.4-78.3 59.8-103.1 102.2L513 432l-24.3-41.5c-24.8-42.4-60.5-77.7-103.1-102.2C343 263.9 294.5 251 245.3 251H105c-22.1 0-40 17.9-40 40s17.9 40 40 40h140.3c71.4 0 138.3 38.3 174.4 99.9l47 80.2-45.1 77c-36.2 61.7-103 99.9-174.4 99.9H105c-22.1 0-40 17.9-40 40s17.9 40 40 40l142 0.1h0.2c49.1 0 97.6-12.9 140.2-37.3 42.7-24.4 78.3-59.8 103.2-102.2l22.4-38.3 22.4 38.3c24.8 42.4 60.5 77.8 103.2 102.2 33.1 18.9 69.6 30.9 107.3 35.4 3.8 1.2 7.8 1.8 11.9 1.8l15.9 0.1v55c0 11.8 14 17.9 22.7 10L914.2 725c5.9-5.5 5.9-14.7 0-20z"
            p-id="1219"
            fill="#ffffff"
          ></path>
        </svg>
      </div>
    </el-col>
    <el-col :span="1">
      <el-image
        :src="require(`/src/assets/home/previous.svg`)"
        style="cursor: pointer"
        @click="switchPrevious()"
        class="icon"
        v-on:click.stop
      ></el-image
    ></el-col>
    <el-col :span="1">
      <el-image
        :src="require(`/src/assets/home/play.svg`)"
        :style="{ opacity: control.is_stop ? '1' : '0', cursor: 'pointer' }"
      ></el-image>
      <el-image
        :src="require(`/src/assets/home/pause.svg`)"
        :style="{
          opacity: control.is_stop ? '0' : '1',
          margin: '0px 0px 0px -44px',
          position: 'absolute',
          cursor: 'pointer',
        }"
        @click="change()"
        v-on:click.stop
      ></el-image>
    </el-col>
    <el-col :span="1">
      <el-image
        :src="require(`/src/assets/home/next.svg`)"
        style="cursor: pointer"
        class="icon"
        @click="switchNext()"
        v-on:click.stop
      ></el-image>
    </el-col>
    <el-col :span="1">
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
            class="icon"
            :style="{
              opacity: control.volume > 0 && control.muted == false ? '1' : '0',
              cursor: 'pointer',
              margin: '9px 0 0 0',
            }"
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
      <el-image
        :src="require(`/src/assets/home/silence.svg`)"
        class="volume icon"
        style="position: absolute; margin: 9px 0 0 -24px; pointer-events: none"
        :style="{
          opacity: control.volume > 0 && control.muted == false ? '0' : '1',
        }"
      ></el-image>
    </el-col>
    <el-col :span="10"></el-col>
  </el-row>

  <audio
    :src="song.url"
    id="audio"
    ref="audio"
    @ended="end()"
    @timeupdate="getCurr"
    @canplay="showLong"
    @pause="control.is_stop == true"
    @play="control.is_stop == false"
    crossOrigin="anonymous"
  ></audio>
</template>

<script>
export default {
  emits: ["end", "switch", "switchOrder"],
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
        color: "#bfbfbf",
        order: "sequence", //播放模式（sequence、random、loop）
        timeStr: "00:00 / 00:00", //当前播放进度（展示用）
      },
      canvas: {
        context: "",
        analyser:"",
        source:""
      }
    };
  },
  /* watch: {
    control: function (val) {
      
    deep: true,
    immediate: true
  }, */
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
        this.onLoadAudio();
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
      let time = parseInt(this.control.currentTime);

      let total = parseInt(this.control.duration);
      let timeStr = "";
      let min = Math.floor(time / 60);
      let sec = time % 60;
      if (min < 10) {
        timeStr += "0";
      }
      timeStr += min + ":";
      if (sec < 10) {
        timeStr += "0";
      }
      timeStr += sec + " / ";
      min = Math.floor(total / 60);
      sec = total % 60;
      if (min < 10) {
        timeStr += "0";
      }
      timeStr += min + ":";
      if (sec < 10) {
        timeStr += "0";
      }
      timeStr += sec;
      this.control.timeStr = timeStr;
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
      console.log("进度" + this.control.progress);
      if (!isNaN(ct)) {
        this.$refs.audio.currentTime = ct;
      }
      this.control.is_stop = false;
      this.$refs.audio.play();
      this.onLoadAudio();
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
    /**
     * mouseover触发变色事件
     */
    over() {
      console.log("悬停");
      this.control.color = "#00cc99";
    },
    /**
     * mouseleave触发变色事件
     */
    leave() {
      console.log("离开");
      this.control.color = "#bfbfbf";
    },
    /**
     * 切歌
     */
    switchNext() {
      this.control.is_stop = false;
      this.$refs.audio.autoplay = true;
      this.$emit("switch", "next");
    },
    switchPrevious() {
      this.control.is_stop = false;
      this.$refs.audio.autoplay = true;
      this.$emit("switch", "previous");
    },
    /**
     * 改变播放模式
     */
    changeOrder(order) {
      this.control.order = order;
      this.$emit("switchOrder", order);
      if (order == "loop") {
        this.$refs.audio.loop = true;
      } else {
        this.$refs.audio.loop = false;
      }
    },
    //歌曲结束，根据播放模式切歌
    end() {
      this.$emit("end");
    },
    onLoadAudio() {
      //var audio = this.$refs.audio;
      var context = this.canvas.context;
      var analyser = this.canvas.analyser;
      var source = this.canvas.source;

      source.connect(analyser);
      analyser.connect(context.destination);

      var bufferLength = analyser.frequencyBinCount;
      var dataArray = new Uint8Array(bufferLength);

      var canvas = document.getElementById("canvas");
      canvas.width = 800;
      canvas.height = 1000;
      console.log("canvas "+canvas)
      console.log("width "+canvas.width)
      console.log("height "+canvas.height)
      var ctx = canvas.getContext("2d");
      var WIDTH = canvas.width;
      var HEIGHT = canvas.height;

      var barWidth = (WIDTH / bufferLength) * 1.5;
      console.log("width "+canvas.width)
      var barHeight;
      var halfWidth = WIDTH / 2;
      let a = 0.75 / bufferLength;
      function renderFrame() {
        requestAnimationFrame(renderFrame);

        analyser.getByteFrequencyData(dataArray);

        ctx.clearRect(0, 0, WIDTH, HEIGHT);

        for (var i = 0, x = 0; i < bufferLength; i++) {
          barHeight = dataArray[i] / 4;
          let multi = a * i + 0.75;
          barHeight *= multi;
          // Create gradient
          var grd=ctx.createLinearGradient(0,870,0,882);

          grd.addColorStop(0,"#00ffcc");

          grd.addColorStop(1,"#0099cc");
          //ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
          ctx.fillStyle = grd;
          ctx.fillRect(
            x + halfWidth,
            882 - barHeight,
            barWidth / 8,
            barHeight
          );
          ctx.fillRect(
            halfWidth - x,
            882 - barHeight ,
            barWidth / 8,
            barHeight
          );
          x += barWidth/8 + 2;
        }
      }

      renderFrame();
      // setInterval(renderFrame, 44);
    },
  },
  mounted() {
    this.$refs.audio.volume = 0.5;
    this.control.volume = 50;
          this.canvas.context = new (window.AudioContext || window.webkitAudioContext)();
    this.canvas.analyser = this.canvas.context.createAnalyser();
    this.canvas.analyser.fftSize = 128;
    this.canvas.source = this.canvas.context.createMediaElementSource(this.$refs.audio);
  },
  setup() {},
};
</script>


<style lang="scss">
/* 播放器组件 */
.player {
  position: relative;
  margin-top: -5.8%;
}

#volumeIcon1 {
  cursor: pointer;
  margin: 1px 6px -13px 8px;
}
#volumeIcon2 {
  cursor: pointer;
  margin: -15px 0 12px 8px;
}
.icon {
  margin: 6px 0 0 0;
}
.icon:hover {
  -webkit-filter: drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.5));
}
.option:hover {
  -webkit-filter: brightness(-50%);
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
#canvas {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
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
.el-popover.modPopover {
  margin: 0px 0 10px 0px;
  min-width: 100px;
  .popper__arrow,
  .popper__arrow::after {
    display: none !important;
  }
}
.font {
  margin: 0px 0px 0px 8px;
}

.timeStr {
  margin: 11px 0 0 0;
  font: bold 18px, monospace;
  color: #fff;
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
