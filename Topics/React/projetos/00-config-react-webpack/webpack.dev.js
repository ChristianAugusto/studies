const common = require("./webpack.common");
const path   = require("path");
const merge  = require("webpack-merge");



module.exports = merge (common, {
  mode: "development",
  watch: true,
  devServer: {
    port: 3000,
    contentBase: __dirname + "/dist",
    open: true,
    compress: true,
    liveReload: true,
    historyApiFallback: true
  }
});