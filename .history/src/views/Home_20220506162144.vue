<template>

    <el-container>
     <el-main >
     <div  class="warp">
       <div class="bg" :style="{backgroundImage:'url('+url+')'}"> </div>
     </div>
     </el-main>
     <el-footer class="palyer">
       <el-image :src=resource(palyer)"></el-image>
     </el-footer>
    </el-container>
</template>

<script>

// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import {searchByKey, searchById, searchAlbumById} from '@/apis/songs.js'


export default {
  name: 'Home',
  data() {
    return{
      url: String,
      mUrl: String,
       playUrl:'@/assets/home/play.svg'
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
  height: 760px;
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
  margin-top: -5%;
}

</style>
