import * as import0 from '@angular/core';
import * as import1 from '@angular/forms';
import * as import2 from '@angular/common';
import * as import3 from '../../../components/survey/survey';
var styles_Survey = [];
export var RenderType_Survey = import0.ɵcrt({
    encapsulation: 2,
    styles: styles_Survey,
    data: {}
});
function View_Survey_2(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 6, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵeld(0, null, null, 5, 'input', [], [
            [
                8,
                'type',
                0
            ],
            [
                8,
                'id',
                0
            ],
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
            if (('input' === en)) {
                var pd_0 = (import0.ɵnov(v, 2)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (import0.ɵnov(v, 2).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (import0.ɵnov(v, 2)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (import0.ɵnov(v, 2)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, null, null)),
        import0.ɵdid(16384, null, 0, import1.DefaultValueAccessor, [
            import0.Renderer,
            import0.ElementRef,
            [
                2,
                import1.COMPOSITION_BUFFER_MODE
            ]
        ], null, null),
        import0.ɵprd(1024, null, import1.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [import1.DefaultValueAccessor]),
        import0.ɵdid(671744, null, 0, import1.FormControlName, [
            [
                3,
                import1.ControlContainer
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
                import1.NG_VALUE_ACCESSOR
            ]
        ], { name: [
                0,
                'name'
            ]
        }, null),
        import0.ɵprd(2048, null, import1.NgControl, null, [import1.FormControlName]),
        import0.ɵdid(16384, null, 0, import1.NgControlStatus, [import1.NgControl], null, null)
    ], function (ck, v) {
        var currVal_9 = v.parent.context.$implicit.key;
        ck(v, 4, 0, currVal_9);
    }, function (ck, v) {
        var currVal_0 = import0.ɵinlineInterpolate(1, '', v.parent.context.$implicit.type, '');
        var currVal_1 = import0.ɵinlineInterpolate(1, '', v.parent.context.$implicit.key, '');
        var currVal_2 = import0.ɵnov(v, 6).ngClassUntouched;
        var currVal_3 = import0.ɵnov(v, 6).ngClassTouched;
        var currVal_4 = import0.ɵnov(v, 6).ngClassPristine;
        var currVal_5 = import0.ɵnov(v, 6).ngClassDirty;
        var currVal_6 = import0.ɵnov(v, 6).ngClassValid;
        var currVal_7 = import0.ɵnov(v, 6).ngClassInvalid;
        var currVal_8 = import0.ɵnov(v, 6).ngClassPending;
        ck(v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8);
    });
}
function View_Survey_4(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 3, 'option', [], null, null, null, null, null)),
        import0.ɵdid(147456, null, 0, import1.NgSelectOption, [
            import0.ElementRef,
            import0.Renderer,
            [
                2,
                import1.SelectControlValueAccessor
            ]
        ], { value: [
                0,
                'value'
            ]
        }, null),
        import0.ɵdid(147456, null, 0, import1.ɵq, [
            import0.ElementRef,
            import0.Renderer,
            [
                8,
                null
            ]
        ], { value: [
                0,
                'value'
            ]
        }, null),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ]))
    ], function (ck, v) {
        var currVal_0 = v.context.$implicit.key;
        ck(v, 1, 0, currVal_0);
        var currVal_1 = v.context.$implicit.key;
        ck(v, 2, 0, currVal_1);
    }, function (ck, v) {
        var currVal_2 = v.context.$implicit.value;
        ck(v, 3, 0, currVal_2);
    });
}
function View_Survey_3(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 12, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n                    '])),
        (l()(), import0.ɵeld(0, null, null, 9, 'select', [], [
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
                'change'
            ],
            [
                null,
                'blur'
            ]
        ], function (v, en, $event) {
            var ad = true;
            if (('change' === en)) {
                var pd_0 = (import0.ɵnov(v, 3).onChange($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (import0.ɵnov(v, 3).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, null, null)),
        import0.ɵdid(16384, null, 0, import1.SelectControlValueAccessor, [
            import0.Renderer,
            import0.ElementRef
        ], null, null),
        import0.ɵprd(1024, null, import1.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [import1.SelectControlValueAccessor]),
        import0.ɵdid(671744, null, 0, import1.FormControlName, [
            [
                3,
                import1.ControlContainer
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
                import1.NG_VALUE_ACCESSOR
            ]
        ], { name: [
                0,
                'name'
            ]
        }, null),
        import0.ɵprd(2048, null, import1.NgControl, null, [import1.FormControlName]),
        import0.ɵdid(16384, null, 0, import1.NgControlStatus, [import1.NgControl], null, null),
        (l()(), import0.ɵted(null, ['\n                        '])),
        (l()(), import0.ɵand(16777216, null, null, 1, null, View_Survey_4)),
        import0.ɵdid(802816, null, 0, import2.NgForOf, [
            import0.ViewContainerRef,
            import0.TemplateRef,
            import0.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n                    '])),
        (l()(), import0.ɵted(null, ['\n                ']))
    ], function (ck, v) {
        var currVal_7 = v.parent.context.$implicit.key;
        ck(v, 5, 0, currVal_7);
        var currVal_8 = v.parent.context.$implicit.options;
        ck(v, 10, 0, currVal_8);
    }, function (ck, v) {
        var currVal_0 = import0.ɵnov(v, 7).ngClassUntouched;
        var currVal_1 = import0.ɵnov(v, 7).ngClassTouched;
        var currVal_2 = import0.ɵnov(v, 7).ngClassPristine;
        var currVal_3 = import0.ɵnov(v, 7).ngClassDirty;
        var currVal_4 = import0.ɵnov(v, 7).ngClassValid;
        var currVal_5 = import0.ɵnov(v, 7).ngClassInvalid;
        var currVal_6 = import0.ɵnov(v, 7).ngClassPending;
        ck(v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
    });
}
function View_Survey_5(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [[
                'class',
                'errorMessage'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['*required']))
    ], null, null);
}
function View_Survey_1(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 17, 'div', [[
                'class',
                'form-row'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [[
                'class',
                'formHeading'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ])),
        (l()(), import0.ɵted(null, ['\n\n            '])),
        (l()(), import0.ɵeld(0, null, null, 8, 'div', [], null, null, null, null, null)),
        import0.ɵdid(16384, null, 0, import2.NgSwitch, [], { ngSwitch: [
                0,
                'ngSwitch'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵand(16777216, null, null, 1, null, View_Survey_2)),
        import0.ɵdid(278528, null, 0, import2.NgSwitchCase, [
            import0.ViewContainerRef,
            import0.TemplateRef,
            import2.NgSwitch
        ], { ngSwitchCase: [
                0,
                'ngSwitchCase'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵand(16777216, null, null, 1, null, View_Survey_3)),
        import0.ɵdid(278528, null, 0, import2.NgSwitchCase, [
            import0.ViewContainerRef,
            import0.TemplateRef,
            import2.NgSwitch
        ], { ngSwitchCase: [
                0,
                'ngSwitchCase'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵted(null, ['\n\n            '])),
        (l()(), import0.ɵand(16777216, null, null, 1, null, View_Survey_5)),
        import0.ɵdid(16384, null, 0, import2.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n        ']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_1 = v.context.$implicit.controlType;
        ck(v, 6, 0, currVal_1);
        var currVal_2 = 'textbox';
        ck(v, 9, 0, currVal_2);
        var currVal_3 = 'dropdown';
        ck(v, 12, 0, currVal_3);
        var currVal_4 = !co.form.controls[v.context.$implicit.key].valid;
        ck(v, 16, 0, currVal_4);
    }, function (ck, v) {
        var currVal_0 = v.context.$implicit.text;
        ck(v, 3, 0, currVal_0);
    });
}
function View_Survey_6(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 2, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵeld(0, null, null, 1, 'strong', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['The form contains the following values']))
    ], null, null);
}
export function View_Survey_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 30, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵeld(0, null, null, 14, 'form', [[
                'novalidate',
                ''
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
                'ngSubmit'
            ],
            [
                null,
                'submit'
            ],
            [
                null,
                'reset'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('submit' === en)) {
                var pd_0 = (import0.ɵnov(v, 4).onSubmit($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('reset' === en)) {
                var pd_1 = (import0.ɵnov(v, 4).onReset() !== false);
                ad = (pd_1 && ad);
            }
            if (('ngSubmit' === en)) {
                var pd_2 = (co.onSubmit() !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null)),
        import0.ɵdid(16384, null, 0, import1.ɵbf, [], null, null),
        import0.ɵdid(540672, null, 0, import1.FormGroupDirective, [
            [
                8,
                null
            ],
            [
                8,
                null
            ]
        ], { form: [
                0,
                'form'
            ]
        }, { ngSubmit: 'ngSubmit' }),
        import0.ɵprd(2048, null, import1.ControlContainer, null, [import1.FormGroupDirective]),
        import0.ɵdid(16384, null, 0, import1.NgControlStatusGroup, [import1.ControlContainer], null, null),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵand(16777216, null, null, 1, null, View_Survey_1)),
        import0.ɵdid(802816, null, 0, import2.NgForOf, [
            import0.ViewContainerRef,
            import0.TemplateRef,
            import0.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n\n        '])),
        (l()(), import0.ɵeld(0, null, null, 4, 'div', [[
                'class',
                'form-row'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'button', [[
                'type',
                'submit'
            ]
        ], [[
                8,
                'disabled',
                0
            ]
        ], null, null, null, null)),
        (l()(), import0.ɵted(null, ['Save'])),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵted(null, ['\n\n    '])),
        (l()(), import0.ɵeld(0, null, null, 7, 'div', [[
                'class',
                'form-row'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵand(16777216, null, null, 1, null, View_Survey_6)),
        import0.ɵdid(16384, null, 0, import2.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '\n            ',
            '\n        '
        ])),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵeld(0, null, null, 2, 'h4', [], null, null, null, null, null)),
        (l()(), import0.ɵeld(0, null, null, 1, 'a', [[
                'href',
                'http://www.syntaxsuccess.com/viewarticle/dynamic-form-in-angular-2.0'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Read more here'])),
        (l()(), import0.ɵted(null, ['\n']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_7 = co.form;
        ck(v, 4, 0, currVal_7);
        var currVal_8 = co.model.questions;
        ck(v, 9, 0, currVal_8);
        var currVal_10 = co.payLoad;
        ck(v, 21, 0, currVal_10);
    }, function (ck, v) {
        var co = v.component;
        var currVal_0 = import0.ɵnov(v, 6).ngClassUntouched;
        var currVal_1 = import0.ɵnov(v, 6).ngClassTouched;
        var currVal_2 = import0.ɵnov(v, 6).ngClassPristine;
        var currVal_3 = import0.ɵnov(v, 6).ngClassDirty;
        var currVal_4 = import0.ɵnov(v, 6).ngClassValid;
        var currVal_5 = import0.ɵnov(v, 6).ngClassInvalid;
        var currVal_6 = import0.ɵnov(v, 6).ngClassPending;
        ck(v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
        var currVal_9 = !co.form.valid;
        ck(v, 13, 0, currVal_9);
        var currVal_11 = co.payLoad;
        ck(v, 24, 0, currVal_11);
    });
}
function View_Survey_Host_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'survey', [], null, null, null, View_Survey_0, RenderType_Survey)),
        import0.ɵdid(114688, null, 0, import3.Survey, [], null, null)
    ], function (ck, v) {
        ck(v, 1, 0);
    }, null);
}
export var SurveyNgFactory = import0.ɵccf('survey', import3.Survey, View_Survey_Host_0, { model: 'model' }, {}, []);
