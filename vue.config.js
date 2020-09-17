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
      // axios: {
      //   baseURL: process.env.BASE_URL	|| '/'	// 追記
      // },
      // axios: {
      //   // axios でproxy が使えるようにする
      //   proxy: true
      // },
      proxy: {
        // "/api/": {
        //   target: process.env.NODE_ENV === 'production' ? "https://guarded-wildwood-22546.herokuapp.com" : "http://localhost:3000"
        // }
        "/api/": {
          target: "https://guarded-wildwood-22546.herokuapp.com"
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