const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');



const storename = 'burgerking';
const pages = ['home', 'category'].map(page => `${storename}-${page}`);

module.exports = {
  entry: {
    'burgerking-home': './src/js/burgerking-home.js',
    'burgerking-category': './src/js/burgerking-category.js',
  },
  output: {
    publicPath: '/js/',
    filename: '[name].js',
    path: __dirname + '/dist'
  },
  module: {
    rules: [
      { 
        enforce: 'pre',
        test: /\.jsx?$/, 
        exclude: /node_modules/, 
        loader: 'eslint-loader' 
      },
      { 
        test: /\.jsx?$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader' 
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.pug$/,
        use: [
          'raw-loader',
          'pug-html-loader'
        ]
      }
    ]
  },
  plugins: [
    ...pages.map(page => new HtmlWebpackPlugin({
      template: `./views/${page}.pug`,
      filename: `${page}.html`,
      minify: {
        collapseWhitespace: false,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: false,
        useShortDoctype: true
      },
      // chunks: [`${page}`],
      chunks: [],
      xhtml: true
    })),
    new HtmlWebpackPugPlugin()
  ],
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin({
        cssProcessorOptions: {
          map: {
            inline: true,
            annotation: true,
          },
        },
      }),
    ],
  },
};