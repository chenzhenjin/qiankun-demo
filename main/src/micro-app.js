/*
 * @Author: chenzhenjin
 * @Email: BrotherStudy@163.com
 * @Date: 2021-02-18 16:45:27
 * @LastEditTime: 2021-02-26 15:07:21
 * @Descripttion: 模块描述
 */
import store from './store'
const microApps = [
  {
    name: 'sub-vue',
    entry: process.env.VUE_APP_SUB_VUE,
    activeRule: '/#/micrApp/sub-vue'
  },
  {
    name: 'jdb-yunying',
    entry: process.env.VUE_APP_YUNYING,
    activeRule: '/#/micrApp/jdb-yunying'
  }
]

const apps = microApps.map(item => {
  return {
    ...item,
    container: '#subapp-viewport', // 子应用挂载的div
    props: {
      routerBase: item.activeRule, // 下发基础路由
      getGlobalState: store.getGlobalState
    }
  }
})

export default apps
