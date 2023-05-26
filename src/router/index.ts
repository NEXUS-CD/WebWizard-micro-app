/*
 * @Author: zhangwc zhangwc@knownsec.com
 * @Date: 2023-05-24 22:00:37
 * @LastEditors: zhangwc zhangwc@knownsec.com
 * @LastEditTime: 2023-05-24 22:56:04
 * @FilePath: /WebWizard/web-wizard-micro-app/src/router/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home/HomePage.vue'
import AboutPage from '@/pages/about/AboutPage.vue'

const router = createRouter({
  history: createWebHistory('/micro-app'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    { path: '/about', name: 'about', component: AboutPage }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
