import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs    from 'rollup-plugin-commonjs';
import uglify      from 'rollup-plugin-uglify';

export default {
    entry: 'main.js',
    dest: 'dist/bundle.js',
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