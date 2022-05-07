<template>
    <div  class="player">
           <el-slider v-model="progress" active-color="#00cc99" @change="changeLong" class="el-slider"
      style="box-shadow: #00cc99;"
      :show-tooltip = "false"
  
      >
                    </el-slider>
       <el-image :src="require(`/src/assets/home/previous.svg`)"
       style="margin-left:17px; margin-bottom:7px"
       ></el-image>
       <el-image :src="require(`/src/assets/home/play.svg`)"
       :style="{'opacity':is_stop?'1':'0','margin':'0px 12px'}"
       class = "play"
       ></el-image>
       <el-image :src="require(`/src/assets/home/pause.svg`)"
        :style="{'opacity':is_stop?'0':'1','margin':'0px 0px 0px -56px','position':'absolute'}"
       @click="change()"
       v-on:click.stop
       class = "play"
       ></el-image>
       <el-image :src="require(`/src/assets/home/next.svg`)"
       style="margin-bottom:7px"
       ></el-image>
    </div>
</template>

<script>


export default player({
    data() {
    return{
      song: {
        url: String,   //音乐
        picUrl: String,
        is_stop: true,
        currentTime: Number,
        progress: 0,
        duration: 0,
        curr: 0
      }
    }
  },
    setup() {
        
    },
})
</script>


<style lang="scss" >
/* wrap和bg用于设置背景图像和遮罩层 */
.warp{
  position: relative;
  margin: -10px 0 0 0;
  width: 100%;
  height: 755px;
   z-index: -1; 
  background-color: rgba(0,0,0,0.5);
}
.bg{
width: 100%;
height: 100%;
position:absolute;
top: 0;
left: 0;
z-index: -1; 
filter: blur(15px);
/* 横向和纵向居中 */
background-position-x: center;
background-position-y: center;
background-size:1630px
}

.player{
  position: relative;
  margin-top: -5.8%;
}

.play{
  cursor:pointer
}

</style>

<style scoped>
  /deep/.el-slider__button {
    width: 8px;
    height: 8px;
    background: #00cc99;
   margin: 11px 0 0 10px;
    border-radius: 10;
    visibility: hidden;
  }
  /deep/.el-slider__runway:hover .el-slider__button{
    visibility: visible;
  }

  /deep/.el-slider__bar{
    background-color: #00cc99;
    height: 5px;
  }
  /deep/.el-slider__runway{
    background-color: #fff;
    height: 5px;
    border-radius: 0;
    margin-top: 6px;
    margin-bottom: 11px;
  }
  
</style>
