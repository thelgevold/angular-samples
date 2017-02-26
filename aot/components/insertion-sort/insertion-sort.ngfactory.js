import * as import0 from '@angular/core';
import * as import1 from '@angular/common';
import * as import2 from '../../../components/insertion-sort/insertion-sort';
var styles_InsertionSort = [];
export var RenderType_InsertionSort = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: styles_InsertionSort,
    data: { animation: [] }
});
function View_InsertionSort_1() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 5, 'td', [], null, null, null, null, null),
        import0.ɵdirectiveDef(4, null, 0, import1.NgClass, [
            import0.IterableDiffers,
            import0.KeyValueDiffers,
            import0.ElementRef,
            import0.Renderer
        ], { ngClass: [
                0,
                'ngClass'
            ]
        }, null),
        import0.ɵtextDef(null, ['\n            ']),
        import0.ɵelementDef(0, null, null, 1, 'span', [], null, null, null, null, null),
        import0.ɵtextDef(null, [
            '',
            ''
        ]),
        import0.ɵtextDef(null, ['\n        '])
    ], function (check, view) {
        var comp = view.component;
        var currVal_0 = view.context.$implicit.getClass();
        check(view, 1, 0, currVal_0);
    }, function (check, view) {
        var comp = view.component;
        var currVal_0 = view.context.$implicit.val;
        check(view, 4, 0, currVal_0);
    });
}
export function View_InsertionSort_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 8, 'table', [[
                'class',
                'sort'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵelementDef(0, null, null, 6, 'tbody', [], null, null, null, null, null),
        import0.ɵelementDef(0, null, null, 4, 'tr', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n        ']),
        import0.ɵanchorDef(256, null, null, 1, null, View_InsertionSort_1),
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
        import0.ɵtextDef(null, ['\n']),
        import0.ɵtextDef(null, ['\n']),
        import0.ɵelementDef(0, null, null, 4, 'div', [[
                'style',
                'margin-top: 10px;'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵelementDef(0, null, null, 1, 'button', [], null, [[
                null,
                'click'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                var pd_0 = (comp.sortList() !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            return allowDefault;
        }, null, null),
        import0.ɵtextDef(null, ['Sort list']),
        import0.ɵtextDef(null, ['\n'])
    ], function (check, view) {
        var comp = view.component;
        var currVal_0 = comp.list.items;
        check(view, 6, 0, currVal_0);
    }, null);
}
var RenderType_InsertionSort_Host = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: [],
    data: { animation: [] }
});
function View_InsertionSort_Host_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'insertion-sort', [], null, null, null, View_InsertionSort_0, RenderType_InsertionSort),
        import0.ɵdirectiveDef(1024, null, 0, import2.InsertionSort, [], null, null)
    ], null, null);
}
export var InsertionSortNgFactory = import0.ɵcreateComponentFactory('insertion-sort', import2.InsertionSort, View_InsertionSort_Host_0);
