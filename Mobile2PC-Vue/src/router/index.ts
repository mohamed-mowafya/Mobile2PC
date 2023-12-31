import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import fileUpload from '../views/FileUploadView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/fileUpload/:connectionId',
      name: 'fileUpload',
      component: fileUpload
    },
  ]
})

export default router
