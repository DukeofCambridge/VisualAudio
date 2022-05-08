<template>
  <!-- <el-image :src="url" class="back"></el-image> -->
  
 <div className={styles.headerWrapper}>
     <el-image className={styles.header} :src="url"> </div>
 </div>

</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import {searchByKey, searchById, searchAlbumById} from '@/apis/songs.js'

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
.back{
  display: inline-block;
  height: auto;
  max-width: 100%;
  filter: opacity(70%);
}
.headerWrapper{
	  background-size: cover;
	  background:  url("../../../assets/img/homgPageBg.jpg") no-repeat center fixed;
	  position: relative;
	  z-index: 1;
	  &:after{
	    content: "";
	    position: absolute;
	    top: 0;
	    left: 0;
	    width: 100%;
	    height: 100%;
	    filter: blur(1px);
	    background-color: rgba(0, 0, 0 ,0.3);
	    z-index: -1;
	  }
   }

</style>
