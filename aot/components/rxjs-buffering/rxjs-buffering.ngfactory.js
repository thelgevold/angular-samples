import * as import0 from '@angular/core';
import * as import1 from '@angular/common';
import * as import2 from '../../../components/rxjs-buffering/rxjs-buffering';
var styles_RxJsBuffering = [];
export var RenderType_RxJsBuffering = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: styles_RxJsBuffering,
    data: { animation: [] }
});
function View_RxJsBuffering_1() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'div', [[
                'class',
                'box'
            ]
        ], null, [[
                null,
                'click'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                var pd_0 = (comp.add(view.context.$implicit) !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            return allowDefault;
        }, null, null),
        import0.ɵtextDef(null, [
            '',
            ''
        ])
    ], null, function (check, view) {
        var comp = view.component;
        var currVal_0 = view.context.$implicit;
        check(view, 1, 0, currVal_0);
    });
}
function View_RxJsBuffering_2() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'div', [[
                'class',
                'sum'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, [
            'SUM: ',
            ''
        ])
    ], null, function (check, view) {
        var comp = view.component;
        var currVal_0 = comp.calculation.sum;
        check(view, 1, 0, currVal_0);
    });
}
export function View_RxJsBuffering_0() {
    return import0.ɵviewDef(0, [
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵelementDef(0, null, null, 1, 'h3', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['Click three numbers to add']),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵanchorDef(256, null, null, 1, null, View_RxJsBuffering_1),
        import0.ɵdirectiveDef(12, null, 0, import1.NgForOf, [
            import0.ViewContainerRef,
            import0.TemplateRef,
            import0.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵanchorDef(256, null, null, 1, null, View_RxJsBuffering_2),
        import0.ɵdirectiveDef(0, null, 0, import1.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        import0.ɵtextDef(null, ['\n  '])
    ], function (check, view) {
        var comp = view.component;
        var currVal_0 = comp.numbers;
        check(view, 5, 0, currVal_0);
        var currVal_1 = comp.showSum;
        check(view, 8, 0, currVal_1);
    }, null);
}
var RenderType_RxJsBuffering_Host = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: [],
    data: { animation: [] }
});
function View_RxJsBuffering_Host_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'ng-component', [], null, null, null, View_RxJsBuffering_0, RenderType_RxJsBuffering),
        import0.ɵdirectiveDef(1025, null, 0, import2.RxJsBuffering, [], null, null)
    ], function (check, view) {
        check(view, 1, 0);
    }, null);
}
export var RxJsBufferingNgFactory = import0.ɵcreateComponentFactory('ng-component', import2.RxJsBuffering, View_RxJsBuffering_Host_0);
