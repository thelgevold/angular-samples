import {rollup} from 'rollup'
import nodeResolve from 'rollup-plugin-node-resolve'

class RollupNG2 {
    constructor(options){
        this.options = options;
    }
    resolveId(id, from){
        if (id.startsWith('rxjs/')){
            return `${__dirname}/node_modules/rxjs-es/${id.replace('rxjs/', '')}.js`;
        }
    }
}
const rollupNG2 = (config) => new RollupNG2(config);

export default {
    entry: 'main.js',
    dest: 'dist/bundle.es2015.js',
    sourceMap: false,
    plugins: [
        rollupNG2(),
        nodeResolve({jsnext: true, main: true})
    ]

}