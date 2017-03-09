const webpack = require('webpack');
const path = require('path');

const config = {
  entry: __dirname + '/app.js',
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.js'],
    alias: {
      'react': 'react-lite',
      'react-dom': 'react-lite'
    }
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
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      comments: false,
      compress: {
        unused: true,
        dead_code: true,
        warnings: false,
        drop_debugger: true,
        conditionals: true,
        evaluate: true,
        drop_console: true,
        sequences: true,
        booleans: true,
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        screw_ie8: true
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin()
  ]
};

module.exports = config;
