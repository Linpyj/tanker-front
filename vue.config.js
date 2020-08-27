module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  configureWebpack: {
    devServer: {
      host: 'localhost',
      watchOptions: {
        poll: true
      },
      disableHostCheck: true
    }
  }
}