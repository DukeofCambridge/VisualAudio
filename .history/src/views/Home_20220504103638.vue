<template>
  <div>ww</div>
  <el-image :src="url"></el-image>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import {searchByKey, searchById} from '@/apis/songs.js'

export default {
  name: 'Home',
  /* components: {
    HelloWorld
  } */
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
    var id = idList[0]
    console.log("歌曲id"+id)

    //根据歌曲id获取歌曲详细信息（包括Url）
    res = await searchById({id: id})
    console.log(this.url)
    console.log(res.data[0].url)
    this.mUrl = res.data[0].url //音乐url

    //根据专辑id获取专辑详情（包括海报）
    searchAlbumById({id: })
    this.url = " "              //海报url
  }
    
  
}
</script>
