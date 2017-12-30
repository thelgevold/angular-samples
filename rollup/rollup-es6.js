import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs    from 'rollup-plugin-commonjs';

class ResolveFESM2015 {
    
  resolveId(importee, importer) {
    if(importee.startsWith('@angular')) {
      const pkg = importee.replace('@angular', '');
      return `node_modules/${importee}/esm2015/${pkg}.js`;
    }
  }
}

export default {
  input: 'built-es6/app/main.js',
  output: {file: 'dist/bundle-rollup-es6.js', format: 'iife'},
  sourceMap: false,
  plugins: [
    new ResolveFESM2015(),
    commonjs({
      include: 'node_modules/rxjs/**'
    }),
    nodeResolve({
      jsnext: true, module: true
    }),
  ]

}
