import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Start from '@/views/Start.vue'
import MusicSquare from "@/views/MusicSquare";
const routes = [
  {
    path: '/main',
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
