var path = require('path')
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server',
    './index.js'
  ],
  devtool:'source-map',
  output: {
    path: path.join(__dirname,'static'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('style.css')
  ],
  module: {
    loaders: [
      {
        test:/\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
          plugins: ["transform-decorators-legacy", "transform-class-properties"]
        }
      }
    ]
  }

}
