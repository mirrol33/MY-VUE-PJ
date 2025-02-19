// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../components/main.vue'
import AboutPage from '../views/AboutPage.vue'
import NotFoundPage from '../views/NotFoundPage.vue'

const routes = [
  { path: '/', component: MainPage },
  { path: '/about', component: AboutPage },
  { path: '/:pathMatch(.*)*', component: NotFoundPage } // NotFoundPage for unmatched routes
]

const router = createRouter({
  history: createWebHistory('/MY-VUE-PJ/my-portfolio/'),
  routes
})

export default router
