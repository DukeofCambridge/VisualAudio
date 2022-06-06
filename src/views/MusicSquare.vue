<template>
  <div>

    <div class="search">
      <el-input v-model="input" placeholder="请输入内容"></el-input>
      <el-button round class="search_button" @click="dialogVisible = true">搜索</el-button>
    </div>
    <div>
      <el-dialog
        title="提示"
        v-model="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <span>这是一段信息</span>
        
      </el-dialog>
    </div>
    <el-carousel :interval="4000" type="card" height="200px" width=300px>
      <el-carousel-item v-for="item in imgList" :key="item.name">
        <img :src="item.src" style="height:100%;width:100%;" alt="图片丢失了" :title="item.title" />
      </el-carousel-item>
    </el-carousel>
    <div class="title">
      <p style="font-weight: bold">精选歌单</p>
      <p>Enjoy some new awesome music</p>
    </div>
    <div class='items'>
      
        <div class='arrow' @click="change(1)">
          <i class="el-icon-arrow-left" style="font-size:30px"></i>
        </div>
        <div class='item' @click="changeTag(1)">          
          <img :src="cursonglist1_0[0].picUrl" class="image"/>
        </div>
        <div class='item' @click="changeTag(2)">
          <img :src="cursonglist1_0[1].picUrl" class="image"/>
        </div>
        <div class='item' @click="changeTag(3)">
         <img :src="cursonglist1_0[2].picUrl" class="image"/>
        </div>   
        <div class='item' @click="changeTag(3)">
         <img :src="cursonglist1_0[3].picUrl" class="image"/>
        </div>   
        <div class='item' @click="changeTag(3)">
          <img :src="cursonglist1_0[4].picUrl" class="image"/>
        </div>   
        <div class='item' @click="changeTag(3)">
         <img :src="cursonglist1_0[5].picUrl" class="image"/>
        </div> 
        <div class='arrow' @click="change(1)">
          <i class="el-icon-arrow-right" style="font-size:30px"></i>
        </div>    
    </div>
    <div class="songlist1_name">
      <span class="name">{{cursonglist1_0[0].name}}</span>
      <span class="name">{{cursonglist1_0[1].name}}</span>
      <span class="name">{{cursonglist1_0[2].name}}</span>
      <span class="name">{{cursonglist1_0[3].name}}</span>
      <span class="name">{{cursonglist1_0[4].name}}</span>
      <span class="name">{{cursonglist1_0[5].name}}</span>
    </div>

    <div class="title">
      <p style="font-weight: bold">精彩推荐</p>
      <p>Wonderful recommendation</p>
    </div>
    <div class='items'>
      <div class='arrow' @click="change(2)">
          <i class="el-icon-arrow-left" style="font-size:30px"></i>
        </div>
        <div class='item' @click="changeTag(1)">
          <img :src="cursonglist2_0[0].picUrl" class="image"/>
        </div>
        <div class='item' @click="changeTag(2)">
          <img :src="cursonglist2_0[1].picUrl" class="image"/>
        </div>
        <div class='item' @click="changeTag(3)">
          <img :src="cursonglist2_0[2].picUrl" class="image"/>
        </div>   
        <div class='item' @click="changeTag(3)">
          <img :src="cursonglist2_0[3].picUrl" class="image"/>
        </div>   
        <div class='item' @click="changeTag(3)">
          <img :src="cursonglist2_0[4].picUrl" class="image"/>
        </div>   
        <div class='item' @click="changeTag(3)">
          <img :src="cursonglist2_0[5].picUrl" class="image"/>
        </div>     
        <div class='arrow' @click="change(2)">
          <i class="el-icon-arrow-right" style="font-size:30px"></i>
        </div>
    </div>
    <div class="songlist1_name">
      <span class="name">{{cursonglist2_0[0].name}}</span>
      <span class="name">{{cursonglist2_0[1].name}}</span>
      <span class="name">{{cursonglist2_0[2].name}}</span>
      <span class="name">{{cursonglist2_0[3].name}}</span>
      <span class="name">{{cursonglist2_0[4].name}}</span>
      <span class="name">{{cursonglist2_0[5].name}}</span>
    </div>

    <div class="title">
      <p style="font-weight: bold">巅峰榜</p>
      <p>Witness the birth of a miracle</p>
    </div>
    <div class='items'>
        <div class='item1' @click="changeTag(2)">
          <img src="../assets/peak/p1.png" class="image"/>
        </div>
        <div class='item1' @click="changeTag(3)">
         <img src="../assets/peak/p2.png" class="image"/>
        </div>   
        <div class='item1' @click="changeTag(3)">
          <img src="../assets/peak/p3.png" class="image"/>
        </div>   
        <div class='item1' @click="changeTag(3)">
         <img src="../assets/peak/p4.png" class="image"/>
        </div>   
        <div class='item1' @click="changeTag(3)">
          <img src="../assets/peak/p5.png" class="image"/>
        </div>     
    </div>

    <el-container>
    
    <el-footer>2022@用户交互技术 </el-footer>
  </el-container>
    
  </div>
</template>

<script >
//import card from "../components/Card.vue"
export default {
  name: "MusicSquare",
  components:{},
  data() {
    return {
      current1:1,
      current2:1,
      dialogVisible: false,
      imgList: [
        {
          name: "logo",
          src: require("@/assets/carousel/c1.png"),
          title: "c1.png"
        },
        {
          name: "bg",
          src: require("@/assets/carousel/c2.png"),
          title: "c2.png"
        },
        {
          name: "sadmas",
          src: require("@/assets/carousel/c3.png"),
          title: "c3.png"
        },
        {
          name: "sadmas",
          src: require("@/assets/carousel/c4.png"),
          title: "c4.png"
        },
        {
          name: "sadmas",
          src: require("@/assets/carousel/c5.png"),
          title: "c5.png"
        }
      ],
      cursonglist1_0:[],
      cursonglist1_1:[
        {
          name:"可爱摇滚｜一剂抵挡春困的上好良药",
          picUrl:"http://p1.music.126.net/SA6bW1UlPP04rFB2pj-FvQ==/109951165813403264.jpg",
          songs:[

          ]
        },
        {
          name:"民谣 | 一听就是一个故事",
          picUrl:"http://p1.music.126.net/UDpjFEHmXInxGd_xMAI12w==/109951162811986419.jpg",
        },
        {
          name:"美学电影｜画语人生，艺术的自我修养",
          picUrl:"http://p1.music.126.net/lOdqEbPagBUGf547BjmCMQ==/109951164840594920.jpg",
        },
        {
          name:"欧美｜我们听过的那首歌，原来采样了它",
          picUrl:"http://p1.music.126.net/D-7Dhh8trQwSwlqG7HuXYg==/109951163017662871.jpg",
        },
        {
          name:"乐团世代丨台湾乐团编年史（1980-2021）",
          picUrl:"http://p1.music.126.net/81tojskuryyjFefILzzfIQ==/109951165930646405.jpg",
        },
        {
          name:"韩国独立音乐|正确的打开方式",
          picUrl:"http://p1.music.126.net/WKxWDJu_7o8Dzlq1c0NTSA==/109951163753165342.jpg",
        },


      ],
      cursonglist1_2:[
         {
          name:"小众系｜宝岛台湾的温柔海风",
          picUrl:"http://p1.music.126.net/5noG3sFSgZk5vHl9yV_5Mw==/109951165796624203.jpg",
          songs:[

          ]
        },
        {
          name:"水果味汽水｜清甜软萌音捕获你的心",
          picUrl:"http://p1.music.126.net/sKLyavYaAPCY0t59-ltuqw==/109951166145967969.jpg",
        },
        {
          name:"FC游戏音乐精选 TOP100",
          picUrl:"http://p1.music.126.net/lK5DazcKnzQL-zu75d4O7w==/109951165309734994.jpg",
        },
        {
          name:"新式后摇 | 致敬旅行者号 最孤独的星际行者",
          picUrl:"http://p1.music.126.net/deOawP0TcGe62Ve_RoQZPA==/109951166085687441.jpg",
        },
        {
          name:"【德语】莱茵河畔之风拂过心田",
          picUrl:"http://p1.music.126.net/kzt5CaQv9Fk3XIiQr5Ubeg==/109951165289612523.jpg",
        },
        {
          name:"浪漫美学 | 宝藏独立乐队指南",
          picUrl:"http://p1.music.126.net/9jLAgcjvCm0PhQUBK18DwQ==/109951165443784230.jpg",
        },
      ],
      cursonglist2_0:[],
      cursonglist2_2:[
        {
          name:"可爱摇滚｜一剂抵挡春困的上好良药",
          picUrl:"http://p1.music.126.net/SA6bW1UlPP04rFB2pj-FvQ==/109951165813403264.jpg",
          songs:[

          ]
        },
        {
          name:"民谣 | 一听就是一个故事",
          picUrl:"http://p1.music.126.net/UDpjFEHmXInxGd_xMAI12w==/109951162811986419.jpg",
        },
        {
          name:"美学电影｜画语人生，艺术的自我修养",
          picUrl:"http://p1.music.126.net/lOdqEbPagBUGf547BjmCMQ==/109951164840594920.jpg",
        },
        {
          name:"欧美｜我们听过的那首歌，原来采样了它",
          picUrl:"http://p1.music.126.net/D-7Dhh8trQwSwlqG7HuXYg==/109951163017662871.jpg",
        },
        {
          name:"乐团世代丨台湾乐团编年史（1980-2021）",
          picUrl:"http://p1.music.126.net/81tojskuryyjFefILzzfIQ==/109951165930646405.jpg",
        },
        {
          name:"韩国独立音乐|正确的打开方式",
          picUrl:"http://p1.music.126.net/WKxWDJu_7o8Dzlq1c0NTSA==/109951163753165342.jpg",
        },


      ],
      cursonglist2_1:[
         {
          name:"致郁纯音丨那些用符号编织的梦境",
          picUrl:"http://p1.music.126.net/u-Zz9CBR7ij7l1KhZjHbbA==/109951165211748358.jpg",
          songs:[

          ]
        },
        {
          name:"怀旧金曲丨那些原唱是日语的经典老歌",
          picUrl:"http://p1.music.126.net/8ZKNk9SRjm6Kn3hrfygvFw==/109951165290790925.jpg",
        },
        {
          name:"不期而遇丨indie音乐场景·「韩国乐队",
          picUrl:"http://p1.music.126.net/EFEmzyeAulJSp6t8pih9Zg==/109951164380511761.jpg",
        },
        {
          name:"国人雷鬼 | 探索不拘一格的玩性洒脱",
          picUrl:"http://p1.music.126.net/ssmGC5NSAG4hDAV9Yv1NoA==/109951165737454973.jpg",
        },
        {
          name:"童话风电子｜异世界环游，糖果与幻想",
          picUrl:"http://p1.music.126.net/c62z33WEe4wBdmdvJWRnMw==/109951164950734667.jpg",
        },
        {
          name:"Funk舞厅 · 摇摆于复古派对",
          picUrl:"http://p1.music.126.net/c9KkSyHFhRWHoVIHzpJsfw==/109951166248029688.jpg",
        },
      ],
      input:"",
    };
  },
  created(){
    this.init();
  },
  methods:{

    init()
    {
      this.current1=1;
      this.cursonglist1_0=this.cursonglist1_1;
      this.current2=1;
      this.cursonglist2_0=this.cursonglist2_1;
    },
    change(num)
    {
      if(num==1)
      {
        if(this.current1==1)
        {
          this.cursonglist1_0=this.cursonglist1_2;
          this.current1=2;
        }
        else
        {
          this.cursonglist1_0=this.cursonglist1_1;
          this.current1=1;
        }
      }
      else
      {
        if(this.current2==1)
        {
          this.cursonglist2_0=this.cursonglist2_2;
          this.current2=2;
        }
        else
        {
          this.cursonglist2_0=this.cursonglist2_1;
          this.current2=1;
        }
      }
      
    }
  }
}
</script>

<style lang="scss" >
.image{
  width:100%;
  height:100%;
}
.arrow{
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  width: 2vw;
  height: 25vh;
  margin: 2px;
  cursor: pointer;
  box-shadow: 0 5px 5px rgba(255, 255, 255, 0.02), inset 0 0 0 1px rgba(252, 252, 252, 0.07);
  transform: translateZ(0);
  border-radius:15px;
  font-size: 20px;;
}


.search_button{
  position:absolute;
  left:310px;
}
.search{
  position: absolute;
  top:25px;
  left:170px;
  width:300px;
}
.el-header, .el-footer {
    background-color: rgb(210, 186, 186);;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

.el-carousel__item h3 {
    color: #f2d7d3;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #f2d7d3;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #f2d7d3;
  }

  .el-carousel{
    width:1200px;
    left:170px;
    top:10px
  }

  .title{
    left:-170px;
  }

  .items {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  position: relative;
  top:2vh;
}

.item {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  width: 12vw;
  height: 25vh;
  margin: 6px;
  cursor: pointer;
  box-shadow: 0 5px 5px rgba(255, 255, 255, 0.02), inset 0 0 0 1px rgba(252, 252, 252, 0.07);
  transform: translateZ(0);
  border-radius:15px;
}

.item1 {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  width: 12vw;
  height: 50vh;
 
  margin:6px; margin-bottom: 6vh;
  cursor: pointer;
  box-shadow: 0 5px 5px rgba(255, 255, 255, 0.02), inset 0 0 0 1px rgba(252, 252, 252, 0.07);
  transform: translateZ(0);
  border-radius:15px;
  background-color: rgb(210, 186, 186);;
}

.songlist1_name{
  position: relative;
top:2vh;
}

.name{
        display: inline-block;
				width: 12vw;
				margin: 6px;
        margin-bottom: 10px;
			}

body {
    overflow-x: hidden;
    overflow-y: auto;
}
</style>
