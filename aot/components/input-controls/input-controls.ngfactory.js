import * as import0 from '@angular/core';
import * as import1 from '../../../components/input-controls/input-controls';
import * as import2 from '@angular/forms';
import * as import3 from '@angular/common';
var styles_InputControls = [];
export var RenderType_InputControls = import0.ɵcrt({
    encapsulation: 2,
    styles: styles_InputControls,
    data: {}
});
function View_InputControls_1(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'li', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Angular']))
    ], null, null);
}
function View_InputControls_2(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'li', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['JavaScript']))
    ], null, null);
}
function View_InputControls_3(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'li', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['C#']))
    ], null, null);
}
export function View_InputControls_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'h1', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Input Controls'])),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵeld(0, null, null, 14, 'div', [[
                'class',
                'input-controls'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'h4', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['"Two way bindings"'])),
        (l()(), import0.ɵted(null, ['\n\n                '])),
        (l()(), import0.ɵeld(0, null, null, 5, 'input', [[
                'id',
                'name'
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
                var pd_0 = (import0.ɵnov(v, 10)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (import0.ɵnov(v, 10).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (import0.ɵnov(v, 10)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (import0.ɵnov(v, 10)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (('ngModelChange' === en)) {
                var pd_4 = ((co.name = $event) !== false);
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
        (l()(), import0.ɵted(null, ['\n\n                '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            'Current Value: ',
            ''
        ])),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵted(null, ['\n\n            '])),
        (l()(), import0.ɵeld(0, null, null, 26, 'div', [[
                'class',
                'input-controls'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'h4', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Select a gender'])),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵeld(0, null, null, 6, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n                    '])),
        (l()(), import0.ɵeld(0, null, null, 3, 'label', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n                        '])),
        (l()(), import0.ɵeld(0, [[
                'male',
                1
            ]
        ], null, 0, 'input', [
            [
                'name',
                'gender'
            ],
            [
                'type',
                'radio'
            ],
            [
                'value',
                'Male'
            ]
        ], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = ((co.gender = import0.ɵnov(v, 29).value) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import0.ɵted(null, ['\n                        Male\n                    '])),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵeld(0, null, null, 6, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n                    '])),
        (l()(), import0.ɵeld(0, null, null, 3, 'label', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n                        '])),
        (l()(), import0.ɵeld(0, [[
                'female',
                1
            ]
        ], null, 0, 'input', [
            [
                'name',
                'gender'
            ],
            [
                'type',
                'radio'
            ],
            [
                'value',
                'Female'
            ]
        ], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = ((co.gender = import0.ɵnov(v, 37).value) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import0.ɵted(null, ['\n                        Female\n                    '])),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵeld(0, null, null, 4, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n                    Selected gender is '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'strong', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ])),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵted(null, ['\n\n            '])),
        (l()(), import0.ɵeld(0, null, null, 28, 'div', [[
                'class',
                'input-controls'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'h4', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Select your programming skills'])),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵeld(0, null, null, 6, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n                    '])),
        (l()(), import0.ɵeld(0, null, null, 3, 'label', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n                        '])),
        (l()(), import0.ɵeld(0, [[
                'angularcb',
                1
            ]
        ], null, 0, 'input', [[
                'type',
                'checkbox'
            ]
        ], null, [[
                null,
                'change'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('change' === en)) {
                var pd_0 = ((co.angular = import0.ɵnov(v, 57).checked) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import0.ɵted(null, ['\n                        Angular\n                    '])),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵeld(0, null, null, 6, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n                    '])),
        (l()(), import0.ɵeld(0, null, null, 3, 'label', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n                        '])),
        (l()(), import0.ɵeld(0, [[
                'javascriptcb',
                1
            ]
        ], null, 0, 'input', [[
                'type',
                'checkbox'
            ]
        ], null, [[
                null,
                'change'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('change' === en)) {
                var pd_0 = ((co.javascript = import0.ɵnov(v, 65).checked) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import0.ɵted(null, ['\n                        JavaScript\n                    '])),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵeld(0, null, null, 6, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n                    '])),
        (l()(), import0.ɵeld(0, null, null, 3, 'label', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n                        '])),
        (l()(), import0.ɵeld(0, [[
                'csharpcb',
                1
            ]
        ], null, 0, 'input', [[
                'type',
                'checkbox'
            ]
        ], null, [[
                null,
                'change'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('change' === en)) {
                var pd_0 = ((co.csharp = import0.ɵnov(v, 73).checked) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import0.ɵted(null, ['\n                        C#\n                    '])),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵted(null, ['\n\n            '])),
        (l()(), import0.ɵeld(0, null, null, 13, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n                Selected Skills:\n                '])),
        (l()(), import0.ɵeld(0, null, null, 10, 'ul', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n                    '])),
        (l()(), import0.ɵand(16777216, null, null, 1, null, View_InputControls_1)),
        import0.ɵdid(16384, null, 0, import3.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n                    '])),
        (l()(), import0.ɵand(16777216, null, null, 1, null, View_InputControls_2)),
        import0.ɵdid(16384, null, 0, import3.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n                    '])),
        (l()(), import0.ɵand(16777216, null, null, 1, null, View_InputControls_3)),
        import0.ɵdid(16384, null, 0, import3.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵted(null, ['\n\n            '])),
        (l()(), import0.ɵeld(0, null, null, 2, 'h4', [], null, null, null, null, null)),
        (l()(), import0.ɵeld(0, null, null, 1, 'a', [[
                'href',
                'http://www.syntaxsuccess.com/viewarticle/input-controls-in-angular-2.0'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Read more here']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_7 = co.name;
        ck(v, 12, 0, currVal_7);
        var currVal_10 = co.angular;
        ck(v, 83, 0, currVal_10);
        var currVal_11 = co.javascript;
        ck(v, 86, 0, currVal_11);
        var currVal_12 = co.csharp;
        ck(v, 89, 0, currVal_12);
    }, function (ck, v) {
        var co = v.component;
        var currVal_0 = import0.ɵnov(v, 14).ngClassUntouched;
        var currVal_1 = import0.ɵnov(v, 14).ngClassTouched;
        var currVal_2 = import0.ɵnov(v, 14).ngClassPristine;
        var currVal_3 = import0.ɵnov(v, 14).ngClassDirty;
        var currVal_4 = import0.ɵnov(v, 14).ngClassValid;
        var currVal_5 = import0.ɵnov(v, 14).ngClassInvalid;
        var currVal_6 = import0.ɵnov(v, 14).ngClassPending;
        ck(v, 9, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
        var currVal_8 = co.name;
        ck(v, 17, 0, currVal_8);
        var currVal_9 = co.gender;
        ck(v, 44, 0, currVal_9);
    });
}
function View_InputControls_Host_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'input-controls', [], null, null, null, View_InputControls_0, RenderType_InputControls)),
        import0.ɵdid(49152, null, 0, import1.InputControls, [], null, null)
    ], null, null);
}
export var InputControlsNgFactory = import0.ɵccf('input-controls', import1.InputControls, View_InputControls_Host_0, {}, {}, []);
