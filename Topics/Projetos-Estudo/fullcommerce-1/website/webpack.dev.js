const common = require('./webpack.common');
const merge  = require('webpack-merge');



module.exports = merge (common, {
  mode: 'development',
  watch: true,
  devServer: {
    port: 3000,
    proxy: {
      '/': 'http://localhost'
    },
    open: false,
    compress: true,
    liveReload: true,
    historyApiFallback: true
  }
});