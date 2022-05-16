<template>
  <!-- <div>{{ time }}</div> -->
  <div style="position:absolute;left: 60%;">
  <div class="topBlock">
    <div class="name">{{ song.name }}</div>
    <div class="singer">{{ song.singer }}</div>
  </div>
    <div class="topBlur">      </div>
  <div class="lyricBlock">
    <ul class="lyric" ref="lyric">
      <li
        :class="{ each: true, choose: index == lyricIndex }"
        v-for="(item, key, index) in lrcObj"
        :key="key"
        str="item"
      >
        {{ item }}
        <!--  <div :class="{ coverLyricEach:true , coverLyricChosen:  index == lyricIndex }">{{item}}</div> -->
      </li>
    </ul>
  </div>
   <div class="bottomBlur">      </div>
  </div>
</template>

<script>
import $ from "jquery";

import { watch, getCurrentInstance } from "vue";

export default {
  name: "Lyric",
  props: {
    /* curr: String, */
    song: {
      url: String, //音乐url
      picUrl: String, //海报url
      name: String, //歌曲名称
      singer: String, //歌手名称
      lyric: String, //歌词
    },
  },
  data() {
    return {
      lyricList: Array(), //歌曲列表
      time: 0,        //当前播放时间
      lyricIndex: 0,  //当前歌词序号
      gapTime: 0,     //当前歌词与下一歌词间隔时间
    };
  },

  setup(props) {
    const _this = getCurrentInstance();

    //存储每条歌词的时间
    var timeList = [];

    //存储歌词时间和内容的映射
    let lrcObj = {};
    watch(
      () => props.song.lyric,
      (newVal) => {
        timeList.length = 0;

        // 处理歌词，转化成key为时间，value为歌词的对象

        //先删除以前的歌词键值对
        for (var key in lrcObj) {
          delete lrcObj[key];
        }
        let lyricArr = newVal.split("[").slice(1); // 先以[进行分割

        lyricArr.forEach((item) => {
          let arr = item.split("]"); // 再分割右括号
          // 时间换算成秒
          let m = parseInt(arr[0].split(":")[0]);
          let s = parseInt(arr[0].split(":")[1]);
          arr[0] = m * 60 + s;
          if (arr[1] != "\n") {
            // 去除歌词中的换行符
            lrcObj[arr[0]] = (arr[1] || "").trim();
            timeList.push(arr[0])
          }
        });
        console.log(lrcObj);

        _this.lyricIndex = 0;
      }
    );
    return {
      timeList,
      lrcObj,
    };
  },
  methods: {
    timeUpdate(time) {
      //console.log("更新时间"+time)
      this.time = time;

      let i = 0;
      // 循环歌词对象
      for (let key in this.lrcObj) {
        // key表示歌词对象中的时间，如果key等于歌曲进度value，改变当前歌词进度
        if (+key == this.time) {
          this.lyricIndex = i;

          //计算当前歌词与下一条歌词的间隔
          this.gapTime = (this.timeList[i+1] - key);
          $('li').css('animation-duration', this.gapTime + 's')
          
          // 当歌词进度大于4，即播放到了第5句歌词，开始滚动
          if (i > 4) {
            this.$refs.lyric.scrollTop = 52 * (i - 4);

          } else {
            this.$refs.lyric.scrollTop = 0;
          }
        }
        i++;
      }
    },

  },
  mounted() {
  },
};
</script>

<style  lang="scss" scoped >
.lyricBlock {
  top: 40%;
  scroll-behavior: smooth; 
    text-align:center;
}


.topBlock {

  margin-top: 20px;
  left: 64.5%;
  text-align: center;
}


.name{
    
    font-size: 28px;
    color: #fff;
}
.singer{
    margin-top: 5px;
    font-size: 16px;
    color:rgb(129, 129, 129)
}
.lyric {

    scroll-behavior: smooth; 
  width: auto;
  height: 450px;

  left: 61%;
  top: 27%;
  background-color: rgba(255, 255, 255, 0);
  // 滚动歌词
  letter-spacing: 20%;
  overflow: auto;
  color: #000;
  font-size: 20px;
  font-weight: normal;
  padding: 5px 10px;

  .each {
    // border: 1px solid #000;
    line-height: 50px;
    text-align: center;

    background: #000 -webkit-linear-gradient(left, #00cc99, #00cc99) no-repeat 0
      0;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-size: 0 100%;
  }
  .choose {
    font-size: 22px;
    color: #000;
    background-size: 100% 100%;
    animation: scan  linear;
    animation-duration: 0s
  }
  // 修改滚动条样式
  &::-webkit-scrollbar {
    width: 0px;
  }

}

.topBlur{
    width: 100%;
    height: 20px;
    margin-bottom: -10px;
    box-shadow: 0 0 15px 10px #F2D7D3; 
    background-image: url('../assets/lyric/blur.png');
    filter: blur(15px);
}

/* .bottomBlur{
    width: 100%;
    height: 20px;
    margin-top: -10px;
    
    background-image: url('../assets/lyric/lucency.png');
    filter: blur(15px);
} */

@keyframes scan {
  0% {
    background-size: 0 100%;
  }
  100% {
    background-size: 100% 100%;
  }
}
</style>