import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs    from 'rollup-plugin-commonjs';
import uglify      from 'rollup-plugin-uglify';

export default {
    input: 'built-es5/app/main.js',
    output: {file: 'dist/bundle-rollup.js', format: 'iife'},
    sourceMap: false,
    plugins: [
      commonjs({
          include: 'node_modules/rxjs/**'
      }),
      nodeResolve({
          jsnext: true, module: true
      }),
      uglify()
      
    ]

}