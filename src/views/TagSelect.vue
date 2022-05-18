<template >
    <div class="bgd">
      <div class="tip">
        <p class="AIsing">选择您感兴趣的标签吧！</p>
        <div class="connect_btn">
          <div class="connect_btn_text" @click="this.$router.push('/index/face')">我选好了!</div>
        </div>
      </div>
      <div class='items'>
        <div class='item' @click="changeTag(0)">
          <card :tag_name="taglist[0]" :img_src="require('../assets/tag/华语.png')" ></card>
        </div>
        <div class='item'>
          <card :tag_name="taglist[1]" :img_src="require('../assets/tag/欧美.jpg')"></card>
        </div>
        <div class='item'>
          <card :tag_name="taglist[2]" :img_src="require('../assets/tag/粤语.jpg')"></card>
        </div>
        <div class='item'>
          <card :tag_name="taglist[3]" :img_src="require('../assets/tag/民谣.png')"></card>
        </div>

        <div class='item'>
          <card :tag_name="taglist[4]" :img_src="require('../assets/tag/复古.jpg')"></card>
        </div>
        <div class='item'>
          <card :tag_name="taglist[5]" :img_src="require('../assets/tag/摇滚.jpg')"></card>
        </div>
        <div class='item'>
          <card :tag_name="taglist[6]" :img_src="require('../assets/tag/电音.png')"></card>
        </div>
        <div class='item'>
          <card :tag_name="taglist[7]" :img_src="require('../assets/tag/流行.jpg')"></card>
        </div>
        <div class='item'>
          <card :tag_name="taglist[8]" :img_src="require('../assets/tag/纯音乐.jpg')"></card>
        </div>
        <div class='item'>
          <card :tag_name="taglist[9]" :img_src="require('../assets/tag/后摇.png')"></card>
        </div>

        <div class='item'>
          <card :tag_name="taglist[10]" :img_src="require('../assets/tag/rap.jpg')"></card>
        </div>
        <div class='item'>
          <card :tag_name="taglist[11]" :img_src="require('../assets/tag/影视.jpg')"></card>
        </div>

        </div>
        <div id="nextbutton">
            <i class="el-icon-d-arrow-right"></i>
        </div>
    </div>
<!-- <div class='options'>
  <button class='dark'></button>
  <button class='light'></button>
</div> -->

</template>

<script>
import $ from "jquery";
import { gsap, Power2 } from "gsap";
import card from "../components/Card.vue"
export default {
  name: "TagSelect",
  components:{
    card
  },
  data: function(){
    return{
      taglist:["华语","欧美","粤语","民谣","复古","摇滚","电音","流行","纯音乐","后摇","rap","影视"],
      tagselect:[0,0,0,0,0,0,0,0,0,0,0,0]
    }
  },
  mounted() {
    $('.connect_btn').hover(function(){
          gsap.to($(this), 0.1, {y: -10, ease: Power2.easeInOut}),
              $(this).addClass('shadow')
        },
        function(){
          gsap.to($(this), 0.1, {y: 0, ease: Power2.easeInOut}),
              $(this).removeClass('shadow')
        });
  },
  methods:{
    changeTag(param){
      if(this.tagselect[param]===0)
      {
        this.tagselect[param]=1;
      }
      else
      {
        this.tagselect[param]=0;
      }
      console.log(this.tagselect);
    }

  },
}
</script>

<style scoped>
.AIsing {
  font-size: 30px;
  font-style: italic;
  color: #ffffff;
  text-shadow: 0px 0px 8px #fff, 0px 0px 42px #f72, 0px 0px 72px #f84, 0px 0px 150px #fa5;
}
.shadow {
  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.4);
}
.connect_btn {
  border-radius: 12px;
  width: 24vh;
  height: 7vh;
  background-image: linear-gradient(280deg, #2f2a29 0%, #2f2a29 100%);
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  position:absolute;
  left:28vw;
  top:2vh;
}
.connect_btn .connect_btn_text {
  font-size: 20px;
  font-style: italic;
  text-shadow: 0px 0px 8px #fff, 0px 0px 42px #f72, 0px 0px 72px #f84, 0px 0px 150px #fa5;
  z-index: 9;
}

.connect_btn:before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  border-radius: 12px;
  transition: opacity 0.5s ease-out;
  opacity: 0;
  background-image: linear-gradient(225deg, #ff6700 0%, #ff2df0 100%);
  transition: 0.5s;
}

.connect_btn:hover:before {
  opacity: 1;
}

 * {
  margin: 0;
  box-sizing: border-box;
}

#nextbutton{
  position: absolute;
  height:50px;
  width: 50px;
  top:620px;
  left: 1420px;
  font-size: 70px;
}

/*.bgd{*/
/*  background: rgb(135, 135, 146);*/
/*  height:705px;*/
/*  width:1520px;*/
/*}*/

.tip{
  position:absolute;
  left:12vw;
  top:4vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

header {
  text-align: center;
  padding-bottom: 3rem;
}

h1 {
  font-size: 2.6rem;
  line-height: 1.2em;
  padding-bottom: 1rem;
  font-weight: 600;
}


text {
  font-size: 1.1rem;
  text-transform: uppercase;
  text-anchor: middle;
  letter-spacing: 1px;
  font-weight: 600;
}



.items {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  position: absolute;
  top:18vh;
}

.item {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  width: 20vw;
  height: 25vh;
  margin: 5px;
  cursor: pointer;
  box-shadow: 0 5px 5px rgba(255, 255, 255, 0.02), inset 0 0 0 1px rgba(252, 252, 252, 0.07);
  transform: translateZ(0);
  border-radius:15px;
}




</style>
