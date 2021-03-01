/*
 * @Author: chenzhenjin
 * @Email: BrotherStudy@163.com
 * @Date: 2021-02-18 16:42:21
 * @LastEditTime: 2021-02-26 14:29:50
 * @Descripttion: 模块描述
 */
import Vue from 'vue'
import App from './App.vue'
import routes from './router'
import store from './store'
import VueRouter from 'vue-router'
import { name } from '../package.json'
import globalRegister from '@/utils/globalRegister'

Vue.config.productionTip = false

let install = null
function render(props = {}) {
  // const { routerBase, container } = props
  const { container } = props
  const router = new VueRouter({
    // base: window.__POWERED_BY_QIANKUN__ ? routerBase : process.env.BASE_URL,
    // mode: 'history',
    routes
  })

  if (window.__POWERED_BY_QIANKUN__) {
    router.beforeEach((to, from, next) => {
      if (!to.path.includes('/micrApp')) {
        next({ path: `/micrApp/${name}${to.path}`, query: to.query })
      } else {
        next()
      }
    })
  }

  install = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app')
}
if (window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line
  console.log('window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__', window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__)
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
} else {
  globalRegister(store)
  const user = { name: '子应用独立chenzhenjin' }
  store.commit('global/setGlobalState', { user })
  render()
}

export async function bootstrap() {}

export async function mount(props) {
  console.log('[vue] props from main framework', props)
  globalRegister(store, props)
  render(props)
}
export async function unmount() {
  install.$destroy()
  install.$el.innerHTML = '' // 子项目内存泄露问题
  install = null
}
