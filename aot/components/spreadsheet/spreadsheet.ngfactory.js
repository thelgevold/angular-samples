import * as import0 from '@angular/core';
import * as import1 from '@angular/common';
import * as import2 from '../../../components/spreadsheet/spreadsheet';
var styles_Spreadsheet = [];
export var RenderType_Spreadsheet = import0.ɵcrt({
    encapsulation: 2,
    styles: styles_Spreadsheet,
    data: {}
});
function View_Spreadsheet_1(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'td', [[
                'class',
                'columnHeader'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ]))
    ], null, function (ck, v) {
        var currVal_0 = v.context.$implicit;
        ck(v, 1, 0, currVal_0);
    });
}
function View_Spreadsheet_3(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 3, 'td', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵeld(0, null, null, 0, 'input', [], [
            [
                8,
                'id',
                0
            ],
            [
                8,
                'value',
                0
            ]
        ], [
            [
                null,
                'input'
            ],
            [
                null,
                'click'
            ],
            [
                null,
                'keyup'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('input' === en)) {
                var pd_0 = ((v.context.$implicit.cellValue = $event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('click' === en)) {
                var pd_1 = (co.model.selectColumn(v.context.$implicit) !== false);
                ad = (pd_1 && ad);
            }
            if (('keyup' === en)) {
                var pd_2 = (co.navigate($event) !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import0.ɵted(null, ['\n        ']))
    ], null, function (ck, v) {
        var currVal_0 = import0.ɵinlineInterpolate(2, '', v.context.$implicit.rowIndex, '-', v.context.$implicit.columnIndex, '');
        var currVal_1 = v.context.$implicit.cellValue;
        ck(v, 2, 0, currVal_0, currVal_1);
    });
}
function View_Spreadsheet_2(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 7, 'tr', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'td', [[
                'class',
                'row-number-column'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ])),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵand(8388608, null, null, 1, null, View_Spreadsheet_3)),
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
        var currVal_1 = v.context.$implicit.columns;
        ck(v, 6, 0, currVal_1);
    }, function (ck, v) {
        var currVal_0 = v.context.$implicit.rowIndex;
        ck(v, 3, 0, currVal_0);
    });
}
export function View_Spreadsheet_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'h1', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Virtualized Spreadsheet'])),
        (l()(), import0.ɵted(null, ['\n'])),
        (l()(), import0.ɵeld(0, null, null, 13, 'table', [[
                'id',
                'spreadsheet'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵeld(0, null, null, 11, 'tbody', [], null, null, null, null, null)),
        (l()(), import0.ɵeld(0, null, null, 6, 'tr', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵeld(0, null, null, 0, 'td', [[
                'class',
                'row-number-column'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵand(8388608, null, null, 1, null, View_Spreadsheet_1)),
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
        (l()(), import0.ɵand(8388608, null, null, 1, null, View_Spreadsheet_2)),
        import0.ɵdid(401408, null, 0, import1.NgForOf, [
            import0.ViewContainerRef,
            import0.TemplateRef,
            import0.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n'])),
        (l()(), import0.ɵted(null, ['\n'])),
        (l()(), import0.ɵeld(0, null, null, 2, 'h4', [], null, null, null, null, null)),
        (l()(), import0.ɵeld(0, null, null, 1, 'a', [[
                'href',
                'http://www.syntaxsuccess.com/viewarticle/virtualized-spreadsheet-component-in-angular-2.0'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Read more here']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_0 = co.header;
        ck(v, 11, 0, currVal_0);
        var currVal_1 = co.visibleRows;
        ck(v, 15, 0, currVal_1);
    }, null);
}
function View_Spreadsheet_Host_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'spreadsheet', [], null, null, null, View_Spreadsheet_0, RenderType_Spreadsheet)),
        import0.ɵdid(4218880, null, 0, import2.Spreadsheet, [], null, null)
    ], null, null);
}
export var SpreadsheetNgFactory = import0.ɵccf('spreadsheet', import2.Spreadsheet, View_Spreadsheet_Host_0, {
    rows: 'rows',
    columns: 'columns'
}, {}, []);
