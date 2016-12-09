import {rollup} from 'rollup'
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs    from 'rollup-plugin-commonjs';


export default {
    entry: 'main.js',
    dest: 'dist/temp.js',
    sourceMap: false,
    format: 'iife',
    plugins: [
        commonjs({
            include: 'node_modules/rxjs/**'
        }),
        nodeResolve({
            jsnext: true, module: true
        })
    ]

}