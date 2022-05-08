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
  setup(){

  }
    
  
}
</script>
