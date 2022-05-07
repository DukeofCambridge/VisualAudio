<template>

    
    <el-container>
     <el-main >
     <div  class="warp">
       <div class="bg" :style="{backgroundImage:'url('+url+')'}"> </div>
     </div>
     </el-main>
     <!-- <el-footer class="player"> -->
       <el-footer>
         <Player :song = "song"></Player>
<!-- 
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
       ></el-image> -->
       
     </el-footer>
     
    </el-container> 
      
</template>

<script>

import {searchByKey, searchById, searchAlbumById} from '@/apis/songs.js'
import Player from '../components/home/player.vue';

export default {
    name: "Home",
    data() {
        return {
            is_stop: true,
            currentTime: Number,
            progress: 0,
            duration: 0,
            curr: 0,
            song: {
                url: String,
                picUrl: String, //海报url
            }
        };
    },
    methods: {

    },
    setup: async function () {
        //根据关键词搜索，获取音乐id列表
        var idList = new Array();
        var res = await searchByKey({ keywords: "方大同" });
        res.result.songs.forEach(element => {
            //console.log(element.id)
            idList.push(element.id);
        });
        var id = idList[1];
        console.log("歌曲id" + id);
        var albumId = res.result.songs[0].album.id;
        console.log("专辑id" + albumId);
        //根据歌曲id获取歌曲详细信息（包括Url）
        res = await searchById({ id: id });
        //console.log(res.data[0].url);
        this.song.url = res.data[0].url; //音乐url
        //根据专辑id获取专辑详情（包括海报）
        res = await searchAlbumById({ id: albumId });
        this.song.picUrl = res.songs[0].al.picUrl; //海报url
        console.log("ww")
        console.log("海报url" + this.song.picUrl);

    },
    components: { Player }
}
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
