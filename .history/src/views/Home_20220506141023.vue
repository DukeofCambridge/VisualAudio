<template>

    <el-container>
      <!-- style="position:absolute;top:0px;left:0px;right:0px;bottom:0px;padding:0;margin: 0;" -->
     <el-main >
      <!--  <el-image :src="url" class="other-product" :fit="fill" >
     </el-image>  -->
     <div :style="{'backgorund-image':'url('require(url)+')'}>ww</div>
     </el-main>
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
      mUrl: String
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
.other-product{
    /* height: 700px; */
    /* margin-top: -20%; */
     margin: -30% 0 0 -50%; 
    z-index: 0;
    opacity: 90%;
    position: absolute;
    width: 100%;
    clip:rect(0px 2000px 1500px 0px);
    
}

</style>
