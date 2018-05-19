import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs    from 'rollup-plugin-commonjs';

import optimizer from '@angular-devkit/build-optimizer/src/build-optimizer/rollup-plugin';


export default {
  input: 'built-es6/src/apps/bundler-comparison-app/main.js',
  output: {file: 'dist/bundle-rollup-es6.js', format: 'iife'},
  plugins: [
    optimizer({
      sideEffectFreeModules: ['@angular/core/esm5/core.js']
    }),
    commonjs({
      include: 'node_modules/rxjs/**'
    }),
    nodeResolve({
      jsnext: true, module: true
    }),
  ]

}
