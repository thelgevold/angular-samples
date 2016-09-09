import rollup from 'rollup';
import nodeResolve from 'rollup-plugin-node-resolve';
var closure = require('google-closure-compiler-js');
import commonjs from 'rollup-plugin-commonjs';

function closureCompilerPlugin(){
  return {
    transformBundle(bundle){
      var transformed = closure.compile({jsCode: [{src: bundle}]});
      return transformed.compiledCode;
    }
  }
}

export default {
    entry: 'main.js',
    dest: 'dist/bundle.js',
    sourceMap: false,
    format: 'iife',
    plugins: [
        commonjs({
            include: 'node_modules/rxjs/**',
        }),
        nodeResolve({
            jsnext: true, module: true
        }),
        closureCompilerPlugin()
    ]

}