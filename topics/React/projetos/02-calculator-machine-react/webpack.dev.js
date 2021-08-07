const common = require("./webpack.common");
const path   = require("path");
const merge  = require("webpack-merge");



module.exports = merge (common, {
  mode: "development",
  watch: true,
  devServer: {
    port: 3000,
    open: true,
    compress: true,
    liveReload: true,
    contentBase: path.join(__dirname, "./dist/")
  }
});