import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ReceptesView from '../views/ReceptesView.vue'
import SobreView from '../views/SobreView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/receptes',
      name: 'receptes',
      component: ReceptesView
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: SobreView
    }
  ]
})

export default router