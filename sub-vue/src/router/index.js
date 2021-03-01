import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { name } from '../../package.json'

Vue.use(VueRouter)

const prefix = window.__POWERED_BY_QIANKUN__ ? `/micrApp/${name}/` : '/'
const routes = [
  {
    path: prefix,
    name: 'Home',
    component: Home
  },
  {
    path: `${prefix}about`,
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

export default routes

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

// export default router
