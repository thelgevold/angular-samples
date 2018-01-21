import resolve from 'rollup-plugin-node-resolve';
import commonjs    from 'rollup-plugin-commonjs';
import uglify      from 'rollup-plugin-uglify';

import {ResolveESM} from './resolve-esm';

export default {
    input: 'built-es5/app/main.js',
    output: {file: 'dist/bundle-rollup.js', format: 'iife'},
    plugins: [
      new ResolveESM(),
      resolve({jsnext: true, module: true}),
      uglify()
    ]

}