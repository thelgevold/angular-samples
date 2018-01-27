import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs    from 'rollup-plugin-commonjs';
import uglify      from 'rollup-plugin-uglify';

export default {
  input: 'src/built-upgrade/src/apps/ng-upgrade-app/upgrade.js',
  output: {file: './dist/upgrade-build.js', format: 'iife'},
  plugins: [
      nodeResolve({jsnext: true, module: true}),
      commonjs({
        include: 'node_modules/rxjs/**',
      }),
      uglify()
  ]
}