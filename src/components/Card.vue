<template>
    <div>
        <div class="flip-box" @click="play">
            <div :class="{'flip-front':playFlip}"
                 class="flip-item flip-item-front">
                 <div >
                    <span class="tname">{{tag_name}}</span>
                 </div>
            </div>
            <div :class="{'flip-back':playFlip}"
                 class="flip-item flip-item-back">
                <img id="temp" :src="img_src"/>
              
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:'Card',
        props:{
          img_src:String,
          tag_name:String,
        },
        data() {
            return {
                playFlip: false,
            }
        },
        methods: {
            play() {
                console.log("yes")
                this.playFlip = !this.playFlip
            }
        },
        mounted(){
          console.log(this.tag_name)
          console.log(this.img_src)
        }
    }
</script>
<style scoped>
    #temp{
      height: 200px;
      width: 300px;
    }
    .tname{
      height:200px;
      width:100px;
      text-align: center;
      line-height:200px;
      font-family: YouYuan;
      font-size: 25px;
    }

    .backname{
      position: absolute;
      height:200px;
      width:100px;
      text-align: center;
      line-height:200px;
      font-family: YouYuan;
      font-size: 25px;
    }
    .flip-box {
        position: relative;
        overflow: hidden;
        height: 200px;
        width: 300px;
        border-radius:15px;
    }
 
    .flip-item {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        transition: all 1s ease-in-out 0s;
        backface-visibility: hidden;
        box-sizing: border-box;
    }
 
    .flip-item-front {
        z-index: 2;
        background: rgb(210, 186, 186);
        color: white;
    }
 
    .flip-item-back {
        transform: rotateY(180deg);
        z-index: 1;
        background: rgb(43, 63, 43);
        color: white;
    }
 
    .flip-box:hover .flip-item-front {
        transform: rotateY(180deg);
    }
 
    .flip-box:hover .flip-item-back {
        transform: rotateY(0deg);
    }
 
    .flip-front {
        transform: rotateY(180deg);
    }
 
    .flip-back {
        transform: rotateY(0deg);
    }
</style>