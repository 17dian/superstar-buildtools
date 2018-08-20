var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry : './src/scripts/main.js',
  output : {
    path : './build',
    filename : 'bundle.js'
  },
  module : {
    loaders : [
      {
        test: /\.(svg|jpg)$/, 
        loader:'url'
      },
      {
        test: /\.css$/,
        loader:ExtractTextPlugin.extract('style-loader','css-loader')
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: 'index.html'}),
    new ExtractTextPlugin('[name].css')
  ]
}