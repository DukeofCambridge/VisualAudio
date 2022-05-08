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
      url: String
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
    var temp2 = await searchById({id: id})
    console.log(this.url)
    console.log(temp2.data[0].url)
  }
    
  
}
</script>
