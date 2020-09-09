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
      host: 'localhost',
      watchOptions: {
        poll: true
      },
      disableHostCheck: true
    }
  }
}