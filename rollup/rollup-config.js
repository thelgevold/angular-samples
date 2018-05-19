import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs    from 'rollup-plugin-commonjs';
import uglify      from 'rollup-plugin-uglify';

export default {
    input: 'built/src/apps/main-demo-app/main.js',
    output: {file: 'dist/bundle.js', format: 'iife'},
    plugins: [
      commonjs({
          include: 'node_modules/rxjs**'
      }),
      nodeResolve({
          jsnext: true, module: true
      }),
      uglify()
      
    ]

}