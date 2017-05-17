import * as import0 from '@angular/core';
import * as import1 from '../../../components/log-tail/log-demo';
import * as import2 from '@angular/forms';
import * as import3 from '@angular/common';
import * as import4 from '../../../components/log-tail/store';
import * as import5 from '../../../components/log-tail/log-tail-service';
import * as import6 from '@angular/http';
var styles_LogDemo = [];
export var RenderType_LogDemo = import0.ɵcrt({
    encapsulation: 2,
    styles: styles_LogDemo,
    data: {}
});
function View_LogDemo_1(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 7, 'tr', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n                        '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'td', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ])),
        (l()(), import0.ɵted(null, ['\n                        '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'td', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ])),
        (l()(), import0.ɵted(null, ['\n                     ']))
    ], null, function (ck, v) {
        var currVal_0 = v.context.$implicit.text;
        ck(v, 3, 0, currVal_0);
        var currVal_1 = v.context.$implicit.severity;
        ck(v, 6, 0, currVal_1);
    });
}
export function View_LogDemo_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 44, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'h1', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Error log state managed using Redux'])),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'button', [[
                'style',
                'margin-bottom: 10px;'
            ]
        ], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.generateLogEntry() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import0.ɵted(null, ['Add new log entry'])),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵeld(0, null, null, 5, 'input', [
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
                2,
                'ng-untouched',
                null
            ],
            [
                2,
                'ng-touched',
                null
            ],
            [
                2,
                'ng-pristine',
                null
            ],
            [
                2,
                'ng-dirty',
                null
            ],
            [
                2,
                'ng-valid',
                null
            ],
            [
                2,
                'ng-invalid',
                null
            ],
            [
                2,
                'ng-pending',
                null
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
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('input' === en)) {
                var pd_0 = (import0.ɵnov(v, 9)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (import0.ɵnov(v, 9).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (import0.ɵnov(v, 9)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (import0.ɵnov(v, 9)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (('ngModelChange' === en)) {
                var pd_4 = ((co.msg = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)),
        import0.ɵdid(16384, null, 0, import2.DefaultValueAccessor, [
            import0.Renderer,
            import0.ElementRef,
            [
                2,
                import2.COMPOSITION_BUFFER_MODE
            ]
        ], null, null),
        import0.ɵprd(1024, null, import2.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [import2.DefaultValueAccessor]),
        import0.ɵdid(671744, null, 0, import2.NgModel, [
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
        import0.ɵprd(2048, null, import2.NgControl, null, [import2.NgModel]),
        import0.ɵdid(16384, null, 0, import2.NgControlStatus, [import2.NgControl], null, null),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵeld(0, null, null, 6, 'input', [
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
                2,
                'ng-untouched',
                null
            ],
            [
                2,
                'ng-touched',
                null
            ],
            [
                2,
                'ng-pristine',
                null
            ],
            [
                2,
                'ng-dirty',
                null
            ],
            [
                2,
                'ng-valid',
                null
            ],
            [
                2,
                'ng-invalid',
                null
            ],
            [
                2,
                'ng-pending',
                null
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
            ],
            [
                null,
                'change'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('input' === en)) {
                var pd_0 = (import0.ɵnov(v, 16)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (import0.ɵnov(v, 16).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (import0.ɵnov(v, 16)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (import0.ɵnov(v, 16)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (('change' === en)) {
                var pd_4 = (import0.ɵnov(v, 17).onChange($event.target.value) !== false);
                ad = (pd_4 && ad);
            }
            if (('input' === en)) {
                var pd_5 = (import0.ɵnov(v, 17).onChange($event.target.value) !== false);
                ad = (pd_5 && ad);
            }
            if (('blur' === en)) {
                var pd_6 = (import0.ɵnov(v, 17).onTouched() !== false);
                ad = (pd_6 && ad);
            }
            if (('ngModelChange' === en)) {
                var pd_7 = ((co.severity = $event) !== false);
                ad = (pd_7 && ad);
            }
            return ad;
        }, null, null)),
        import0.ɵdid(16384, null, 0, import2.DefaultValueAccessor, [
            import0.Renderer,
            import0.ElementRef,
            [
                2,
                import2.COMPOSITION_BUFFER_MODE
            ]
        ], null, null),
        import0.ɵdid(16384, null, 0, import2.ɵbc, [
            import0.Renderer,
            import0.ElementRef
        ], null, null),
        import0.ɵprd(1024, null, import2.NG_VALUE_ACCESSOR, function (p0_0, p1_0) {
            return [
                p0_0,
                p1_0
            ];
        }, [
            import2.DefaultValueAccessor,
            import2.ɵbc
        ]),
        import0.ɵdid(671744, null, 0, import2.NgModel, [
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
        import0.ɵprd(2048, null, import2.NgControl, null, [import2.NgModel]),
        import0.ɵdid(16384, null, 0, import2.NgControlStatus, [import2.NgControl], null, null),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵeld(0, null, null, 16, 'table', [[
                'class',
                'table'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n                     '])),
        (l()(), import0.ɵeld(0, null, null, 14, 'tbody', [], null, null, null, null, null)),
        (l()(), import0.ɵeld(0, null, null, 8, 'tr', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n                        '])),
        (l()(), import0.ɵeld(0, null, null, 2, 'td', [], null, null, null, null, null)),
        (l()(), import0.ɵeld(0, null, null, 1, 'strong', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Message'])),
        (l()(), import0.ɵeld(0, null, null, 2, 'td', [], null, null, null, null, null)),
        (l()(), import0.ɵeld(0, null, null, 1, 'strong', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Severity'])),
        (l()(), import0.ɵted(null, ['\n                     '])),
        (l()(), import0.ɵted(null, ['\n                     '])),
        (l()(), import0.ɵand(16777216, null, null, 2, null, View_LogDemo_1)),
        import0.ɵdid(802816, null, 0, import3.NgForOf, [
            import0.ViewContainerRef,
            import0.TemplateRef,
            import0.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        import0.ɵpid(131072, import3.AsyncPipe, [import0.ChangeDetectorRef]),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵeld(0, null, null, 2, 'h4', [], null, null, null, null, null)),
        (l()(), import0.ɵeld(0, null, null, 1, 'a', [[
                'href',
                'http://www.syntaxsuccess.com/viewarticle/redux-in-angular-2.0'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Read more here'])),
        (l()(), import0.ɵted(null, ['\n              ']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_7 = co.msg;
        ck(v, 11, 0, currVal_7);
        var currVal_15 = co.severity;
        ck(v, 19, 0, currVal_15);
        var currVal_16 = import0.ɵunv(v, 37, 0, import0.ɵnov(v, 38).transform(co.store.logEntries));
        ck(v, 37, 0, currVal_16);
    }, function (ck, v) {
        var currVal_0 = import0.ɵnov(v, 13).ngClassUntouched;
        var currVal_1 = import0.ɵnov(v, 13).ngClassTouched;
        var currVal_2 = import0.ɵnov(v, 13).ngClassPristine;
        var currVal_3 = import0.ɵnov(v, 13).ngClassDirty;
        var currVal_4 = import0.ɵnov(v, 13).ngClassValid;
        var currVal_5 = import0.ɵnov(v, 13).ngClassInvalid;
        var currVal_6 = import0.ɵnov(v, 13).ngClassPending;
        ck(v, 8, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
        var currVal_8 = import0.ɵnov(v, 21).ngClassUntouched;
        var currVal_9 = import0.ɵnov(v, 21).ngClassTouched;
        var currVal_10 = import0.ɵnov(v, 21).ngClassPristine;
        var currVal_11 = import0.ɵnov(v, 21).ngClassDirty;
        var currVal_12 = import0.ɵnov(v, 21).ngClassValid;
        var currVal_13 = import0.ɵnov(v, 21).ngClassInvalid;
        var currVal_14 = import0.ɵnov(v, 21).ngClassPending;
        ck(v, 15, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14);
    });
}
function View_LogDemo_Host_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 3, 'ng-component', [], null, null, null, View_LogDemo_0, RenderType_LogDemo)),
        import0.ɵprd(512, null, import4.Store, import4.Store, []),
        import0.ɵprd(512, null, import5.LogTailService, import5.LogTailService, [import6.Http]),
        import0.ɵdid(114688, null, 0, import1.LogDemo, [
            import4.Store,
            import5.LogTailService
        ], null, null)
    ], function (ck, v) {
        ck(v, 3, 0);
    }, null);
}
export var LogDemoNgFactory = import0.ɵccf('ng-component', import1.LogDemo, View_LogDemo_Host_0, {}, {}, []);
