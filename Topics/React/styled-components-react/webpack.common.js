const path                    = require("path");
const HtmlWebpackPlugin       = require("html-webpack-plugin");
const MiniCssExtractPlugin    = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin            = require("terser-webpack-plugin");
const CopyPlugin              = require("copy-webpack-plugin");


module.exports = {
  entry: {
    "app": "./src/assets/js/app.js"
  },
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "dist")
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin()
    ]
  },
  module: {
    rules: [
      { 
        enforce: "pre",
        test: /\.jsx?$/, 
        exclude: /node_modules/, 
        loader: "eslint-loader" 
      },
      { 
        test: /\.jsx?$/, 
        exclude: /node_modules/, 
        loader: "babel-loader" 
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "css/[name].css" }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true
      }
    })
    // new CopyPlugin([
    //   { from: "storage", to: "storage" },
    // ])
  ]
};