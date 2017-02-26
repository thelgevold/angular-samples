import * as import0 from '@angular/core';
import * as import1 from '@angular/common';
import * as import2 from '../../../components/spreadsheet/spreadsheet';
var styles_Spreadsheet = [];
export var RenderType_Spreadsheet = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: styles_Spreadsheet,
    data: { animation: [] }
});
function View_Spreadsheet_1() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'td', [[
                'class',
                'columnHeader'
            ]
        ], null, null, null, null, null),
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
function View_Spreadsheet_3() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 3, 'td', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n            ']),
        import0.ɵelementDef(0, null, null, 0, 'input', [], [
            [
                3,
                'id',
                0
            ],
            [
                3,
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
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('input' === eventName)) {
                var pd_0 = ((view.context.$implicit.cellValue = $event.target.value) !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            if (('click' === eventName)) {
                var pd_1 = (comp.model.selectColumn(view.context.$implicit) !== false);
                allowDefault = (pd_1 && allowDefault);
            }
            if (('keyup' === eventName)) {
                var pd_2 = (comp.navigate($event) !== false);
                allowDefault = (pd_2 && allowDefault);
            }
            return allowDefault;
        }, null, null),
        import0.ɵtextDef(null, ['\n        '])
    ], null, function (check, view) {
        var comp = view.component;
        var currVal_0 = import0.ɵinlineInterpolate(2, '', view.context.$implicit.rowIndex, '-', view.context.$implicit.columnIndex, '');
        var currVal_1 = view.context.$implicit.cellValue;
        check(view, 2, 0, currVal_0, currVal_1);
    });
}
function View_Spreadsheet_2() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 7, 'tr', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n        ']),
        import0.ɵelementDef(0, null, null, 1, 'td', [[
                'class',
                'row-number-column'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, [
            '',
            ''
        ]),
        import0.ɵtextDef(null, ['\n        ']),
        import0.ɵanchorDef(256, null, null, 1, null, View_Spreadsheet_3),
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
        var currVal_0 = view.context.$implicit.columns;
        check(view, 6, 0, currVal_0);
    }, function (check, view) {
        var comp = view.component;
        var currVal_0 = view.context.$implicit.rowIndex;
        check(view, 3, 0, currVal_0);
    });
}
export function View_Spreadsheet_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'h1', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['Virtualized Spreadsheet']),
        import0.ɵtextDef(null, ['\n']),
        import0.ɵelementDef(0, null, null, 13, 'table', [[
                'id',
                'spreadsheet'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵelementDef(0, null, null, 11, 'tbody', [], null, null, null, null, null),
        import0.ɵelementDef(0, null, null, 6, 'tr', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n        ']),
        import0.ɵelementDef(0, null, null, 0, 'td', [[
                'class',
                'row-number-column'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n        ']),
        import0.ɵanchorDef(256, null, null, 1, null, View_Spreadsheet_1),
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
        import0.ɵanchorDef(256, null, null, 1, null, View_Spreadsheet_2),
        import0.ɵdirectiveDef(12, null, 0, import1.NgForOf, [
            import0.ViewContainerRef,
            import0.TemplateRef,
            import0.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        import0.ɵtextDef(null, ['\n']),
        import0.ɵtextDef(null, ['\n']),
        import0.ɵelementDef(0, null, null, 2, 'h4', [], null, null, null, null, null),
        import0.ɵelementDef(0, null, null, 1, 'a', [[
                'href',
                'http://www.syntaxsuccess.com/viewarticle/virtualized-spreadsheet-component-in-angular-2.0'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['Read more here'])
    ], function (check, view) {
        var comp = view.component;
        var currVal_0 = comp.header;
        check(view, 11, 0, currVal_0);
        var currVal_1 = comp.visibleRows;
        check(view, 15, 0, currVal_1);
    }, null);
}
var RenderType_Spreadsheet_Host = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: [],
    data: { animation: [] }
});
function View_Spreadsheet_Host_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'spreadsheet', [], null, null, null, View_Spreadsheet_0, RenderType_Spreadsheet),
        import0.ɵdirectiveDef(1152, null, 0, import2.Spreadsheet, [], null, null)
    ], null, null);
}
export var SpreadsheetNgFactory = import0.ɵcreateComponentFactory('spreadsheet', import2.Spreadsheet, View_Spreadsheet_Host_0);
