import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/pages/HomePage.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'HomePage', component: HomePage },
    { path: '/movie', name: 'MoviesPage', component: () => import('@/pages/MoviesPage.vue') },
    { path: '/search', name: 'Searchpage', component: () => import('@/pages/SearchPage.vue') },
    { path: '/tv', name: 'TvsPage', component: () => import('@/pages/TvsPage.vue') },
  ]
})

export default router
