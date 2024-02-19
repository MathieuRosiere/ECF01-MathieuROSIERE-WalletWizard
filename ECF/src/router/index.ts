import { createRouter, createWebHistory } from 'vue-router'
import MyForm from '@/components/MyForm.vue'
import HistoryDisplay from '@/components/HistoryDisplay.vue'
import HomePage from '@/components/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/add',
      name: 'myForm',
      component: MyForm
    },
    {
      path: '/history',
      name: 'history',
      component: HistoryDisplay
    }
  ]
})

export default router
