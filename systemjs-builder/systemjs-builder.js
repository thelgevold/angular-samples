var path = require("path");
var Builder = require('systemjs-builder');

var builder = new Builder('', 'system.config.js');

builder
.buildStatic('built-es5-commonjs/bundler-comparison-app/main-jit.js', 'dist/bundle-systemjs-builder.js', { minify: true, mangle: true })
.then(function() {
  console.log('Build complete');
})
.catch(function(err) {
  console.log('Build error');
  console.log(err);
});