import * as import0 from '@angular/core';
import * as import1 from '@angular/common';
import * as import2 from '../../../components/grid/grid';
var styles_Grid = [];
export var RenderType_Grid = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: styles_Grid,
    data: { animation: [] }
});
function View_Grid_1() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 2, 'td', [], null, null, null, null, null),
        import0.ɵelementDef(0, null, null, 1, 'a', [], null, [[
                null,
                'click'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                var pd_0 = (comp.sort(view.context.$implicit.name) !== false);
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
        var currVal_0 = view.context.$implicit.descr;
        check(view, 2, 0, currVal_0);
    });
}
function View_Grid_3() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'td', [], null, null, null, null, null),
        import0.ɵtextDef(null, [
            '',
            ''
        ])
    ], null, function (check, view) {
        var comp = view.component;
        var currVal_0 = view.parent.context.$implicit[view.context.$implicit.name];
        check(view, 1, 0, currVal_0);
    });
}
function View_Grid_2() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 4, 'tr', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n        ']),
        import0.ɵanchorDef(256, null, null, 1, null, View_Grid_3),
        import0.ɵdirectiveDef(12, null, 0, import1.NgForOf, [
            import0.ViewContainerRef,
            import0.TemplateRef,
            import0.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        import0.ɵtextDef(null, ['\n    '])
    ], function (check, view) {
        var comp = view.component;
        var currVal_0 = comp.columns;
        check(view, 3, 0, currVal_0);
    }, null);
}
export function View_Grid_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'h1', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['Sortable Grid']),
        import0.ɵtextDef(null, ['\n']),
        import0.ɵelementDef(0, null, null, 11, 'table', [[
                'class',
                'table table-striped'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵelementDef(0, null, null, 9, 'tbody', [], null, null, null, null, null),
        import0.ɵelementDef(0, null, null, 4, 'tr', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n        ']),
        import0.ɵanchorDef(256, null, null, 1, null, View_Grid_1),
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
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵanchorDef(256, null, null, 1, null, View_Grid_2),
        import0.ɵdirectiveDef(12, null, 0, import1.NgForOf, [
            import0.ViewContainerRef,
            import0.TemplateRef,
            import0.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        import0.ɵtextDef(null, ['\n'])
    ], function (check, view) {
        var comp = view.component;
        var currVal_0 = comp.columns;
        check(view, 9, 0, currVal_0);
        var currVal_1 = comp.rows;
        check(view, 13, 0, currVal_1);
    }, null);
}
var RenderType_Grid_Host = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: [],
    data: { animation: [] }
});
function View_Grid_Host_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'grid', [], null, null, null, View_Grid_0, RenderType_Grid),
        import0.ɵdirectiveDef(1025, null, 0, import2.Grid, [], null, null)
    ], function (check, view) {
        check(view, 1, 0);
    }, null);
}
export var GridNgFactory = import0.ɵcreateComponentFactory('grid', import2.Grid, View_Grid_Host_0);
