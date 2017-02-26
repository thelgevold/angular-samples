import * as import0 from '@angular/core';
import * as import1 from '../../../components/input-output/input-output-demo';
import * as import2 from './input-output.ngfactory';
import * as import3 from '../../../components/input-output/input-output';
var styles_InputOutputDemo = [];
export var RenderType_InputOutputDemo = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: styles_InputOutputDemo,
    data: { animation: [] }
});
export function View_InputOutputDemo_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'button', [], null, [[
                null,
                'click'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                var pd_0 = (comp.update() !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            return allowDefault;
        }, null, null),
        import0.ɵtextDef(null, ['Update']),
        import0.ɵtextDef(null, ['\n              ']),
        import0.ɵelementDef(0, null, null, 2, 'input-output', [
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
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('stringChanged' === eventName)) {
                var pd_0 = (comp.myStringChanged($event) !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            return allowDefault;
        }, import2.View_InputOutput_0, import2.RenderType_InputOutput),
        import0.ɵdirectiveDef(1025, null, 0, import3.InputOutput, [
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
        import0.ɵtextDef(null, ['\n              '])
    ], function (check, view) {
        var comp = view.component;
        var currVal_0 = comp.count;
        var currVal_1 = 'another hard coded value';
        var currVal_2 = comp.runningTotal;
        var currVal_3 = comp.myTitle;
        var currVal_4 = comp.myString;
        check(view, 4, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4);
    }, null);
}
var RenderType_InputOutputDemo_Host = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: [],
    data: { animation: [] }
});
function View_InputOutputDemo_Host_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'ng-component', [], null, null, null, View_InputOutputDemo_0, RenderType_InputOutputDemo),
        import0.ɵdirectiveDef(1024, null, 0, import1.InputOutputDemo, [], null, null)
    ], null, null);
}
export var InputOutputDemoNgFactory = import0.ɵcreateComponentFactory('ng-component', import1.InputOutputDemo, View_InputOutputDemo_Host_0);
