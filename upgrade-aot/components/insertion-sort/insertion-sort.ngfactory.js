import * as import0 from '@angular/core';
import * as import1 from '@angular/common';
import * as import2 from '../../../components/insertion-sort/insertion-sort';
var styles_InsertionSort = [];
export var RenderType_InsertionSort = import0.ɵcrt({
    encapsulation: 2,
    styles: styles_InsertionSort,
    data: {}
});
function View_InsertionSort_1(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 5, 'td', [], null, null, null, null, null)),
        import0.ɵdid(139264, null, 0, import1.NgClass, [
            import0.IterableDiffers,
            import0.KeyValueDiffers,
            import0.ElementRef,
            import0.Renderer
        ], { ngClass: [
                0,
                'ngClass'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'span', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ])),
        (l()(), import0.ɵted(null, ['\n        ']))
    ], function (ck, v) {
        var currVal_0 = v.context.$implicit.getClass();
        ck(v, 1, 0, currVal_0);
    }, function (ck, v) {
        var currVal_1 = v.context.$implicit.val;
        ck(v, 4, 0, currVal_1);
    });
}
export function View_InsertionSort_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 8, 'table', [[
                'class',
                'sort'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵeld(0, null, null, 6, 'tbody', [], null, null, null, null, null)),
        (l()(), import0.ɵeld(0, null, null, 4, 'tr', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵand(8388608, null, null, 1, null, View_InsertionSort_1)),
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
        (l()(), import0.ɵted(null, ['\n'])),
        (l()(), import0.ɵted(null, ['\n'])),
        (l()(), import0.ɵeld(0, null, null, 4, 'div', [[
                'style',
                'margin-top: 10px;'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'button', [], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.sortList() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import0.ɵted(null, ['Sort list'])),
        (l()(), import0.ɵted(null, ['\n']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_0 = co.list.items;
        ck(v, 6, 0, currVal_0);
    }, null);
}
function View_InsertionSort_Host_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'insertion-sort', [], null, null, null, View_InsertionSort_0, RenderType_InsertionSort)),
        import0.ɵdid(24576, null, 0, import2.InsertionSort, [], null, null)
    ], null, null);
}
export var InsertionSortNgFactory = import0.ɵccf('insertion-sort', import2.InsertionSort, View_InsertionSort_Host_0, { list: 'list' }, {}, []);
