<template>
  <div>
    <!-- <img src="../assets/bg2.jpeg" style="max-width:100%;overflow:hidden;"> -->
    <img src="../assets/bg3.png" style="width: 100vw;
    height: 100vh;
    object-fit:cover">
  </div>
  <div style="position:absolute;left:180px;top:220px">
    <span id="title">Visual Audio</span>
  </div>
  <div style="position:absolute;left:180px;top:290px">
    <span id="title">Seeing music</span>
  </div>
  <div  style="position:absolute;left:200px;top:440px">
    <a href="" @click="changePage"><span>Start</span></a>
  </div>
</template>

<script>
export default {
  name: "Start",
  methods:{
    changePage(){
      this.$router.push('/index/tag');
    }
  }
}

</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Squada+One);

.flip-box {
  position: relative;
  overflow: hidden;
  height: 100px;
  width: 120px;
}

.flip-item {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: all 1s ease-in-out 0s;
  backface-visibility: hidden;
  box-sizing: border-box;
}

.flip-item-front {
  z-index: 2;
  background: red;
  color: white;
}

.flip-item-back {
  transform: rotateY(180deg);
  z-index: 1;
  background: green;
  color: white;
}

.flip-box:hover .flip-item-front {
  transform: rotateY(180deg);
}

.flip-box:hover .flip-item-back {
  transform: rotateY(0deg);
}

.flip-front {
  transform: rotateY(180deg);
}

.flip-back {
  transform: rotateY(0deg);
}

body {
  background: #344557 url(https://unsplash.imgix.net/photo-1423683249427-8ca22bd873e0?fit=crop&fm=jpg&h=700&q=75&w=1050) 0 0 no-repeat;
  background-size: cover;
  margin-top: 0px;
}
body:after {
  content: '';
  background: rgba(52, 69, 87, 0.85);
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
}

a {
  display: block;
  width: 220px;
  height: 70px;
  z-index: 1;
}
a:after {
  content: '';
  background: linear-gradient(120deg, #6559ae, #ff7159, #6559ae);
  background-size: 400% 400%;
  -webkit-clip-path: polygon(0% 100%, 4px 100%, 4px 4px, 216px 4px, 216px 66px, 4px 66px, 4px 100%, 100% 100%, 100% 0%, 0% 0%);
  -moz-animation: gradient 3s ease-in-out infinite, border 1s forwards ease-in-out reverse;
  -webkit-animation: gradient 3s ease-in-out infinite, border 1s forwards ease-in-out reverse;
  animation: gradient 3s ease-in-out infinite, border 1s forwards ease-in-out reverse;
}
a > span {
  display: block;
  background: linear-gradient(120deg, #000000, #ff7159, #6559ae);
  background-size: 400% 400%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-animation: gradient 3s ease-in-out infinite;
  -webkit-animation: gradient 3s ease-in-out infinite;
  animation: gradient 3s ease-in-out infinite;
}

/* helpers */
.absolute-centering, body:after, a, a:after {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}

.text-formatting, a {
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  letter-spacing: 2px;
  line-height: 70px;
  font-family: 'Squada One', cursive;
  font-size: 28px;
}

/* motion */
@-moz-keyframes gradient {
  0% {
    background-position: 14% 0%;
  }
  50% {
    background-position: 87% 100%;
  }
  100% {
    background-position: 14% 0%;
  }
}
@-webkit-keyframes gradient {
  0% {
    background-position: 14% 0%;
  }
  50% {
    background-position: 87% 100%;
  }
  100% {
    background-position: 14% 0%;
  }
}
@keyframes gradient {
  0% {
    background-position: 14% 0%;
  }
  50% {
    background-position: 87% 100%;
  }
  100% {
    background-position: 14% 0%;
  }
}
@-moz-keyframes border {
  0% {
    -webkit-clip-path: polygon(0% 100%, 4px 100%, 4px 4px, 216px 4px, 216px 66px, 4px 66px, 4px 100%, 100% 100%, 100% 0%, 0% 0%);
  }
  25% {
    -webkit-clip-path: polygon(0% 100%, 4px 100%, 4px 4px, 216px 4px, 216px 66px, 216px 66px, 216px 100%, 100% 100%, 100% 0%, 0% 0%);
  }
  50% {
    -webkit-clip-path: polygon(0% 100%, 4px 100%, 4px 4px, 216px 4px, 216px 4px, 216px 4px, 216px 4px, 216px 4px, 100% 0%, 0% 0%);
  }
  75% {
    -webkit-clip-path: polygon(0% 100%, 4px 100%, 4px 4px, 4px 4px, 4px 4px, 4px 4px, 4px 4px, 4px 4px, 4px 0%, 0% 0%);
  }
  100% {
    -webkit-clip-path: polygon(0% 100%, 4px 100%, 4px 100%, 4px 100%, 4px 100%, 4px 100%, 4px 100%, 4px 100%, 4px 100%, 0% 100%);
  }
}
@-webkit-keyframes border {
  0% {
    -webkit-clip-path: polygon(0% 100%, 4px 100%, 4px 4px, 216px 4px, 216px 66px, 4px 66px, 4px 100%, 100% 100%, 100% 0%, 0% 0%);
  }
  25% {
    -webkit-clip-path: polygon(0% 100%, 4px 100%, 4px 4px, 216px 4px, 216px 66px, 216px 66px, 216px 100%, 100% 100%, 100% 0%, 0% 0%);
  }
  50% {
    -webkit-clip-path: polygon(0% 100%, 4px 100%, 4px 4px, 216px 4px, 216px 4px, 216px 4px, 216px 4px, 216px 4px, 100% 0%, 0% 0%);
  }
  75% {
    -webkit-clip-path: polygon(0% 100%, 4px 100%, 4px 4px, 4px 4px, 4px 4px, 4px 4px, 4px 4px, 4px 4px, 4px 0%, 0% 0%);
  }
  100% {
    -webkit-clip-path: polygon(0% 100%, 4px 100%, 4px 100%, 4px 100%, 4px 100%, 4px 100%, 4px 100%, 4px 100%, 4px 100%, 0% 100%);
  }
}
@keyframes border {
  0% {
    -webkit-clip-path: polygon(0% 100%, 4px 100%, 4px 4px, 216px 4px, 216px 66px, 4px 66px, 4px 100%, 100% 100%, 100% 0%, 0% 0%);
  }
  25% {
    -webkit-clip-path: polygon(0% 100%, 4px 100%, 4px 4px, 216px 4px, 216px 66px, 216px 66px, 216px 100%, 100% 100%, 100% 0%, 0% 0%);
  }
  50% {
    -webkit-clip-path: polygon(0% 100%, 4px 100%, 4px 4px, 216px 4px, 216px 4px, 216px 4px, 216px 4px, 216px 4px, 100% 0%, 0% 0%);
  }
  75% {
    -webkit-clip-path: polygon(0% 100%, 4px 100%, 4px 4px, 4px 4px, 4px 4px, 4px 4px, 4px 4px, 4px 4px, 4px 0%, 0% 0%);
  }
  100% {
    -webkit-clip-path: polygon(0% 100%, 4px 100%, 4px 100%, 4px 100%, 4px 100%, 4px 100%, 4px 100%, 4px 100%, 4px 100%, 0% 100%);
  }
}

</style>
