import resolve from 'rollup-plugin-node-resolve';
import commonjs    from 'rollup-plugin-commonjs';
import uglify      from 'rollup-plugin-uglify';
import optimizer from '@angular-devkit/build-optimizer/src/build-optimizer/rollup-plugin';

export default {
    input: 'built-es5/src/apps/bundler-comparison-app/main.js',
    output: {file: 'dist/bundle-rollup.js', format: 'iife'},
    plugins: [
      optimizer({
        sideEffectFreeModules: ['@angular/core/esm5/core.js']
      }),
      resolve({jsnext: true, module: true}),
      uglify()
    ]

}