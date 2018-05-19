const ngToolsWebpack = require('@ngtools/webpack');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const uglifyOptions = require('./uglify-options');

module.exports = {
  resolve: {
    extensions: ['.ts', '.js']
  },
  entry: './src/apps/lazy-loading-app/main.ts',
  output: {
    filename: 'dist/bundle-webpack-lazy-loading.js'
  },

  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new ngToolsWebpack.AngularCompilerPlugin({
      tsConfigPath: './src/tsconfig-webpack.json',
      "entryModule": "src/apps/lazy-loading-app/app.module#AppModule"
    }),
		new webpack.LoaderOptionsPlugin({
			minimize: true,
			debug: false
		}),
		new UglifyJsPlugin({uglifyOptions:uglifyOptions}),
  ],
  module: {
    rules: [
      { test: /\.css$/, loader: 'raw-loader' },
      { test: /\.html$/, loader: 'raw-loader' },
      { test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/, loader: '@ngtools/webpack' }
    ]
  }
};