const path                    = require("path");
const HtmlWebpackPlugin       = require("html-webpack-plugin");
const HtmlWebpackPugPlugin    = require("html-webpack-pug-plugin");
const MiniCssExtractPlugin    = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin            = require("terser-webpack-plugin");



module.exports = {
  entry: {
    app: "./src/assets/js/app.js"
  },
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    extensions: [".js", ".jsx"]
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
          // "style-loader", // 3. Creates `style` nodes from JS strings
          "css-loader", // 2. Translates CSS into CommonJS
          "sass-loader",  // 1. Compiles Sass to CSS
        ],
      },
      { 
        test: /\.pug$/, 
        loader: "pug-loader" 
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "css/[name].css" }),
    new HtmlWebpackPlugin({
      filename: "app.html",
      template: "src/app.pug",
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true
      },
      chunks: ["app"]
    }),
    new HtmlWebpackPugPlugin()
  ]
};