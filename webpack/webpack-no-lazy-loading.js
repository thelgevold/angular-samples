const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
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
    new UglifyJsPlugin({
      beautify: false, 
      output: {
        comments: false
      }, 
      mangle: {
        screw_ie8: true
      }, 
      compress: {
        screw_ie8: true,
        warnings: false,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
        negate_iife: false,
        pure_getters: true,
        passes: 3
      },
    }),
    new PurifyPlugin()
  ]
}