const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const uglifyOptions = require('./uglify-options');
const PurifyPlugin = require('@angular-devkit/build-optimizer').PurifyPlugin;
const webpack = require('webpack');

module.exports = {
  entry: './built-es5/src/apps/bundler-comparison-app/main.js',
  output: {
    filename: 'dist/bundle-webpack-3-no-lazy-loading.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: '@angular-devkit/build-optimizer/webpack-loader',
        options: {
          sourceMap: false
        }
      }
    ]
  },

  resolve: {
    alias: {
      'rxjs': 'rxjs/_esm5'
    }
  },

  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new UglifyJsPlugin({uglifyOptions:uglifyOptions}),
    new PurifyPlugin()
  ]
}