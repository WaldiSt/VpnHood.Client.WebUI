module.exports = {
  devServer: {
    port: 30080  // only 30080, 8080 and 8081 is allowed by VpnHoodUI CORS
  },

  configureWebpack: {
    performance: {
      hints: false
    },
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000,
      }
    }
  },
  transpileDependencies: [
    "vuetify"
  ],
  productionSourceMap: process.env.NODE_ENV != 'production'

}