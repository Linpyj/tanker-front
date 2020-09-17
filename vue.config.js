module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  configureWebpack: {
    devServer: {
      // proxy設定追記　By Lin
      // proxy: {
      //   '^/': {
      //     target: 'http://localhost:3000',
      //   }
      // },
      //　追記ここまで
      // 9/17
      proxy: {
        "/api/": {
          target: process.env.NODE_ENV === 'development' ? "http://localhost:3000" : "https://guarded-wildwood-22546.herokuapp.com"
        }
      },
      // host: 'localhost',
      watchOptions: {
        poll: true
      },
      disableHostCheck: true
    }
  }
}