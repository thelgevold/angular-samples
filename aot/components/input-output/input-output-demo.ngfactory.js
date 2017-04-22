import * as import0 from '@angular/core';
import * as import1 from '../../../components/input-output/input-output-demo';
import * as import2 from './input-output.ngfactory';
import * as import3 from '../../../components/input-output/input-output';
var styles_InputOutputDemo = [];
export var RenderType_InputOutputDemo = import0.ɵcrt({
    encapsulation: 2,
    styles: styles_InputOutputDemo,
    data: {}
});
export function View_InputOutputDemo_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'button', [], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.update() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import0.ɵted(null, ['Update'])),
        (l()(), import0.ɵted(null, ['\n              '])),
        (l()(), import0.ɵeld(0, null, null, 2, 'input-output', [
            [
                'fixedValue',
                'another hard coded value'
            ],
            [
                'plain',
                'just a simple attribute'
            ]
        ], null, [[
                null,
                'stringChanged'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('stringChanged' === en)) {
                var pd_0 = (co.myStringChanged($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, import2.View_InputOutput_0, import2.RenderType_InputOutput)),
        import0.ɵdid(57344, null, 0, import3.InputOutput, [
            import0.ElementRef,
            [
                8,
                'just a simple attribute'
            ]
        ], {
            counter: [
                0,
                'counter'
            ],
            fixedValue: [
                1,
                'fixedValue'
            ],
            sum: [
                2,
                'sum'
            ],
            headline: [
                3,
                'headline'
            ],
            growingString: [
                4,
                'growingString'
            ]
        }, { stringChanged: 'stringChanged' }),
        (l()(), import0.ɵted(null, ['\n              ']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_0 = co.count;
        var currVal_1 = 'another hard coded value';
        var currVal_2 = co.runningTotal;
        var currVal_3 = co.myTitle;
        var currVal_4 = co.myString;
        ck(v, 4, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4);
    }, null);
}
function View_InputOutputDemo_Host_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'ng-component', [], null, null, null, View_InputOutputDemo_0, RenderType_InputOutputDemo)),
        import0.ɵdid(24576, null, 0, import1.InputOutputDemo, [], null, null)
    ], null, null);
}
export var InputOutputDemoNgFactory = import0.ɵccf('ng-component', import1.InputOutputDemo, View_InputOutputDemo_Host_0, {}, {}, []);
