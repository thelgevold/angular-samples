import resolve from 'rollup-plugin-node-resolve';
import uglify  from 'rollup-plugin-uglify';

import {ResolveESM} from './resolve-esm';

export default {
    input: ['built-es5-lazy/app-lazy/main.js', 
            'built-es5-lazy/app-lazy/lazy-modules/spreadsheet.module.ngfactory',
            "built-es5-lazy/app-lazy/lazy-modules/dynamic-form.module.ngfactory",
            "built-es5-lazy/app-lazy/lazy-modules/graph.module.ngfactory",
            "built-es5-lazy/app-lazy/lazy-modules/input-controls.module.ngfactory",
            "built-es5-lazy/app-lazy/lazy-modules/insertion-sort.module.ngfactory",
            "built-es5-lazy/app-lazy/lazy-modules/lazy-loaded-treeview.module.ngfactory",
            "built-es5-lazy/app-lazy/lazy-modules/pub-sub.module.ngfactory",
            "built-es5-lazy/app-lazy/lazy-modules/redux.module.ngfactory",
            "built-es5-lazy/app-lazy/lazy-modules/rxjs-buffering.module.ngfactory",
            "built-es5-lazy/app-lazy/lazy-modules/rxjs-streams.module.ngfactory",
            "built-es5-lazy/app-lazy/lazy-modules/text-editor.module.ngfactory"
    ],
    output:{ dir: 'dist/rollup-lazy', format: 'cjs'},
    experimentalCodeSplitting: true,
    experimentalDynamicImport: true,
    plugins: [
      new ResolveESM(),
      resolve({jsnext: true, module: true}),
      uglify()
    ]

}