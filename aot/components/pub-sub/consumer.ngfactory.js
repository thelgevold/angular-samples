import * as import0 from '@angular/core';
import * as import1 from '@angular/common';
import * as import2 from '../../../components/pub-sub/consumer';
import * as import3 from '../../../components/pub-sub/pub-sub-service';
var styles_Consumer = [];
export var RenderType_Consumer = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: styles_Consumer,
    data: { animation: [] }
});
function View_Consumer_2() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 7, 'tr', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n                ']),
        import0.ɵelementDef(0, null, null, 1, 'td', [], null, null, null, null, null),
        import0.ɵtextDef(null, [
            '',
            ''
        ]),
        import0.ɵtextDef(null, ['\n                ']),
        import0.ɵelementDef(0, null, null, 1, 'td', [], null, null, null, null, null),
        import0.ɵtextDef(null, [
            '',
            ''
        ]),
        import0.ɵtextDef(null, ['\n            '])
    ], null, function (check, view) {
        var comp = view.component;
        var currVal_0 = view.context.$implicit.firstName;
        check(view, 3, 0, currVal_0);
        var currVal_1 = view.context.$implicit.lastName;
        check(view, 6, 0, currVal_1);
    });
}
function View_Consumer_1() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 27, 'div', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵelementDef(0, null, null, 1, 'h4', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['Processed Customers']),
        import0.ɵtextDef(null, ['\n\n    ']),
        import0.ɵelementDef(0, null, null, 18, 'table', [[
                'class',
                'table'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n        ']),
        import0.ɵelementDef(0, null, null, 9, 'thead', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n            ']),
        import0.ɵelementDef(0, null, null, 6, 'tr', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n                ']),
        import0.ɵelementDef(0, null, null, 1, 'td', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['First Name']),
        import0.ɵelementDef(0, null, null, 1, 'td', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['Last Name']),
        import0.ɵtextDef(null, ['\n            ']),
        import0.ɵtextDef(null, ['\n        ']),
        import0.ɵtextDef(null, ['\n        ']),
        import0.ɵelementDef(0, null, null, 4, 'tbody', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n            ']),
        import0.ɵanchorDef(256, null, null, 1, null, View_Consumer_2),
        import0.ɵdirectiveDef(12, null, 0, import1.NgForOf, [
            import0.ViewContainerRef,
            import0.TemplateRef,
            import0.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        import0.ɵtextDef(null, ['\n        ']),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵtextDef(null, ['\n\n    ']),
        import0.ɵelementDef(0, null, null, 1, 'button', [], null, [[
                null,
                'click'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                var pd_0 = (comp.stopProcessing() !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            return allowDefault;
        }, null, null),
        import0.ɵtextDef(null, ['Stop Processing']),
        import0.ɵtextDef(null, ['\n'])
    ], function (check, view) {
        var comp = view.component;
        var currVal_0 = comp.processed;
        check(view, 21, 0, currVal_0);
    }, null);
}
export function View_Consumer_0() {
    return import0.ɵviewDef(0, [
        import0.ɵanchorDef(256, null, null, 1, null, View_Consumer_1),
        import0.ɵdirectiveDef(0, null, 0, import1.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null)
    ], function (check, view) {
        var comp = view.component;
        var currVal_0 = (comp.processed.length > 0);
        check(view, 1, 0, currVal_0);
    }, null);
}
var RenderType_Consumer_Host = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: [],
    data: { animation: [] }
});
function View_Consumer_Host_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'consumer', [], null, null, null, View_Consumer_0, RenderType_Consumer),
        import0.ɵdirectiveDef(1025, null, 0, import2.Consumer, [import3.PubSubService], null, null)
    ], function (check, view) {
        check(view, 1, 0);
    }, null);
}
export var ConsumerNgFactory = import0.ɵcreateComponentFactory('consumer', import2.Consumer, View_Consumer_Host_0);
