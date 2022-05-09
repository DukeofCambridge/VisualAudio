import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Start from '@/views/Start.vue'
import MusicSquare from "@/views/MusicSquare";
import TagSelect from "@/views/TagSelect";
import Emotion from "@/components/Emotion";
import Canvas from "@/views/Canvas"
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
    path:'/canvas',
    name: 'Canvas',
    component: Canvas
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
