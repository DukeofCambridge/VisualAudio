<template>
  <div class="body">
    <div style="height: 1px"></div>
<!--    <div id="chart">-->
<!--      &lt;!&ndash; 为 ECharts 准备一个定义了宽高的 DOM &ndash;&gt;-->
<!--      <div id="main"></div>-->
<!--    </div>-->
    <div id="login-box">
      <h1 class="AIsing">Visual Audio</h1>
      <!--    <button id="camera" class="camera" @click="openCamera">打开摄像头</button>-->
      <!--    <br>-->
      <button id="analysis" class="analysis" @click="analysis">情 绪 分 析</button>
      <br>

      <div class="media">
        <video id="video" width="320" height="240" preload autoplay loop muted></video>
        <canvas id="canvas" width="320" height="240"></canvas>
      </div>
    </div>

    <div class="glass">
      <ul class="dock">
        <li>😇</li>
        <li>🥰</li>
        <li>😜</li>
        <li>🤩</li>
        <li>🥳</li>
        <li>🤯</li>
        <li>🥶</li>
      </ul>
    </div>
  </div>
</template>

<script>
// tracking 模块是复制进来的，npm install的看不到摄像头画面，暂时不知道原因
require('tracking/build/tracking-min.js')
require('tracking/build/data/face-min.js')
// const echarts = require('echarts');
// require('echarts/theme/macarons') // echarts theme
window.onload = function () {
  document.querySelectorAll('.dock li').forEach(li => {
    li.addEventListener('mousemove', e => {
      console.log(e.target.tagName)
      let item = e.target
      let itemRect = item.getBoundingClientRect()

      // 鼠标hover到某个li上的时候，靠近左侧则 offset -> 0, 靠近右侧则 offset -> 1
      let offset = Math.abs(e.clientX - itemRect.left) / itemRect.width

      let prev = item.previousElementSibling || null
      let next = item.nextElementSibling || null

      let scale = 0.5
      resetScale()

      if(prev) {
        prev.style.setProperty('--scale-factor', 1 + scale * Math.abs(offset - 1))
      }

      item.style.setProperty('--scale-factor', 1 + scale)

      if(next) {
        next.style.setProperty('--scale-factor', 1 + scale * offset)
      }
    })
  })
  // document.querySelector('.dock').addEventListener('mouseleave', e => {
  //   resetScale(e)
  // })
}

function resetScale() {
  document.querySelectorAll('.dock li').forEach(li => {
    li.style.setProperty('--scale-factor', 1)
  })
}

export default {
  name: "Emotion",
  data(){
    return{
      emotion:null,
      chart: null,
    }
  },
  mounted() {
    this.openCamera()
  },
  methods:{
    openCamera(){
      let video = document.getElementById("video");
      let canvas = document.getElementById("canvas");
      let context = canvas.getContext('2d');

      // eslint-disable-next-line no-undef
      let tracker = new tracking.ObjectTracker('face');
      tracker.setInitialScale(4);
      tracker.setStepSize(2);
      tracker.setEdgesDensity(0.1);

      // eslint-disable-next-line no-undef
      tracking.track(video, tracker, { camera: true });

      tracker.on('track', function(event) {
        context.clearRect(0, 0, canvas.width, canvas.height);

        event.data.forEach(function(rect) {
          context.strokeStyle = '#a64ceb';
          context.strokeRect(rect.x - 7, rect.y - 20, rect.width + 10, rect.height + 25);
          context.font = '11px Helvetica';
          context.fillStyle = "#fff";
          context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y - 10);
          context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y);
        });
      });
    },
    analysis(){
      let _this = this
      let video = document.getElementById("video");
      let canvas = document.getElementById("canvas");
      let userContext = canvas.getContext("2d");
      userContext.drawImage(video, 0, 0, canvas.width, canvas.height);
      // let userImgSrc = canvas.toDataURL("image/png"); // 截取第一帧
      let userImgSrc = canvas.toDataURL("image/png"); // 截取第一帧
      //拿到bash64格式的照片信息: 去除标签 --- data:image/png;base64,
      let faceBase = userImgSrc.split(",")[1];
      // alert(faceBase);
      console.log(faceBase)
      // 封装请求数据
      let formData = new FormData()
      formData.append('api_key', 'om8OB46dLROuWqeBrFAzBmF9kGCy2Syg')
      formData.append('api_secret','VZmRYa4gVUtFU7XGqxtjKPoErSxB2j2j')
      formData.append('image_base64',faceBase)
      formData.append('return_attributes','emotion')
      this.$axios({
        method: 'post',
        url: 'https://api-cn.faceplusplus.com/facepp/v3/detect',
        data:formData,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((res) => {
        console.log(res.data.faces[0].attributes)
        _this.emotion = res.data.faces[0].attributes.emotion
        // this.visualize()
      }).catch(failResponse => {
        console.log(failResponse)})
    },
    // 情绪可视化
    /*
    visualize(){
      this.chart = echarts.init(document.getElementById('main'));
      let EmotionList = [
        'surpr',
        'happi',
        'neutr',
        'sadne',
        'disgu',
        'anger',
        'fear'
      ];
      let EmotionValue = [
        this.emotion.surprise + 1,
        this.emotion.happiness + 1,
        this.emotion.neutral + 1,
        this.emotion.sadness + 1,
        this.emotion.disgust + 1,
        this.emotion.anger + 1,
        this.emotion.fear + 1
      ]
      this.chart.hideLoading(); //隐藏加载动画
      this.chart.setOption({
        title: {
          text: '情绪分析'
        },
        tooltip: {},
        legend: {
          data: 'score(%)'
        },
        grid: {
          containLabel: true
        },
        visualMap: {
          orient: 'horizontal',
          left: 'center',
          min: 0,
          max: 100,
          text: ['High Score', 'Low Score'],
          // Map the score column to color
          dimension: 1,
          inRange: {
            color: ['#65B581', '#FFCE34', '#FD665F']
          }
        },
        xAxis: {
          data: EmotionList
        },
        yAxis: {}, //注意一定不能丢了这个，不然图表Y轴不显示
        series: [{
          // 根据名字对应到相应的系列，并且要注明type
          name: 'score',
          type: 'bar',
          data: EmotionValue
        }]
      });
    }
     */
  }
}
</script>

<style scoped>
.body {
  background-image: url("../assets/face/bg2.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
}

#login-box {
  width: 30%;
  height: 450px;
  margin: 8% auto 0;
  border-radius: 40px;
  text-align: center;
  background: #00000060;
  padding: 20px 50px;
}

#login-box h1 {
  color: #fff;
}

#login-box .form .item input {
  margin-top: 15px;
}

#login-box .form i {
  font-size: 18px;
  color: #fff;
}

#login-box .form .item input {
  width: 180px;
  font-size: 18px;
  /* border: 0; */
  border-bottom: 2px solid#fff;
  padding: 5px 10px;
  border-radius: 15px;
  background: #ffffff00;
  color: #fff;
}

.camera,
.analysis {
  margin-top: 10px;
  margin-bottom: 40px;
  /* vertical-align: auto; */
  width: 166px;
  height: 30px;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(to right, rgb(237,47,106) 0%, rgb(34,162,195) 100%);
  /* border: 0; */
  border-radius: 15px;
}


/* .register{
    margin-top: 15px;
    float: right;
    width: 100px;
    height: 30px;
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    background:linear-gradient(to right,#684e4e 12%,#3b3a4ee1 40%);
    border: 0;
    border-radius: 15px;
} */

.AIsing {
  font-style: italic;
  text-shadow: 0px 0px 8px #fff, 0px 0px 42px #f72, 0px 0px 72px #f84, 0px 0px 150px #fa5;
}

video,
canvas {
  margin-left: -155px;
  margin-top: 14px;
  position: absolute;
  /* border: 1px solid red; */
}

#main {
  /* margin-top: 200px; */
  /* margin-left: 800px; */
  width: 600px;
  height: 400px;
  background: #91d9eb60;
  /* border: #f72 1px solid; */
}

#chart {
  position: absolute;
  float: left;
  margin-top: 30px;
  margin-left: 200px;
  width: 600px;
  /* border: 1px solid red; */
  display: inline;
}

.glass {
  width: 100%;
  height: 8rem;
  /*background-color: #eee;*/
  display: flex;
  justify-content: center;
}

.dock {
  --scale-factor: 1;

  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dock li {
  font-size: calc(6rem * var(--scale-factor));
  padding: 0 .5rem;
  cursor: default;

  /* 默认放大时中间对齐，改为底部对对齐 */
  position: relative;
  top: calc((6rem * var(--scale-factor) - 6rem) / 2 * -1);
  transition: 15ms ease-out;
}
</style>
