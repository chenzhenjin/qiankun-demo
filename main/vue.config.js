/*
 * @Author: wuzhiquan
 * @Date: 2020-11-25
 */
module.exports = {
  devServer: {
    port: 8088,
  },
  chainWebpack: config => {
    config.plugin('html')
      .tap((args) => {
        args[0].title = 'qiankun-chenzhenjin'
        return args
      })
  }
};
