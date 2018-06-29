const webpack = require('webpack');

module.exports = {
  entry: './vendor/index.js',
  output: {
    path: __dirname,
    filename: './vendor.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
}