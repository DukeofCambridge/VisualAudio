import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Start from '@/views/Start.vue'
import MusicSquare from "@/views/MusicSquare";
import TagSelect from "@/views/TagSelect";
import Emotion from "@/components/Emotion";
import AudioWave from "@/components/home/AudioWave";
import Index from "@/views/Index"
const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Start',
    component: Start
  },
  {
    path: '/square',
    name: 'MusicSquare',
    component: MusicSquare
  },
  {
    path: '/TagSelect',
    name: 'TagSelect',
    component: TagSelect
  },
  {
    path:'/face',
    name: 'Face',
    component: Emotion
  },
   {
    path:'/audioWave',
    name: 'AudioWave',
    component: AudioWave
  },
  {
    path: '/index',
    name: 'Index',
    component: Index
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
