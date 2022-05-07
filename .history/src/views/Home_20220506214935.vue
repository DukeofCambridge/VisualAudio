<template>

    
    <el-container>
     <el-main >
     <div  class="warp">
       <div class="bg" :style="{backgroundImage:'url('+url+')'}"> </div>
     </div>
     </el-main>
     <el-footer class="palyer">
       <hr style="FILTER:alpha(opacity=100,finishopacity=0,style=1); margin-bottom:13px; " width="97%" color=#fffff SIZE=3>
      <hr style="FILTER:alpha(opacity=100,finishopacity=0,style=1); margin-top:-16px;width:50%;margin-right:50%" width="97%" color=#00cc99 SIZE=3>
       <el-image :src="require(`/src/assets/home/previous.svg`)"
       style="margin-left:17px; margin-bottom:7px"
       ></el-image>
       <!-- <el-image :src="require(`/src/assets/home/${playUrl}`)"
       style="margin: 0 12px"
       @click="change"
       ></el-image> -->
       <el-image :src="require(`/src/assets/home/play.svg`)"
       :style="{'opacity':is_stop?'1':'0','margin':'0px 12px'}"
       
       ></el-image>
       <el-image :src="require(`/src/assets/home/pause.svg`)"
        :style="{'opacity':is_stop?'0':'1','margin':'0px 0px 0px -56px','position':'absolute'}"
       @click="change()"
       v-on:click.stop
       ></el-image>
       <el-image :src="require(`/src/assets/home/next.svg`)"
       style="margin-bottom:7px"
       ></el-image>
       
     </el-footer>
     
    </el-container> 
      <audio  :src="mUrl"
       ref="audio"
        @pause="is_stop==true"
        @play="is_stop==false"
      >
    </audio>
</template>

<script>

import {searchByKey, searchById, searchAlbumById} from '@/apis/songs.js'


export default {
  name: 'Home',
  data() {
    return{
      url: String,
      mUrl: String,
      is_stop: true,
    }
  },
  methods: {
    change() {
      //暂停 -> 启动
      if(this.is_stop == true) {
        console.log("启动")
        this.is_stop = false;
        var audio =document.querySelector('#audio');
        if(!this.isPlaying){
            audio.play();
            this.isPlaying = true;
        }
    }
————————————————
版权声明：本文为CSDN博主「耳东君呐」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/chenchang0419/article/details/118335368
      }
      //启动 -> 暂停
      else {
        console.log("暂停")
        this.is_stop = true;
      }
    }
  },
  mounted: async function(){
    //根据关键词搜索，获取音乐id列表
    var idList = new Array();
    var res = await searchByKey({keywords: "方大同"})
    res.result.songs.forEach(element => {
        //console.log(element.id)
        idList.push(element.id)
      });
    var id = idList[1]
    console.log("歌曲id"+id)
    var albumId = res.result.songs[0].album.id
    console.log("专辑id"+albumId)
    //根据歌曲id获取歌曲详细信息（包括Url）
    res = await searchById({id: id})
    console.log(this.url)
    console.log(res.data[0].url)
    this.mUrl = res.data[0].url //音乐url

    //根据专辑id获取专辑详情（包括海报）
    res = await searchAlbumById({id: albumId})
    this.url = res.songs[0].al.picUrl             //海报url
    //console.log("ww"+res.songs[0])
    console.log("海报url"+this.url)
  }
    
  
}
</script>

<style scoped>
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

.palyer{
  position: relative;
  margin-top: -5.8%;
}

</style>
