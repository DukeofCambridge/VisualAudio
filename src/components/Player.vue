<template>
  <!--   <el-row style="height: 20%; width: 50%">
    <canvas id="canvas"></canvas>
  </el-row> -->
  <!--   <el-row class="player">
    <el-slider
      v-model="control.progress"
      active-color="#00cc99"
      @change="changeLong"
      class="process"
      style="box-shadow: #00cc99; width: 95%; margin-left: 2.5%"
      :show-tooltip="false"
    >
    </el-slider>
  </el-row> -->
  <el-row :gutter="0">
    <!-- <el-col :span="2" :offset="1"
      > <div class="timeStr">{{ control.timeStr }}</div> </el-col
    > -->
    <el-col :span="1" :offset="15">
      <el-image :src="song.picUrl" style="border-radius: 10%"> </el-image
    ></el-col>
    <el-col :span="2"
      ><p
        style="
          text-align: left;
          margin: -4px 0 0 10px;
          white-space: nowrap;

          font-size: 18px;
        "
      >
        {{ song.name }}
      </p>
      <p
        style="
          text-align: left;
          margin: 5px 0 0 10px;
          text-overflow: ellipsis;
          font-size: 15px;
          color: rgba(37, 33, 32, 0.7);
        "
      >
        {{ song.singer }}
      </p>
      <div
        style="
          width: 2px;
          height: 50px;
          background: #8a8a8a;
          opacity: 0.3;
          margin: -45px 0 0 110px;
        "
      ></div>
    </el-col>
    <div style="margin-right: 80px; margin-top: 7px">
      <el-col :span="1" style="">
        <div>
          <el-popover
            placement="bottom"
            :width="0"
            show-arrow="true"
            effect="light"
            trigger="click"
            popper-class="modPopover"
            ref="orderList"
          >
            <template #reference>
              <svg
                t="1652071833689"
                v-if="control.order == 'sequence'"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="1003"
                width="22"
                height="22"
                style="margin: 10px 0px 0px -10px; cursor: pointer"
              >
                <path
                  d="M106 85.5c-22.1 0-40 17.9-40 40v760.6c0 22.1 17.9 40 40 40s40-17.9 40-40V125.5c0-22.1-17.9-40-40-40zM457.3 85.5c-22.1 0-40 17.9-40 40v760.6c0 22.1 17.9 40 40 40s40-17.9 40-40V125.5c0-22.1-17.9-40-40-40zM955.1 661.4c-7.1-12.4-20.3-20-34.6-20h-72c0-0.8 0.1-1.5 0.1-2.3V125.5c0-22.1-17.9-40-40-40s-40 17.9-40 40v513.6c0 0.8 0 1.5 0.1 2.3h-87c-14.3 0-27.5 7.6-34.6 20-7.1 12.4-7.1 27.6 0 40l119.4 206.8c7.1 12.4 20.3 20 34.6 20s27.5-7.6 34.6-20l119.4-206.8c7.2-12.4 7.2-27.7 0-40z m-154 146.8L751 721.4h100.2l-50.1 86.8z"
                  p-id="1004"
                  fill="#ffffff"
                ></path>
              </svg>
              <svg
                t="1652084499199"
                v-else-if="control.order == 'loop'"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="1003"
                width="22"
                height="22"
                style="margin: 10px 0px 0px 0px; cursor: pointer"
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
                v-else
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="1218"
                width="22"
                height="22"
                style="margin: 10px 0px 0px 0px; cursor: pointer"
              >
                <path
                  d="M914.2 705L796.4 596.8c-8.7-8-22.7-1.8-22.7 10V688c-69.5-1.8-134-39.7-169.3-99.8l-45.1-77 47-80.2c34.9-59.6 98.6-97.4 167.4-99.8v60.1c0 11.8 14 17.9 22.7 10l117.8-108.1c5.8-5.4 5.8-14.6 0-19.9L796.4 165c-8.7-8-22.7-1.8-22.7 10v76H758c-4.7 0-9.3 0.8-13.5 2.3-36.5 4.7-72 16.6-104.1 35-42.6 24.4-78.3 59.8-103.1 102.2L513 432l-24.3-41.5c-24.8-42.4-60.5-77.7-103.1-102.2C343 263.9 294.5 251 245.3 251H105c-22.1 0-40 17.9-40 40s17.9 40 40 40h140.3c71.4 0 138.3 38.3 174.4 99.9l47 80.2-45.1 77c-36.2 61.7-103 99.9-174.4 99.9H105c-22.1 0-40 17.9-40 40s17.9 40 40 40l142 0.1h0.2c49.1 0 97.6-12.9 140.2-37.3 42.7-24.4 78.3-59.8 103.2-102.2l22.4-38.3 22.4 38.3c24.8 42.4 60.5 77.8 103.2 102.2 33.1 18.9 69.6 30.9 107.3 35.4 3.8 1.2 7.8 1.8 11.9 1.8l15.9 0.1v55c0 11.8 14 17.9 22.7 10L914.2 725c5.9-5.5 5.9-14.7 0-20z"
                  p-id="1219"
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
        </div>
      </el-col>
      <el-col :span="1" style="margin-left: -20px">
        <el-image
          :src="require(`/src/assets/home/previous.svg`)"
          style="cursor: pointer"
          @click="switchPrevious()"
          class="icon"
          v-on:click.stop
        ></el-image
      ></el-col>
      <el-col :span="1" style="margin-left: -15px">
        <el-image
          :src="require(`/src/assets/home/play.svg`)"
          :style="{ opacity: control.is_stop ? '1' : '0', cursor: 'pointer' }"
        ></el-image>
        <el-image
          :src="require(`/src/assets/home/pause.svg`)"
          :style="{
            opacity: control.is_stop ? '0' : '1',
            margin: '0px 0px 0px -40px',
            position: 'absolute',
            cursor: 'pointer',
          }"
          @click="change()"
          v-on:click.stop
        ></el-image>
      </el-col>
      <el-col :span="1" style="margin-left: -15px">
        <el-image
          :src="require(`/src/assets/home/next.svg`)"
          style="cursor: pointer"
          class="icon"
          @click="switchNext()"
          v-on:click.stop
        ></el-image>
      </el-col>
      <el-col :span="1" style="margin-left: -15px">
        <el-popover
          placement="bottom"
          :width="0"
          show-arrow="true"
          effect="light"
          trigger="click"
          popper-class="myPopover"
        >
          <template #reference>
            <el-image
              :src="require(`/src/assets/home/volume.svg`)"
              :style="{
                opacity:
                  control.volume > 0 && control.muted == false ? '1' : '0',
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
          <div style="margin: 12px 0; font-size: 17px">
            {{ control.volume }}%
          </div>
          <hr size="1px" style="margin: 15px 0px 15px -20px; opacity: 0.3" />
          <svg
            t="1651917648019"
            id="volumeIcon1"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="5325"
            width="22"
            height="22"
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
            width="22"
            height="22"
            :style="{
              opacity: control.volume > 0 && control.muted == false ? '1' : '0',
            }"
            style="margin-bottom: 6.5px"
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
          style="
            position: absolute;
            margin: 9px 0 0 -24px;
            pointer-events: none;
          "
          :style="{
            opacity: control.volume > 0 && control.muted == false ? '0' : '1',
          }"
        ></el-image>
      </el-col>
    </div>
    <el-col :span="1" style="margin-left: -15px; margin-top: 10px"
      ><el-image
        :src="require(`/src/assets/home/menu.svg`)"
        style="cursor: pointer"
        @click="open()"
      ></el-image
    ></el-col>
  </el-row>

  <div class="dim"></div>
  <div class="player" id="player">
    <div class="playback_wrapper">
      <div class="playback_blur"></div>
      <div
        class="playback_thumb"
        :style="{ backgroundImage: 'url(' + song.picUrl + ')' }"
      ></div>
      <div class="playback_info">
        <div class="title">{{ song.name }}</div>
        <div class="artist">{{ song.singer }}</div>
      </div>
      <div class="playback_btn_wrapper">
        <i
          class="btn-prev fa fa-step-backward"
          aria-hidden="true"
          @click="switchPrevious()"
        ></i>
        <div class="btn-switch">
          <i
            class="btn-play fa fa-play"
            aria-hidden="true"
            @click="btn_play"
          ></i
          ><i
            class="btn-pause fa fa-pause"
            aria-hidden="true"
            @click="btn_pause"
          ></i>
        </div>
        <i
          class="btn-next fa fa-step-forward"
          aria-hidden="true"
          @click="switchNext()"
        ></i>
      </div>
      <!--       <div class="playback_timeline">
        <div class="playback_timeline_start-time">00:31</div>
        <div class="playback_timeline_slider">
          <div class="slider_base"></div>
          <div class="slider_progress"></div>
          <div class="slider_handle"></div>
        </div>
        <div class="playback_timeline_end-time">03:11</div>
      </div> -->
      <i
        class="timeStr"
        style="position: absolute; margin: 235px 70px 0 -17px"
        >{{ control.proStr }}</i
      >
      <el-slider
        v-model="control.progress"
        active-color="#00cc99"
        @change="changeLong"
        class="process"
        style="
          box-shadow: #00cc99;
          width: 30%;
          margin-left: 55%;
          margin-top: 40%;
        "
        :show-tooltip="false"
      >
      </el-slider>
      <i
        class="timeStr"
        style="position: absolute; margin: -23px 0 280px 230px"
        >{{ control.durStr }}</i
      >
    </div>
    <div class="list_wrapper">
      <ul class="list">
        <li
          v-for="item in playList"
          :key="item.id"
          v-bind:class="{
            'list_item selected': item == song,
            list_item: item != song,
          }"
          @click="switchList(item)"
        >
          <div
            class="thumb"
            :style="{ backgroundImage: 'url(' + item.picUrl + ')' }"
          ></div>
          <div class="info">
            <div class="title">{{ item.name }}</div>
            <div class="artist">{{ item.singer }}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <audio
    :src="song.url"
    id="audio"
    ref="audio"
    @ended="end()"
    @timeupdate="getCurr"
    @canplay="showLong"
    @pause="control.is_stop == true"
    @play="control.is_stop == false"
    @durationchange="updateSong"
    crossOrigin="anonymous"
  ></audio>
</template>

<script >
import $ from "jquery";
import { TimelineMax, gsap, Power2, Expo, Elastic } from "gsap";

export default {
  name: "Player",
  emits: ["end", "switch", "switchOrder", "switchList"],
  props: {
    playList: Array(), //歌曲列表
    song: {
      url: String, //音乐url
      picUrl: String, //海报url
      name: String, //歌曲名称
      singer: String, //歌手名称
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
        proStr: "00:00", //当前播放进度（每秒更新）
        durStr: "00:00", //当前歌曲总时长（切歌时更新）
      },
      canvas: {
        context: "",
        analyser: "",
        source: "",
      },
    };
  },

  methods: {
    nav() {
      // ===== If Nav is not open
      if ($(".nav").css("display") === "none") {
        gsap.to(".dim", 0.5, {
          opacity: 1,
          display: "block",
          ease: Power2.easeInOut,
        });
        gsap.fromTo(
          ".nav",
          0.5,
          { xPercent: -100 },
          { xPercent: 0, display: "block", ease: Expo.easeOut }
        );
        gsap.staggerFrom(
          ".nav li",
          0.5,
          { opacity: 0, y: 20, ease: Power2.easeInOut },
          0.1
        );

        $(".logo-text").css({ opacity: "0", display: "none" });
      }
      // ===== If Nav is open	and in Curation page
      else if (
        $(".nav").css("display") === "block" &&
        $("#curator").css("display") === "block"
      ) {
        gsap.to(".dim", 0.5, {
          opacity: 0,
          display: "none",
          ease: Power2.easeInOut,
        });
        gsap.to(".nav", 0.5, {
          xPercent: -100,
          display: "none",
          ease: Expo.easeOut,
        });
        // $('.logo-text').css({'opacity': '1', 'display': 'block'});
      } else {
        gsap.to(".dim", 0.5, {
          opacity: 0,
          display: "none",
          ease: Power2.easeInOut,
        });
        gsap.to(".nav", 0.5, {
          xPercent: -100,
          display: "none",
          ease: Expo.easeOut,
        });
        $(".logo-text").css({ opacity: "1", display: "block" });
      }
    },
    // ===== Open Player + dim on =====
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
        //this.onLoadAudio();

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
          {
            x: 0,
            opacity: 1,
            scale: 1,
            display: "block",
            ease: Power2.easeInOut,
          }
        );
      }
      //启动 -> 暂停
      else {
        console.log("暂停");
        this.control.is_stop = true;
        audio.pause();

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
          {
            x: 0,
            opacity: 1,
            display: "block",
            scale: 1,
            ease: Power2.easeInOut,
          }
        );
      }
    },
    /**
     * <audio>
     * 音频进度改变时触发
     * 更改显示的播放时间
     */
    getCurr() {
      this.control.currentTime = parseInt(this.$refs.audio.currentTime);
      this.control.progress =
        (this.control.currentTime / this.control.duration) * 100;
      let time = parseInt(this.control.currentTime);

      let proStr = "";
      let min = Math.floor(time / 60);
      let sec = time % 60;
      if (min < 10) {
        proStr += "0";
      }
      proStr += min + ":";
      if (sec < 10) {
        proStr += "0";
      }
      proStr += sec;

      this.control.proStr = proStr;
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
      //this.onLoadAudio();
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
      this.control.muted = !this.control.muted;
      this.$refs.audio.muted = !this.$refs.audio.muted;
    },
    /**
     * mouseover触发变色事件
     */
    over() {
      this.control.color = "#00cc99";
    },
    /**
     * mouseleave触发变色事件
     */
    leave() {
      this.control.color = "#bfbfbf";
    },
    /**
     * 切歌
     */
    switchNext() {
      var audio = document.querySelector("#audio");

      audio.autoplay = true;
      this.$emit("switch", "next");

      console.log("启动");
      this.control.is_stop = false;
      audio.play();
      //this.onLoadAudio();

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
        {
          x: 0,
          opacity: 1,
          scale: 1,
          display: "block",
          ease: Power2.easeInOut,
        }
      );
    },
    switchPrevious() {
      var audio = document.querySelector("#audio");
      audio.autoplay = true;
      this.$emit("switch", "previous");

      console.log("启动");
      this.control.is_stop = false;
      audio.play();
      //this.onLoadAudio();

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
        {
          x: 0,
          opacity: 1,
          scale: 1,
          display: "block",
          ease: Power2.easeInOut,
        }
      );
    },
    /**
     * 改变播放模式
     */
    changeOrder(order) {
      this.$refs.orderList.hide();
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
      this.control.is_stop = false;
      this.$refs.audio.autoplay = true;
    },
    /**
     * 打开播放列表
     */
    open() {
      //this.$emit("openList");
      this.play();
    },
    /**
     * 点击播放列表切歌
     */
    switchList(item) {
      this.$emit("switchList", item);
    },
    /**
     * 歌曲切换时，改变显示的总时长
     */
    updateSong() {
      this.control.duration = this.$refs.audio.duration;
      let total = parseInt(this.control.duration);
      console.log("时长" + total);
      let durStr = "";

      let min = Math.floor(total / 60);
      let sec = total % 60;
      if (min < 10) {
        durStr += "0";
      }
      durStr += min + ":";
      if (sec < 10) {
        durStr += "0";
      }
      durStr += sec;
      this.control.durStr = durStr;
    },
    /**
     *
     */
    btn_play() {
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

      var audio = document.querySelector("#audio");
      //暂停 -> 启动
      console.log("启动");
      this.control.is_stop = false;
      audio.play();
      //this.onLoadAudio();
    },
    btn_pause() {
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

      var audio = document.querySelector("#audio");

      console.log("暂停");
      this.control.is_stop = true;
      audio.pause();
    },

    /* onLoadAudio() {
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
      var ctx = canvas.getContext("2d");
      var WIDTH = canvas.width;
      var HEIGHT = canvas.height;

      var barWidth = (WIDTH / bufferLength) * 1.5;
      var barHeight;
      var halfWidth = WIDTH / 2;
      let a = 0.75 / bufferLength;
      function renderFrame() {
        requestAnimationFrame(renderFrame);
        analyser.getByteFrequencyData(dataArray);
        ctx.clearRect(0, 0, WIDTH, HEIGHT);
        let multi = 0;
        for (var i = 0, x = 0; i < bufferLength; i++) {
          barHeight = dataArray[i] / 3;
          multi = a * i + 0.75;
          barHeight *= multi;
          
          // Create gradient
          var grd = ctx.createLinearGradient(0, 865, 0, 882);

          //调节明暗
          let down = parseInt((256 - dataArray[i]) / 2);
          let g1 = 255 - down;
          let g2 = 255 - down;
          let b1 = 180 - down;
          let b2 = 255 - down;
          let firstColor = "rgb(" + 0 + "," + g1 + "," + b1 + "," + 1 + ")";
          let secondColor = "rgb(" + 0 + "," + g2 + "," + b2 + "," + 0.3 + ")";
          //grd.addColorStop(0,"#00ffcc");

          //grd.addColorStop(1,"#0099cc","transparent");
          grd.addColorStop(0, firstColor);
          grd.addColorStop(1, secondColor);
          //ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
          ctx.lineJoin = "round";

          ctx.fillStyle = grd;
          ctx.fillRect(x + halfWidth, 882 - barHeight, barWidth / 8, barHeight);
          ctx.fillRect(halfWidth - x, 882 - barHeight, barWidth / 8, barHeight);
          x += barWidth / 8 + 2;
        }
      }

      renderFrame();
      // setInterval(renderFrame, 44);
    }, */
  },
  mounted() {
    this.$refs.audio.volume = 0.5;
    this.control.volume = 50;
    /* this.canvas.context = new (window.AudioContext ||
      window.webkitAudioContext)();
    this.canvas.analyser = this.canvas.context.createAnalyser();
    this.canvas.analyser.fftSize = 128;
    this.canvas.source = this.canvas.context.createMediaElementSource(
      this.$refs.audio
    ); */

    // ===== Open Nav =====
    $(".burger-wrapper").click(function () {
      // ===== If Nav is not open
      if ($(".nav").css("display") == "none") {
        gsap.to(".dim", 0.5, {
          opacity: 1,
          display: "block",
          ease: Power2.easeInOut,
        });
        gsap.fromTo(
          ".nav",
          0.5,
          { xPercent: -100 },
          { xPercent: 0, display: "block", ease: Expo.easeOut }
        );
        gsap.staggerFrom(
          ".nav li",
          0.5,
          { opacity: 0, y: 20, ease: Power2.easeInOut },
          0.1
        );

        $(".logo-text").css({ opacity: "0", display: "none" });
      }
      // ===== If Nav is open	and in Curation page
      else if (
        $(".nav").css("display") == "block" &&
        $("#curator").css("display") == "block"
      ) {
        gsap.to(".dim", 0.5, {
          opacity: 0,
          display: "none",
          ease: Power2.easeInOut,
        });
        gsap.to(".nav", 0.5, {
          xPercent: -100,
          display: "none",
          ease: Expo.easeOut,
        });
        // $('.logo-text').css({'opacity': '1', 'display': 'block'});
      } else {
        gsap.to(".dim", 0.5, {
          opacity: 0,
          display: "none",
          ease: Power2.easeInOut,
        });
        gsap.to(".nav", 0.5, {
          xPercent: -100,
          display: "none",
          ease: Expo.easeOut,
        });
        $(".logo-text").css({ opacity: "1", display: "block" });
      }
    });

    // ===== Open Player + dim on =====

    $(".btn-open-player, .track_info").click(function () {
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
    });

    $(".dim").click(function () {
      gsap.to(".dim", 0.5, {
        opacity: 0,
        display: "none",
        ease: Power2.easeInOut,
      });
      gsap.to("#player", 0.5, {
        xPercent: 100,
        display: "none",
        ease: Expo.easeOut,
      });
      gsap.to(".nav", 0.5, {
        xPercent: -100,
        display: "none",
        ease: Power2.easeInOut,
      });
      gsap.to(".mini-player", 0.5, { x: 0, ease: Expo.easeOut });
    });

    // ===== Mini Player - Play/Pause Switch =====
    /* 
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
    }); */

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

    $(".burger-wrapper, .logo-text, .back_btn").hover(
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

    $(".btn-open-player").hover(
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

    $(".nav a").hover(
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

    // ===== Player - List Items =====
    $(".list_item").click(function () {
      $(".list_item").removeClass("selected");
      $(this).addClass("selected");
    });

    // ===== Main Play Button - Hover =====

    $(".text-wrap .text").hover(
      function () {
        gsap.to($(".main-btn_wrapper"), 0.5, {
          opacity: 1,
          display: "block",
          position: "absolute",
          scale: 1,
          ease: Elastic.easeOut.config(1, 0.75),
        }),
          gsap.to($(".line"), 0.5, {
            css: { scaleY: 0.6, transformOrigin: "center center" },
            ease: Expo.easeOut,
          });
      },

      function () {
        gsap.to($(".main-btn_wrapper"), 0.5, {
          opacity: 0,
          display: "none",
          scale: 0,
          ease: Elastic.easeOut.config(1, 0.75),
        }),
          gsap.to($(".line"), 0.5, {
            css: { scaleY: 1, transformOrigin: "center center" },
            ease: Expo.easeOut,
          });
      }
    );

    // ===== Curation Page  =====
    // ===== List  =====
    $(".item").hover(
      function () {
        gsap.to($(this), 0.5, { y: -30, ease: Power2.easeInOut }),
          $(this).children(".thumb").addClass("shadow"),
          $(this).children(".connect_btn").addClass("shadow"),
          gsap.to($(this).children(".info"), 0.5, {
            opacity: 1,
            ease: Power2.easeInOut,
          });
      },

      function () {
        gsap.to($(this), 0.5, { y: 0, ease: Power2.easeInOut }),
          $(this).children(".thumb").removeClass("shadow"),
          $(this).children(".connect_btn").removeClass("shadow"),
          gsap.to($(this).children(".info"), 0.5, {
            opacity: 0,
            ease: Power2.easeInOut,
          });
      }
    );

    // ===== Home Page to Curation Page Transition  =====
    // ===== Main Play Button Activate =====

    $(".text-wrap .text").click(function () {
      var homeToMain = new TimelineMax({});

      // Hide
      $(".logo-text").css("display", "none"),
        homeToMain.to(
          $(".line, .text-wrap"),
          0.5,
          { display: "none", opacity: 0, y: -20, ease: Power2.easeInOut },
          0
        ),
        // Background down
        homeToMain.to(
          $(".wave-container"),
          1,
          { yPercent: 30, ease: Power2.easeInOut },
          0
        ),
        // Show
        $("#curator").css("display", "block"),
        homeToMain.fromTo(
          $(".back_btn"),
          0.8,
          { x: 15 },
          { display: "flex", opacity: 1, x: 0, ease: Power2.easeInOut },
          1
        ),
        homeToMain.fromTo(
          $(".curator_title_wrapper"),
          0.8,
          { opacity: 0, x: 30 },
          { opacity: 1, x: 0, ease: Power2.easeInOut },
          1
        ),
        homeToMain.fromTo(
          $(".curator_list"),
          0.8,
          { opacity: 0, display: "none", x: 30 },
          { opacity: 1, x: 0, display: "block", ease: Power2.easeInOut },
          1.2
        );
    });

    // ===== Curation Page to Playlist Page Transition  =====
    // ===== Item Activate =====
    $(".item").click(function () {
      var mainToPlaylist = new TimelineMax({});

      // Hide
      mainToPlaylist.to(
        $("#curator"),
        0.8,
        { display: "none", opacity: 0, scale: 1.1, ease: Power2.easeInOut },
        0
      );

      // mainToPlaylist.fromTo($('.curator_list'), 0.5, {opacity: 1, display: 'block', x: 0},
      // 									{opacity: 0, x: 30, display: 'none', ease: Power2.easeInOut}, 0.5),
    });

    // ===== Back Button Activate =====

    $(".back_btn").click(function () {
      // ===== From Playlist(3) to Main(2)
      if ($("#curator").css("display") == "none") {
        var playlistToMain = new TimelineMax({});

        // Hide
        playlistToMain.fromTo(
          $("#curator"),
          0.8,
          { display: "none", opacity: 0, scale: 1.1 },
          { display: "block", opacity: 1, scale: 1, ease: Power2.easeInOut },
          0
        );
      }

      // From Main(2) to Home(1)
      else {
        var mainToHome = new TimelineMax({});
        // Hide
        mainToHome.fromTo(
          $(".curator_title_wrapper"),
          0.5,
          { opacity: 1, x: 0 },
          { opacity: 0, x: 30, ease: Power2.easeInOut },
          0.2
        ),
          mainToHome.fromTo(
            $(".curator_list"),
            0.5,
            { opacity: 1, display: "block", x: 0 },
            { opacity: 0, x: 30, display: "none", ease: Power2.easeInOut },
            0.5
          ),
          mainToHome.to(
            $(".back_btn"),
            0.5,
            { display: "none", opacity: 0, x: 15, ease: Power2.easeInOut },
            0.5
          ),
          mainToHome.to(
            $("#curator"),
            0,
            { display: "none", ease: Power2.easeInOut },
            1
          ),
          // Background Up
          mainToHome.to(
            $(".wave-container"),
            1,
            { yPercent: 0, ease: Power2.easeInOut },
            1
          ),
          // 	Show
          mainToHome.to(
            $(".text-wrap"),
            0.5,
            { display: "flex", opacity: 1, y: 0, ease: Power2.easeInOut },
            1.2
          ),
          mainToHome.to(
            $(".logo-text, .line"),
            0.5,
            { display: "block", opacity: 1, y: 0, ease: Power2.easeInOut },
            1.2
          ),
          // 	Force to redraw by using y translate
          mainToHome.fromTo(
            $(".text-wrap .text"),
            0.1,
            { y: 0.1, position: "absolute" },
            { y: 0, position: "relative", ease: Power2.easeInOut },
            1.3
          );
        // $('.text-wrap .text').css('position', 'relative');
      }
    });
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
  -webkit-filter: drop-shadow(0 0.2rem 0.25rem rgba(0, 204, 153, 0.5));
  width: 50%;
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
  background-color: rgba(37, 33, 32, 0.2);
  position: fixed;
  background-color: rgba(224, 221, 209, 0.701961);
  z-index: 110;
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
  width: 600px;
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
  overflow: hidden;
  background-color: #fff9e1;
  /**fff9e1 */
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
  background-image: url(https://i1.sndcdn.com/artworks-000167527289-p3zpfg-large.jpg);
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
  background-image: url(https://i1.sndcdn.com/artworks-000167527289-p3zpfg-t500x500.jpg);
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
</style>
