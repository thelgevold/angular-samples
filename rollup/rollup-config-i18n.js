import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs    from 'rollup-plugin-commonjs';

export default {
  input: 'built-i18n-es5/src/apps/i18n-demo-app/main-aot.js',
  output: {format: 'iife'},
  plugins: [
    nodeResolve({jsnext: true, module: true}),
    commonjs({
      include: 'node_modules/rxjs/**',
    })
  ]
}