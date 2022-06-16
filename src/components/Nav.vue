<template>
  <!--顶部UI-->
  <div class="header">
    <div class="burger-wrapper" @click="nav">
      <div class="burger"></div>
    </div>
    <div class="logo-text" @click="nav">发现</div>
  </div>
  <!--左导航栏-->
  <div class="nav">
    <ul class="nav_main">
      <li> <img src="../assets/side_nav/home.png" class="tag"/> <a class="nav_link" @click="this.$router.push('/index/main')">播放主页 </a></li>
      <li> <img src="../assets/side_nav/tag.png" class="tag"/> <a class="nav_link" @click="this.$router.push('/index/tag')">标签选择</a></li>
      <li> <img src="../assets/side_nav/emo.png" class="tag"/> <a class="nav_link" @click="this.$router.push('/index/face')">情绪分析</a></li>
      <li> <img src="../assets/side_nav/music.png" class="tag"/> <a class="nav_link" @click="this.$router.push('/index/square')">音乐广场</a></li>
    </ul>
    <!-- <div class="nav_divider"></div>
    <ul class="nav_sub">
      <li><a>成员: 邵国诚 吴渭 时守格 段文涛 </a></li>
      <li><a>指导教师: 梁爽 </a></li>
    </ul> -->
    
    <div>
      <span id="title">Visual Audio</span>
    </div>


  </div>

</template>

<script>
import $ from "jquery";
import {Expo, gsap, Power2} from "gsap";

export default {
  name: "Nav",
  mounted() {
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
  },
  methods:{
    // ===== 导航侧边栏动画效果 =====
    nav() {
      // 打开
      if ($(".nav").css("display") === "none") {
        gsap.to(".dim", 0.5, {
          opacity: 1,
          display: "block",
          ease: Power2.easeInOut, //设置移动效果，ease选项大全：https://greensock.com/docs/v3/Eases
        });
        gsap.fromTo(
            ".nav",
            0.5,  // 动画持续0.5s
            { xPercent: -100 },  //开始位置
            { xPercent: -20, display: "block", ease: Expo.easeOut } //结束位置
        );
        gsap.staggerFrom(
            ".nav li",
            0.5,
            { opacity: 0, y: 20, ease: Power2.easeInOut },
            0.1
        );

        $(".logo-text").css({ opacity: "0", display: "none" });
      }
      // 关闭
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
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

ul,
li {
  list-style: none;
  padding: 0;
  margin:20px;
}
a {
  color: inherit;
  text-decoration: none;
}
.tag{
  margin-right: 1vw;
  width: 20px;
  margin-top:0.5vw;
}
#title{
  display: block;
  background: black;
  background-size: 400% 400%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-animation: gradient 3s ease-in-out infinite;
  -webkit-animation: gradient 3s ease-in-out infinite;
  animation: gradient 3s ease-in-out infinite;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  letter-spacing: 2px;
  line-height: 70px;
  font-family: 'Squada One', cursive;
  font-size: 45px;
  letter-spacing:5px;
  margin-top: 5vw;
  margin-left:5.5vw;
}
.header {
  position: fixed;
  left: 2.2vw;
  top: 2.2vw;
  margin-left: -4px;
  margin-top: -6px;
  color: #252120;
  z-index: 103;
  display: flex;
  cursor: pointer;
  align-items: center;
  height: 30px;
}
.header .burger-wrapper {
  width: 20px;
  height: 30px;
  margin-right: 20px;
  display: flex;
  align-items: center;
}
.header .burger {
  width: 20px;
  height: 3px;
  background-color: #252120;
  position: relative;
}
.header .burger:before,
.header .burger:after {
  content: "";
  width: 20px;
  height: 3px;
  background-color: #252120;
  position: absolute;
  left: 0;
}
.header .burger:before {
  top: -6px;
}
.header .burger:after {
  top: 6px;
  width: 14px;
}
.header .logo-text {
  font-size: 20px;
  color: #252120;
}

.back_btn {
  cursor: pointer;
  position: relative;
  color: rgba(37, 33, 32, 0.4);
  font-size: 18px;
  display: flex;
  align-items: center;
  /*display: none;*/
  opacity: 0;
}
.back_btn .circle {
  background-color: rgba(37, 33, 32, 0.3);
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 8px;
}

.nav {
  will-change: transform;
  position: fixed;
  background-color: #fff;
  width: 30vw;
  top: 0;
  min-width: 500px;
  height: 100vh;
  z-index: 10;
  box-shadow: 0 30px 80px 0 rgba(97, 45, 45, 0.25);
  display: none;
}

.nav ul.nav_main {
  margin-top: 20vh;
}
.nav ul.nav_sub {
  margin-top: 3vh;
}
.nav ul.nav_main a{
  font-size: 1.4vw;
  color: #444444;
}
.nav ul.nav_sub a {
  font-size: 1.8vw;
  color: #8f8b8b;
}
.nav ul li {
  margin-left: 6vw;
  margin-bottom: 0.5vw;
  position: relative;
}

.nav_link {
  font-size: 0.4vw;
  cursor: pointer;
}
.nav_link:before {
  content: "";
  position: absolute;
  width: 4vw;
  height: 2px;
  background-color: #444444;
  left: -12vw;
  top: 50%;
  transition: 0.4s;
}

.nav_divider {
  width: 16vw;
  height: 1px;
  left: 5vw;
  background-color: rgba(37, 33, 32, 0.12);
  margin: 4vh 19vw;
}

.nav li .nav_link:hover:before {
  left: 2vw;
}
</style>
