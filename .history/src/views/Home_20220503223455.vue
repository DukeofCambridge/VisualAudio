<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <el-image :src="url"></el-image>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import {searchByKey, searchById} from '@/apis/songs.js'
//音乐id列表
var idList = new Array();
console.log("ww1")
var temp = searchByKey({keywords: "方大同"})
var temp=await temp
console.log(temp1)
console.log("ww1")
temp.result.songs.forEach(element => {
    //console.log(element.id)
    idList.push(element.id)
  });
var id = idList[1]

console.log(id)
var url = searchById({id: id}).then(async(res) => {
  console.log(res.url)
  return res.url
})


export default {
  name: 'Home',
  /* components: {
    HelloWorld
  } */
  data() {
    return{
      url
    }
  }
    
  
}
</script>
