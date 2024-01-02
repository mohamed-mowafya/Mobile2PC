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
      path: '/file-upload/:connectionId',
      name: 'file-upload',
      component: fileUpload
    },
    {
      path: '/:pathMatch(.*)*',
      component: HomeView
    },
  ]
})

export default router
