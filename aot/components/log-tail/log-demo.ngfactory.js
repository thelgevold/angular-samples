import * as import0 from '@angular/core';
import * as import1 from '../../../components/log-tail/log-demo';
import * as import2 from '@angular/forms';
import * as import3 from '@angular/common';
import * as import4 from '../../../components/log-tail/store';
import * as import5 from '../../../components/log-tail/log-tail-service';
import * as import6 from '@angular/http';
var styles_LogDemo = [];
export var RenderType_LogDemo = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: styles_LogDemo,
    data: { animation: [] }
});
function View_LogDemo_1() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 7, 'tr', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n                        ']),
        import0.ɵelementDef(0, null, null, 1, 'td', [], null, null, null, null, null),
        import0.ɵtextDef(null, [
            '',
            ''
        ]),
        import0.ɵtextDef(null, ['\n                        ']),
        import0.ɵelementDef(0, null, null, 1, 'td', [], null, null, null, null, null),
        import0.ɵtextDef(null, [
            '',
            ''
        ]),
        import0.ɵtextDef(null, ['\n                     '])
    ], null, function (check, view) {
        var comp = view.component;
        var currVal_0 = view.context.$implicit.text;
        check(view, 3, 0, currVal_0);
        var currVal_1 = view.context.$implicit.severity;
        check(view, 6, 0, currVal_1);
    });
}
export function View_LogDemo_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 44, 'div', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n                ']),
        import0.ɵelementDef(0, null, null, 1, 'h1', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['Error log state managed using Redux']),
        import0.ɵtextDef(null, ['\n                ']),
        import0.ɵelementDef(0, null, null, 1, 'button', [[
                'style',
                'margin-bottom: 10px;'
            ]
        ], null, [[
                null,
                'click'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                var pd_0 = (comp.generateLogEntry() !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            return allowDefault;
        }, null, null),
        import0.ɵtextDef(null, ['Add new log entry']),
        import0.ɵtextDef(null, ['\n                ']),
        import0.ɵelementDef(0, null, null, 5, 'input', [
            [
                'placeholder',
                'message'
            ],
            [
                'type',
                'text'
            ]
        ], [
            [
                1,
                'ng-untouched'
            ],
            [
                1,
                'ng-touched'
            ],
            [
                1,
                'ng-pristine'
            ],
            [
                1,
                'ng-dirty'
            ],
            [
                1,
                'ng-valid'
            ],
            [
                1,
                'ng-invalid'
            ],
            [
                1,
                'ng-pending'
            ]
        ], [
            [
                null,
                'ngModelChange'
            ],
            [
                null,
                'input'
            ],
            [
                null,
                'blur'
            ],
            [
                null,
                'compositionstart'
            ],
            [
                null,
                'compositionend'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('input' === eventName)) {
                var pd_0 = (import0.ɵnodeValue(view, 9).onChange($event.target.value) !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            if (('blur' === eventName)) {
                var pd_1 = (import0.ɵnodeValue(view, 9).onTouched() !== false);
                allowDefault = (pd_1 && allowDefault);
            }
            if (('compositionstart' === eventName)) {
                var pd_2 = (import0.ɵnodeValue(view, 11).compositionStart() !== false);
                allowDefault = (pd_2 && allowDefault);
            }
            if (('compositionend' === eventName)) {
                var pd_3 = (import0.ɵnodeValue(view, 11).compositionEnd() !== false);
                allowDefault = (pd_3 && allowDefault);
            }
            if (('ngModelChange' === eventName)) {
                var pd_4 = ((comp.msg = $event) !== false);
                allowDefault = (pd_4 && allowDefault);
            }
            return allowDefault;
        }, null, null),
        import0.ɵdirectiveDef(0, null, 0, import2.DefaultValueAccessor, [
            import0.Renderer,
            import0.ElementRef
        ], null, null),
        import0.ɵproviderDef(0, null, 2, import2.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [import2.DefaultValueAccessor]),
        import0.ɵdirectiveDef(10, null, 0, import2.NgModel, [
            [
                8,
                null
            ],
            [
                8,
                null
            ],
            [
                8,
                null
            ],
            [
                2,
                import2.NG_VALUE_ACCESSOR
            ]
        ], { model: [
                0,
                'model'
            ]
        }, { update: 'ngModelChange' }),
        import0.ɵproviderDef(0, null, 3, import2.NgControl, null, [import2.NgModel]),
        import0.ɵdirectiveDef(0, null, 0, import2.NgControlStatus, [import2.NgControl], null, null),
        import0.ɵtextDef(null, ['\n                ']),
        import0.ɵelementDef(0, null, null, 6, 'input', [
            [
                'placeholder',
                'severity'
            ],
            [
                'type',
                'number'
            ]
        ], [
            [
                1,
                'ng-untouched'
            ],
            [
                1,
                'ng-touched'
            ],
            [
                1,
                'ng-pristine'
            ],
            [
                1,
                'ng-dirty'
            ],
            [
                1,
                'ng-valid'
            ],
            [
                1,
                'ng-invalid'
            ],
            [
                1,
                'ng-pending'
            ]
        ], [
            [
                null,
                'ngModelChange'
            ],
            [
                null,
                'input'
            ],
            [
                null,
                'blur'
            ],
            [
                null,
                'change'
            ],
            [
                null,
                'compositionstart'
            ],
            [
                null,
                'compositionend'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('input' === eventName)) {
                var pd_0 = (import0.ɵnodeValue(view, 16).onChange($event.target.value) !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            if (('blur' === eventName)) {
                var pd_1 = (import0.ɵnodeValue(view, 16).onTouched() !== false);
                allowDefault = (pd_1 && allowDefault);
            }
            if (('change' === eventName)) {
                var pd_2 = (import0.ɵnodeValue(view, 17).onChange($event.target.value) !== false);
                allowDefault = (pd_2 && allowDefault);
            }
            if (('input' === eventName)) {
                var pd_3 = (import0.ɵnodeValue(view, 17).onChange($event.target.value) !== false);
                allowDefault = (pd_3 && allowDefault);
            }
            if (('blur' === eventName)) {
                var pd_4 = (import0.ɵnodeValue(view, 17).onTouched() !== false);
                allowDefault = (pd_4 && allowDefault);
            }
            if (('compositionstart' === eventName)) {
                var pd_5 = (import0.ɵnodeValue(view, 19).compositionStart() !== false);
                allowDefault = (pd_5 && allowDefault);
            }
            if (('compositionend' === eventName)) {
                var pd_6 = (import0.ɵnodeValue(view, 19).compositionEnd() !== false);
                allowDefault = (pd_6 && allowDefault);
            }
            if (('ngModelChange' === eventName)) {
                var pd_7 = ((comp.severity = $event) !== false);
                allowDefault = (pd_7 && allowDefault);
            }
            return allowDefault;
        }, null, null),
        import0.ɵdirectiveDef(0, null, 0, import2.DefaultValueAccessor, [
            import0.Renderer,
            import0.ElementRef
        ], null, null),
        import0.ɵdirectiveDef(0, null, 0, import2.ɵbc, [
            import0.Renderer,
            import0.ElementRef
        ], null, null),
        import0.ɵproviderDef(0, null, 2, import2.NG_VALUE_ACCESSOR, function (p0_0, p1_0) {
            return [
                p0_0,
                p1_0
            ];
        }, [
            import2.DefaultValueAccessor,
            import2.ɵbc
        ]),
        import0.ɵdirectiveDef(10, null, 0, import2.NgModel, [
            [
                8,
                null
            ],
            [
                8,
                null
            ],
            [
                8,
                null
            ],
            [
                2,
                import2.NG_VALUE_ACCESSOR
            ]
        ], { model: [
                0,
                'model'
            ]
        }, { update: 'ngModelChange' }),
        import0.ɵproviderDef(0, null, 3, import2.NgControl, null, [import2.NgModel]),
        import0.ɵdirectiveDef(0, null, 0, import2.NgControlStatus, [import2.NgControl], null, null),
        import0.ɵtextDef(null, ['\n                ']),
        import0.ɵelementDef(0, null, null, 16, 'table', [[
                'class',
                'table'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n                     ']),
        import0.ɵelementDef(0, null, null, 14, 'tbody', [], null, null, null, null, null),
        import0.ɵelementDef(0, null, null, 8, 'tr', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n                        ']),
        import0.ɵelementDef(0, null, null, 2, 'td', [], null, null, null, null, null),
        import0.ɵelementDef(0, null, null, 1, 'strong', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['Message']),
        import0.ɵelementDef(0, null, null, 2, 'td', [], null, null, null, null, null),
        import0.ɵelementDef(0, null, null, 1, 'strong', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['Severity']),
        import0.ɵtextDef(null, ['\n                     ']),
        import0.ɵtextDef(null, ['\n                     ']),
        import0.ɵanchorDef(256, null, null, 2, null, View_LogDemo_1),
        import0.ɵdirectiveDef(12, null, 0, import3.NgForOf, [
            import0.ViewContainerRef,
            import0.TemplateRef,
            import0.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        import0.ɵpipeDef(2, import3.AsyncPipe, [import0.ChangeDetectorRef]),
        import0.ɵtextDef(null, ['\n                ']),
        import0.ɵtextDef(null, ['\n                ']),
        import0.ɵelementDef(0, null, null, 2, 'h4', [], null, null, null, null, null),
        import0.ɵelementDef(0, null, null, 1, 'a', [[
                'href',
                'http://www.syntaxsuccess.com/viewarticle/redux-in-angular-2.0'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['Read more here']),
        import0.ɵtextDef(null, ['\n              '])
    ], function (check, view) {
        var comp = view.component;
        var currVal_0 = comp.msg;
        check(view, 11, 0, currVal_0);
        var currVal_1 = comp.severity;
        check(view, 19, 0, currVal_1);
        var currVal_2 = import0.ɵunwrapValue(import0.ɵnodeValue(view, 38).transform(comp.store.logEntries));
        check(view, 37, 0, currVal_2);
    }, function (check, view) {
        var comp = view.component;
        var currVal_0 = import0.ɵnodeValue(view, 13).ngClassUntouched;
        var currVal_1 = import0.ɵnodeValue(view, 13).ngClassTouched;
        var currVal_2 = import0.ɵnodeValue(view, 13).ngClassPristine;
        var currVal_3 = import0.ɵnodeValue(view, 13).ngClassDirty;
        var currVal_4 = import0.ɵnodeValue(view, 13).ngClassValid;
        var currVal_5 = import0.ɵnodeValue(view, 13).ngClassInvalid;
        var currVal_6 = import0.ɵnodeValue(view, 13).ngClassPending;
        check(view, 8, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
        var currVal_7 = import0.ɵnodeValue(view, 21).ngClassUntouched;
        var currVal_8 = import0.ɵnodeValue(view, 21).ngClassTouched;
        var currVal_9 = import0.ɵnodeValue(view, 21).ngClassPristine;
        var currVal_10 = import0.ɵnodeValue(view, 21).ngClassDirty;
        var currVal_11 = import0.ɵnodeValue(view, 21).ngClassValid;
        var currVal_12 = import0.ɵnodeValue(view, 21).ngClassInvalid;
        var currVal_13 = import0.ɵnodeValue(view, 21).ngClassPending;
        check(view, 15, 0, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13);
    });
}
var RenderType_LogDemo_Host = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: [],
    data: { animation: [] }
});
function View_LogDemo_Host_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 3, 'ng-component', [], null, null, null, View_LogDemo_0, RenderType_LogDemo),
        import0.ɵproviderDef(0, null, 1, import4.Store, import4.Store, []),
        import0.ɵproviderDef(0, null, 1, import5.LogTailService, import5.LogTailService, [import6.Http]),
        import0.ɵdirectiveDef(1025, null, 0, import1.LogDemo, [
            import4.Store,
            import5.LogTailService
        ], null, null)
    ], function (check, view) {
        check(view, 3, 0);
    }, null);
}
export var LogDemoNgFactory = import0.ɵcreateComponentFactory('ng-component', import1.LogDemo, View_LogDemo_Host_0);
