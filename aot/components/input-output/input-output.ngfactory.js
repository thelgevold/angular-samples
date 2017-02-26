import * as import0 from '@angular/core';
import * as import1 from '../../../components/input-output/input-output';
var styles_InputOutput = [];
export var RenderType_InputOutput = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: styles_InputOutput,
    data: { animation: [] }
});
export function View_InputOutput_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'h1', [], null, null, null, null, null),
        import0.ɵtextDef(null, [
            '',
            ''
        ]),
        import0.ɵtextDef(null, ['\n              ']),
        import0.ɵelementDef(0, null, null, 1, 'div', [], null, null, null, null, null),
        import0.ɵtextDef(null, [
            'Counter: ',
            ''
        ]),
        import0.ɵtextDef(null, ['\n              ']),
        import0.ɵelementDef(0, null, null, 1, 'div', [], null, null, null, null, null),
        import0.ɵtextDef(null, [
            'Running total of counter values: ',
            ''
        ]),
        import0.ɵtextDef(null, ['\n              ']),
        import0.ɵelementDef(0, null, null, 1, 'div', [], null, null, null, null, null),
        import0.ɵtextDef(null, [
            'Growing string: ',
            ''
        ])
    ], null, function (check, view) {
        var comp = view.component;
        var currVal_0 = comp.headline;
        check(view, 1, 0, currVal_0);
        var currVal_1 = comp.counter;
        check(view, 4, 0, currVal_1);
        var currVal_2 = comp.sum;
        check(view, 7, 0, currVal_2);
        var currVal_3 = comp.growingString;
        check(view, 10, 0, currVal_3);
    });
}
var RenderType_InputOutput_Host = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: [],
    data: { animation: [] }
});
function View_InputOutput_Host_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'input-output', [], null, null, null, View_InputOutput_0, RenderType_InputOutput),
        import0.ɵdirectiveDef(1025, null, 0, import1.InputOutput, [
            import0.ElementRef,
            [
                8,
                null
            ]
        ], null, null)
    ], function (check, view) {
        check(view, 1, 0);
    }, null);
}
export var InputOutputNgFactory = import0.ɵcreateComponentFactory('input-output', import1.InputOutput, View_InputOutput_Host_0);
