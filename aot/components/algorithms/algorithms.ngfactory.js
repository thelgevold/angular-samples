import * as import0 from '@angular/core';
import * as import1 from '../insertion-sort/insertion-sort.ngfactory';
import * as import2 from '../../../components/insertion-sort/insertion-sort';
import * as import3 from '../../../components/algorithms/algorithms';
var styles_Algorithms = [];
export var RenderType_Algorithms = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: styles_Algorithms,
    data: { animation: [] }
});
export function View_Algorithms_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'h1', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['Insertion Sort Demo']),
        import0.ɵtextDef(null, ['\n']),
        import0.ɵelementDef(0, null, null, 1, 'div', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['Watch the list get sorted as the algorithm traverses the list']),
        import0.ɵtextDef(null, ['\n']),
        import0.ɵelementDef(0, null, null, 1, 'insertion-sort', [], null, null, null, import1.View_InsertionSort_0, import1.RenderType_InsertionSort),
        import0.ɵdirectiveDef(1024, null, 0, import2.InsertionSort, [], null, null),
        import0.ɵtextDef(null, ['\n']),
        import0.ɵelementDef(0, null, null, 2, 'h4', [], null, null, null, null, null),
        import0.ɵelementDef(0, null, null, 1, 'a', [[
                'href',
                'http://www.syntaxsuccess.com/viewarticle/timeouts-and-timerwrapper-in-angular-2.0'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['Read more here'])
    ], null, null);
}
var RenderType_Algorithms_Host = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: [],
    data: { animation: [] }
});
function View_Algorithms_Host_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'algorithms', [], null, null, null, View_Algorithms_0, RenderType_Algorithms),
        import0.ɵdirectiveDef(1024, null, 0, import3.Algorithms, [], null, null)
    ], null, null);
}
export var AlgorithmsNgFactory = import0.ɵcreateComponentFactory('algorithms', import3.Algorithms, View_Algorithms_Host_0);
