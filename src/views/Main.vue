<template>
  <!--返回Main-->
  <div class="back_btn">
    <div class="circle"></div>
    <div class="text">返回</div>
  </div>
  <!-- 波浪区域 -->
  <div class="wave-container">
    <div class="wave -one"></div>
    <div class="wave -two"></div>
    <div class="wave -three"></div>
  </div>
  <!-- 标题上的短竖线 -->
  <div class="line"></div>
  <!-- 中央标题 -->
  <!-- 页面宽度超过屏幕宽度是因为这里的问题 -->
  <div class="text-wrap">
    <div class="text">
      <span>VISUAL&nbsp;&nbsp;AUDIO</span>
      <!--播放按钮-->
      <div class="main-btn_wrapper">
        <i class="main-btn fa fa-play" aria-hidden="true"></i>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import { Elastic, Expo, gsap, Power2 } from "gsap";
import { mapState } from "vuex";
import store from "@/store/index.js"
export default {
  name: "Main",
  data() {
    return {};
  },
  computed: mapState({
    // 传字符串参数 'count' 等同于 `state => state.count`
    waveShow: "waveShow"
  }),
  mounted() {
    // 屏幕中央 主播放按钮 鼠标悬浮动画效果
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

    // 主标题点击动画
    // ===== Home Page to Curation Page Transition  =====
    // ===== Main Play Button Activate =====

    $(".text-wrap .text").click(function () {
      // let homeToMain = new TimelineMax({});

      // Hide
      $(".logo-text").css("display", "none"),
        gsap.to(
          $(".line, .text-wrap"),
          0.5,
          { display: "none", opacity: 0, y: -20, ease: Power2.easeInOut },
          0
        ),
        // Background down
        gsap.to(
          $(".wave-container"),
          1,
          { yPercent: 50, ease: Power2.easeInOut },
          0
        ),
        // Show
        gsap.to(
          $(".back_btn"),
          0.5,
          { display: "flex", opacity: 1, x: -15, ease: Power2.easeInOut },
          0.5
        );
      gsap.fromTo(
        $(".lyric, canvas"),
        1.8,
        { display: "none", opacity: 0 },
        { display: "block", opacity: 1, ease: Expo.easeInOut },
        1
      );

      store.commit("showWave");
      // $("canvas").css("opacity", 1)

    });
    $(".back_btn").click(function () {
      // Hide
      gsap.to(
        $(".back_btn"),
        0.5,
        { display: "none", opacity: 0, x: 15, ease: Power2.easeInOut },
        0.5
      ),
        // Background Up
        gsap.to(
          $(".wave-container"),
          1,
          { yPercent: 0, ease: Power2.easeInOut },
          1
        ),
        // 	Show
        gsap.to(
          $(".text-wrap"),
          0.5,
          { display: "flex", opacity: 1, y: 0, ease: Power2.easeInOut },
          1.2
        ),
        gsap.to(
          $(".logo-text, .line"),
          0.5,
          { display: "block", opacity: 1, y: 0, ease: Power2.easeInOut },
          1.2
        ),
        // 	Force to redraw by using y translate
        gsap.fromTo(
          $(".text-wrap .text"),
          0.1,
          { y: 0.1, position: "absolute" },
          { y: 0, position: "relative", ease: Power2.easeInOut },
          1.3
        );
      gsap.fromTo(
        $(".lyric, canvas"),
        2.8,
        { display: "block", opacity: 1 },
        { display: "none", opacity: 0, ease: Expo.easeIn },
        1
      );
      store.commit("hideWave");
      // $("canvas").css("opacity", 0)
    });
  },
};
</script>

<style scoped>
.wave-container {
  width: 300vw;
  height: 100%;
  position: fixed;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
}

.wave {
  opacity: 1;
  position: absolute;
  top: 60%;
  left: -28%;
  background: #18df75;
  width: 100%;
  height: 300vw;
  transform-origin: 50% 49%;
  border-radius: 49%;
  -webkit-animation: drift 3000ms infinite linear;
  animation: drift 8000ms infinite linear;
  will-change: transform;
}

.wave.-two {
  animation: drift 9000ms infinite linear;
  opacity: 1;
  background: #00caff;
  top: 60%;
  left: -32%;
}

.wave.-three {
  animation: drift 4000ms infinite linear;
  opacity: 1;
  background: #f12645;
  top: 60%;
  left: -36%;
  z-index: -2;
}
@keyframes drift {
  from {
    transform: rotate(0deg);
  }
  from {
    transform: rotate(360deg);
  }
}
.line {
  position: fixed;
  left: 50vw;
  width: 2px;
  height: 80px;
  top: 24vh;
  background-color: white;
}

.text-wrap {
  position: absolute;
  width: 90%;
  height: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.text-wrap .text {
  cursor: pointer;
  position: relative;
  right: -3vw;
}
.text-wrap span {
  color: #fff9e1;
  font-size: 100px;
  /*font-weight: 300;*/
  padding: 0 2%;
}

.main-btn_wrapper {
  position: absolute;
  right: 43%;
  top: calc(50% - 18px);
  width: 36px;
  height: 36px;
  background-color: #fff9e1;
  border-radius: 50%;
  text-align: center;
  display: none;
  opacity: 0;
  transform: scale(0);
  transform-origin: bottom;
}
.main-btn_wrapper .main-btn {
  line-height: 36px;
}
.back_btn {
  cursor: pointer;
  position: absolute;
  top: 4vh;
  left: 8vw;
  color: rgba(37, 33, 32, 0.4);
  font-size: 18px;
  display: flex;
  align-items: center;
  display: none;
  opacity: 0;
}
.back_btn .circle {
  background-color: rgba(37, 33, 32, 0.3);
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 8px;
}
</style>
