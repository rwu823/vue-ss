'use strict'

const webpack = require('webpack')
const pkg = require('./package.json')
const isDev = process.env.NODE_ENV !== 'production'
const HtmlWebpackPlugin = require('html-webpack-plugin')
const fs = require('fs')

module.exports = {
  entry: {
    [pkg.name]: isDev
      ? ['babel-polyfill', './dev/client.js']
      : ['./src'],
  },
  output: {
    path: `${__dirname}/npm/dist`,
    filename: '[name].js',
    library: 'VueIcon',
    libraryTarget: 'umd',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
      },
    ]
  },
  plugins: isDev ? [new HtmlWebpackPlugin({
    title: pkg.name,
    svg: fs.readFileSync(`src/icon.svg`),
    template: './dev/index.html',
  })] : [],
  watch: isDev ,
  devtool: isDev ? 'eval' : '',
  externals: {

  }
}
