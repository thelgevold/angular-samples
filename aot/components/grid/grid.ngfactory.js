import * as import0 from '@angular/core';
import * as import1 from '@angular/common';
import * as import2 from '../../../components/grid/grid';
var styles_Grid = [];
export var RenderType_Grid = import0.ɵcrt({
    encapsulation: 2,
    styles: styles_Grid,
    data: {}
});
function View_Grid_1(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 2, 'td', [], null, null, null, null, null)),
        (l()(), import0.ɵeld(0, null, null, 1, 'a', [], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.sort(v.context.$implicit.name) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ]))
    ], null, function (ck, v) {
        var currVal_0 = v.context.$implicit.descr;
        ck(v, 2, 0, currVal_0);
    });
}
function View_Grid_3(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'td', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ]))
    ], null, function (ck, v) {
        var currVal_0 = v.parent.context.$implicit[v.context.$implicit.name];
        ck(v, 1, 0, currVal_0);
    });
}
function View_Grid_2(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 4, 'tr', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵand(8388608, null, null, 1, null, View_Grid_3)),
        import0.ɵdid(401408, null, 0, import1.NgForOf, [
            import0.ViewContainerRef,
            import0.TemplateRef,
            import0.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n    ']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_0 = co.columns;
        ck(v, 3, 0, currVal_0);
    }, null);
}
export function View_Grid_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'h1', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Sortable Grid'])),
        (l()(), import0.ɵted(null, ['\n'])),
        (l()(), import0.ɵeld(0, null, null, 11, 'table', [[
                'class',
                'table table-striped'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵeld(0, null, null, 9, 'tbody', [], null, null, null, null, null)),
        (l()(), import0.ɵeld(0, null, null, 4, 'tr', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵand(8388608, null, null, 1, null, View_Grid_1)),
        import0.ɵdid(401408, null, 0, import1.NgForOf, [
            import0.ViewContainerRef,
            import0.TemplateRef,
            import0.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵand(8388608, null, null, 1, null, View_Grid_2)),
        import0.ɵdid(401408, null, 0, import1.NgForOf, [
            import0.ViewContainerRef,
            import0.TemplateRef,
            import0.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_0 = co.columns;
        ck(v, 9, 0, currVal_0);
        var currVal_1 = co.rows;
        ck(v, 13, 0, currVal_1);
    }, null);
}
function View_Grid_Host_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'grid', [], null, null, null, View_Grid_0, RenderType_Grid)),
        import0.ɵdid(57344, null, 0, import2.Grid, [], null, null)
    ], function (ck, v) {
        ck(v, 1, 0);
    }, null);
}
export var GridNgFactory = import0.ɵccf('grid', import2.Grid, View_Grid_Host_0, {
    columns: 'columns',
    rows: 'rows',
    name: 'name'
}, {}, []);
