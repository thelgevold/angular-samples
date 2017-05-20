import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs    from 'rollup-plugin-commonjs';
import uglify      from 'rollup-plugin-uglify';

export default {
    entry: 'built-es5/app/main.js',
    dest: 'dist/bundle-rollup.js',
    sourceMap: false,
    format: 'iife',
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