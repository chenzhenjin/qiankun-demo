import Vue from 'vue'
import App from './App.vue'

import { registerMicroApps, start, setDefaultMountApp } from 'qiankun'
import microApps from './micro-app'
Vue.config.productionTip = false

import { removeToken, setToken } from '@/assets/js/auth'
import { PubSubSingle } from '@/assets/js/pubSub'
setToken(
  'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJZVVNIVSIsImlkIjoxMDUsIm5pY2tfbmFtZSI6IumZiOmVh-mHkSIsInVzZXJfbmFtZSI6IumZiOmVh-mHkSIsIm1vYmlsZV9waG9uZSI6IjE1OTE1ODM2MzU0IiwicGVybWlzc2lvbnMiOlsi55m75b2V5pe25LiN5p-l6K-i5pON5L2c5p2D6ZmQ6ZuG77yM6Kej5p6QdG9rZW7ml7bmiY3mn6Xor6IiXSwiaWF0IjoxNjE0NTcxNDkzLCJleHAiOjE2MTQ2NTc4OTN9.q4qwr1y9ZAUXOO-IFD-EFcoisJQrPwDwzTxuTvQG0aM'
)
window.PubSubSingle = PubSubSingle
PubSubSingle.subscriber('againLogin', () => {
  removeToken()
  location.reload()
})

new Vue({
  render: h => h(App)
}).$mount('#app')

const config = {
  beforeLoad: [
    app => {
      console.log('%c before load', 'background:#333;color: #fff;', app)
    }
  ], // 挂载前回调
  beforeMount: [
    app => {
      console.log('%c before mount', 'background:#666;color:#fff;', app)
    }
  ], // 挂载后回调
  afterUnmount: [
    app => {
      console.log('%c after unload', 'background: #999; color:#fff;', app)
    }
  ] // 卸载后回调
}

registerMicroApps(microApps, config)
// 默认打开第一个子项目
setDefaultMountApp(microApps[0].activeRule)
start()
