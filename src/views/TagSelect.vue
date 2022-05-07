<template >
  <body>  
    <div class="bgd">
      <div class="tip">
        <span>选择你感兴趣的标签吧！</span>
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
  </body>
</template>

<script>
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

  methods:{
    changeTag(param){
      if(this.tagselect[param]==0)
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


 * {
  margin: 0;
  box-sizing: border-box;
}
body{
  margin: 0px;
}

#nextbutton{
  position: absolute;
  height:50px;
  width: 50px;
  top:620px;
  left: 1420px;
  font-size: 70px;
}

.bgd{
  background: rgb(135, 135, 146);
  height:705px;
  width:1520px;
}

.tip{
  position:absolute;
  left:160px;
  top:20px;
  font-family: YouYuan;
  font-size: 30px;
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
  top:70px;
}

.item {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  width: 300px;
  height: 200px;
  margin: 5px;
  cursor: pointer;
  border-radius: 0px;
  box-shadow: 0 5px 5px rgba(255, 255, 255, 0.02), inset 0 0px 0px 1px rgba(252, 252, 252, 0.07);
  transform: translateZ(0);
  border-radius:15px;
}




</style>