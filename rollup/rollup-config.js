import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs    from 'rollup-plugin-commonjs';
import uglify      from 'rollup-plugin-uglify';

class RollupRemoveDecorators {
    
    transform(code, id) {
      let pattern = /(.*).ctorParameters/;
      var matches = pattern.exec(code);
      if(matches){
        let key = matches[1] + '.decorators';
        let indexCtorParameters = code.indexOf(matches[1] + '.ctorParameters');
        let indexDecorator = code.indexOf(key);
        
        if(indexDecorator == -1) return;

        let transformed = code.substr(0, indexDecorator) + code.substr(indexCtorParameters);
        return {code: transformed}; 
        
      }

      return null;
    }
}
const removeDecorators = (config) => new RollupRemoveDecorators(config);

export default {
    input: 'built/src/main.js',
    output: {file: 'dist/bundle.js', format: 'iife'},
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