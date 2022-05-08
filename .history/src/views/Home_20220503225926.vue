<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  
  </div>
  <el-image :src="url">44</el-image>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import {searchByKey, searchById} from '@/apis/songs.js'


var url
export default {
  name: 'Home',
  /* components: {
    HelloWorld
  } */
  data() {
    return{
      url
    }
  },
  setup: async function(){
    //音乐id列表
    var idList = new Array();
    var temp = await searchByKey({keywords: "方大同"})
    console.log("ww")
    console.log(temp.result.songs[1])
    console.log("ww")
    temp.result.songs.forEach(element => {
        //console.log(element.id)
        idList.push(element.id)
      });
    var id = idList[1]
    var url = temp.result.songs[1].img1v1Url
    console.log(id)
    var temp2 = await searchById({id: id})
    console.log("ww")
    console.log(temp2.data[0].url)
    return url
  }
    
  
}
</script>
