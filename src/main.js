import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'


const app = createApp(App)
// 全局注册
app.config.globalProperties.$axios = axios

app.use(ElementPlus).use(store).use(router).use(VueAxios,axios).mount('#app')
