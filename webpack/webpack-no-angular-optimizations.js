const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const uglifyOptions = require('./uglify-options');
const webpack = require('webpack');

module.exports = {
  entry: './built-es5/src/apps/bundler-comparison-app/main.js',
  output: {
    filename: 'dist/bundle-webpack-3-no-angular-optimizations.js'
  },

  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new UglifyJsPlugin({uglifyOptions:uglifyOptions})
  ]
}