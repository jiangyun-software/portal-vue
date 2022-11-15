import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/layouts/default/index.vue'),
    redirect: 'index',
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import('@/views/home/Index.vue'),
        meta: {
          title: '首页',
        },
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
