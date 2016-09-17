import rollup      from 'rollup'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs    from 'rollup-plugin-commonjs';
import uglify      from 'rollup-plugin-uglify';
import angular     from 'rollup-plugin-angular';
import typescript  from 'rollup-plugin-typescript';
import closure     from 'google-closure-compiler-js';

function closureCompilerPlugin(){
  return {
    transformBundle(bundle){
      var transformed = closure.compile({compilationLevel: 'SIMPLE', jsCode: [{src: bundle}]});
      return transformed.compiledCode;
    }
  }
}

export default {
  entry: 'upgrade.js',
  dest: 'upgrade-build.js',
  sourceMap: false,
  format: 'iife',
  plugins: [
      angular(),
      typescript(),
      nodeResolve({jsnext: true, module: true}),
      commonjs({
        include: 'node_modules/rxjs/**',
      }),
      closureCompilerPlugin()
  ]
}