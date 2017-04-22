import * as import0 from '@angular/core';
import * as import1 from '../insertion-sort/insertion-sort.ngfactory';
import * as import2 from '../../../components/insertion-sort/insertion-sort';
import * as import3 from '../../../components/algorithms/algorithms';
var styles_Algorithms = [];
export var RenderType_Algorithms = import0.ɵcrt({
    encapsulation: 2,
    styles: styles_Algorithms,
    data: {}
});
export function View_Algorithms_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'h1', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Insertion Sort Demo'])),
        (l()(), import0.ɵted(null, ['\n'])),
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Watch the list get sorted as the algorithm traverses the list'])),
        (l()(), import0.ɵted(null, ['\n'])),
        (l()(), import0.ɵeld(0, null, null, 1, 'insertion-sort', [], null, null, null, import1.View_InsertionSort_0, import1.RenderType_InsertionSort)),
        import0.ɵdid(24576, null, 0, import2.InsertionSort, [], null, null),
        (l()(), import0.ɵted(null, ['\n'])),
        (l()(), import0.ɵeld(0, null, null, 2, 'h4', [], null, null, null, null, null)),
        (l()(), import0.ɵeld(0, null, null, 1, 'a', [[
                'href',
                'http://www.syntaxsuccess.com/viewarticle/timeouts-and-timerwrapper-in-angular-2.0'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Read more here']))
    ], null, null);
}
function View_Algorithms_Host_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'algorithms', [], null, null, null, View_Algorithms_0, RenderType_Algorithms)),
        import0.ɵdid(24576, null, 0, import3.Algorithms, [], null, null)
    ], null, null);
}
export var AlgorithmsNgFactory = import0.ɵccf('algorithms', import3.Algorithms, View_Algorithms_Host_0, {}, {}, []);
