'use strict';

const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  context: __dirname,
  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules'
    ],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    },
    extensions: ['.js', '.json', '.vue']
  },
  entry: './src/index.js',
  // Don't include them into library build
  externals: {
    'vue': 'vue',
    'jquery': {
      commonjs: 'jquery',
      commonjs2: 'jquery',
      amd: 'jquery',
      root: 'jQuery'// indicates global variable
    },
    'moment': {
      commonjs: 'moment',
      commonjs2: 'moment',
      amd: 'moment',
      root: 'moment'
    },
    'moment-timezone': {},
    'eonasdan-bootstrap-datetimepicker': {},
    'eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css': {}
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'vue-bootstrap-datetimepicker.min.js',
    library: 'VueBootstrapDatetimePicker',
    libraryTarget: 'umd',
    umdNamedDefine: true,
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
        exclude: path.resolve(__dirname, 'node_modules'),
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['./dist']),
  ],
  devtool: false,
  performance: {
    hints: false,
  }
};
