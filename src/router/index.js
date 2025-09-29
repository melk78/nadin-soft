import { createRouter, createWebHistory } from 'vue-router'
import Dashbord from '../views/DashbordView.vue'
import Todo from '../views/TodoView.vue'
import weather from '../views/WeatherView.vue'
import profile from '../views/ProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashbord',
      component: Dashbord,
    },
    {
      path: '/todo',
      name: 'Todo',
      component: Todo,
    },
    {
      path: '/weather',
      name: 'Weather',
      component: weather,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: profile,
    },
  ],
})

export default router
