var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  entry : {
    'main' : ['./src/scripts/main.js'],
    'page' : ['./src/scripts/page.js'],
    'common' : ['./src/scripts/base.js']
  },
  output : {
    path : './build',
    filename : './js/[name].js'
  },
  module : {
    loaders : [
      {
        test: /\.(svg|jpg)$/, 
        loader:'url-loader'
      },
      {
        test: /\.css$/,
        loader:ExtractTextPlugin.extract('style-loader','css-loader')
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename:  'index.html',
      chunks: ['main','common'] 
    }),
    new HtmlWebpackPlugin({
      template: './src/page.html',
      filename:  'page.html',
      chunks: ['page','common'] 
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: './js/base.js' 
    }),
    new ExtractTextPlugin('[name].css')
  ]
}