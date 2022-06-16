<template>
  <div class="loader">
    <div class="loading" id="loading">
      <div class="animateWrap">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="text">正在加载</div>
    </div>
  </div>
</template>

<script>
// import theme from '@/assets/js/theme/shine.js'
export default {
  data() {
    return {};
  },

  methods: {},
  mounted() {
    var spanli = document
      .getElementById("loading")
      .getElementsByTagName("span");
    for (var i = 0; i < spanli.length; i++) {
      spanli[i].style.webkitAnimationDelay = 0.13 * i + "s";
    }
  },
};
</script>
<style>
.loader {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 20;
}
.loading {
  position: absolute;
  width: 70px;
  height: 70px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
.loading span {
  display: inline-block;
  width: 8px;
  height: 30px;
  border-radius: 3px;
  margin: 3px;
  background: #5af3f3;
  -webkit-animation: line-square 1s infinite;
}
.text {
  color: #5af3f3;
}
@-webkit-keyframes line-square {
  0% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(0.3);
  }
  100% {
    transform: scaleY(1);
  }
}
</style>