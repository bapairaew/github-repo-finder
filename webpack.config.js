const webpack = require('webpack');
const path = require('path');

const config = {
  entry: __dirname + '/app.js',
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.js']
  },
  output: {
    path: 'dist/',
    filename: 'bundle.js'
  },
  module : {
    loaders : [{
      test: /\.js$/,
      include: __dirname,
      loader: 'babel-loader'
    }]
  }
};

module.exports = config;
