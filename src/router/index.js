import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Start from '@/views/Start.vue'
import MusicSquare from "@/views/MusicSquare";
import TagSelect from "@/views/TagSelect";
import Emotion from "@/views/Emotion";
import AudioWave from "@/components/home/AudioWave";
import Index from "@/views/Index"
import Main from "@/views/Main";
import Test from "@/views/Test";
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
    path:'/audioWave',
    name: 'AudioWave',
    component: AudioWave
  },
  {
    path:'/tag',
    component: TagSelect
  },
  {
    path: '/test',
    component: Test
  },
  {
    path: '/index',
    name: 'Index',
    component: Index,
    redirect: '/index/main',
    children: [
      {
        path: 'main',
        name: 'Main',
        component: Main
      },
      {
        path: 'tag',
        name: 'Tag',
        component: TagSelect
      },
      {
        path: 'face',
        name: 'Face',
        component: Emotion
      },
      {
        path: 'square',
        name: 'Square',
        component: MusicSquare
      },
      {
        path: 'player',
        name: 'Player',
        component: Home
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
