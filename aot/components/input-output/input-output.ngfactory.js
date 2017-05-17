import * as import0 from '@angular/core';
import * as import1 from '../../../components/input-output/input-output';
var styles_InputOutput = [];
export var RenderType_InputOutput = import0.ɵcrt({
    encapsulation: 2,
    styles: styles_InputOutput,
    data: {}
});
export function View_InputOutput_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'h1', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ])),
        (l()(), import0.ɵted(null, ['\n              '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            'Counter: ',
            ''
        ])),
        (l()(), import0.ɵted(null, ['\n              '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            'Running total of counter values: ',
            ''
        ])),
        (l()(), import0.ɵted(null, ['\n              '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            'Growing string: ',
            ''
        ]))
    ], null, function (ck, v) {
        var co = v.component;
        var currVal_0 = co.headline;
        ck(v, 1, 0, currVal_0);
        var currVal_1 = co.counter;
        ck(v, 4, 0, currVal_1);
        var currVal_2 = co.sum;
        ck(v, 7, 0, currVal_2);
        var currVal_3 = co.growingString;
        ck(v, 10, 0, currVal_3);
    });
}
function View_InputOutput_Host_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'input-output', [], null, null, null, View_InputOutput_0, RenderType_InputOutput)),
        import0.ɵdid(114688, null, 0, import1.InputOutput, [
            import0.ElementRef,
            [
                8,
                null
            ]
        ], null, null)
    ], function (ck, v) {
        ck(v, 1, 0);
    }, null);
}
export var InputOutputNgFactory = import0.ɵccf('input-output', import1.InputOutput, View_InputOutput_Host_0, {
    counter: 'counter',
    fixedValue: 'fixedValue',
    sum: 'mySum',
    headline: 'headline',
    growingString: 'growingString'
}, { stringChanged: 'stringChanged' }, []);
