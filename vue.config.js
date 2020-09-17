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
          // 正しいコード
          target: process.env.NODE_ENV === 'development' ? "http://localhost:3000" : "https://guarded-wildwood-22546.herokuapp.com"
          
          // target: 'http://localhost:3000'

          // ダミー
          // target: process.env.NODE_ENV === 'development' ? "http://localhost:30000" : "https://guarded-wildwood-22546.herokuapp.com"
        }
      },
      host: 'localhost',
      watchOptions: {
        poll: true
      },
      disableHostCheck: true
    }
  }
}