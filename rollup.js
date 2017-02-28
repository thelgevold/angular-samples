import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs    from 'rollup-plugin-commonjs';
import uglify      from 'rollup-plugin-uglify';
import { createFilter } from 'rollup-pluginutils';

class RollupRemoveDecorators {
    
    transform(code, id) {
      if ( id.indexOf('node_modules') !== -1) return null;

      let pattern = /(.*).ctorParameters/;
      var matches = pattern.exec(code);
      if(matches){
        let key = matches[1] + '.decorators';
        console.log(key);
        console.log(matches[1] + '.ctorParameters');
        let indexCtorParameters = code.indexOf(matches[1] + '.ctorParameters');
        let indexDecorator = code.indexOf(key);
       
        let trimmed = code.substr(0, indexDecorator) + code.substr(indexCtorParameters);
        return {code: trimmed};
      }

      return null;
    }
}
const removeDecorators = (config) => new RollupRemoveDecorators(config);

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
      new RollupRemoveDecorators(),
      uglify()
      
    ]

}