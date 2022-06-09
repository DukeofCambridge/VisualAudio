import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'element-ui/lib/theme-chalk/index.css'

const app = createApp(App)
// 全局注册
app.config.globalProperties.$axios = axios

app.use(ElementPlus).use(store).use(router).use(VueAxios,axios).mount('#app')

let loading;
export function startLoading() {
	//如果根实例设为变量VUE var VUE = new Vue({}) 也可写成下面的 
    // loading = VUE.$loading({
    //   lock: true,
    //   text: "拼命加载中...",
    //   background: 'rgba(0,0,0,0.2)'
    // })
    loading = ElementPlus.Loading.service({
        lock: true,
        text: "加载中...",
        background: 'rgba(0,0,0,0.2)'
    })
}

export function endLoading() {
    loading.close()
}