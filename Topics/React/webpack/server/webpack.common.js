const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPugPlugin = require("html-webpack-pug-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    home: "./src/assets/js/home.js", 
    teste: "./src/assets/js/teste.js"
  },
  output: {
    filename: "./js/[name].js",
    path: path.resolve(__dirname, "dist")
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
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
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
    new MiniCssExtractPlugin({ filename: "./css/[name].css" }),
    new HtmlWebpackPlugin({
      filename: "home.html",
      template: "src/home.pug",
      chunks: ["home"]
    }),
    new HtmlWebpackPlugin({
      filename: "teste.html",
      template: "src/teste.pug",
      chunks: ["teste"]
    }),
    new HtmlWebpackPugPlugin()
  ]
};