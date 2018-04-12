var path = require('path')
var webpack = require('webpack')


module.exports = {
  entry: {
    entry1: './src/app1/src/index.js',
    entry2: './src/app2/src/index.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: '[name].js',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        'commons': {
          minChunks: 2,
          chunks: 'all',
          name: 'commons',
          priority: 10,
          enforce: true,
        },
      },
    },
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    },
    extensions: ['*', '.js', '.vue', '.json'],
  },
}