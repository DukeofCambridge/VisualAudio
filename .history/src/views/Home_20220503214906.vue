<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {searchByKey} from '@/apis/test.js'
//音乐id列表
var idList = new Array();
searchByKey({keywords: "方大同"}).then((res)=>{
  console.log("ww")
  res.result.songs.forEach(element => {
    //console.log(element.id)
    idList.push(element.id)
  });
})
console.log(idList)

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
