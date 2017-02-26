import * as import0 from '@angular/core';
import * as import1 from '@angular/forms';
import * as import2 from '@angular/common';
import * as import3 from '../../../components/survey/survey';
var styles_Survey = [];
export var RenderType_Survey = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: styles_Survey,
    data: { animation: [] }
});
function View_Survey_2() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 6, 'div', [], null, null, null, null, null),
        import0.ɵelementDef(0, null, null, 5, 'input', [], [
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
            ],
            [
                3,
                'type',
                0
            ],
            [
                3,
                'id',
                0
            ]
        ], [
            [
                null,
                'input'
            ],
            [
                null,
                'blur'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('input' === eventName)) {
                var pd_0 = (import0.ɵnodeValue(view, 2).onChange($event.target.value) !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            if (('blur' === eventName)) {
                var pd_1 = (import0.ɵnodeValue(view, 2).onTouched() !== false);
                allowDefault = (pd_1 && allowDefault);
            }
            return allowDefault;
        }, null, null),
        import0.ɵdirectiveDef(0, null, 0, import1.DefaultValueAccessor, [
            import0.Renderer,
            import0.ElementRef
        ], null, null),
        import0.ɵproviderDef(0, null, 2, import1.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [import1.DefaultValueAccessor]),
        import0.ɵdirectiveDef(10, null, 0, import1.FormControlName, [
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
        import0.ɵproviderDef(0, null, 3, import1.NgControl, null, [import1.FormControlName]),
        import0.ɵdirectiveDef(0, null, 0, import1.NgControlStatus, [import1.NgControl], null, null)
    ], function (check, view) {
        var comp = view.component;
        var currVal_0 = view.parent.context.$implicit.key;
        check(view, 4, 0, currVal_0);
    }, function (check, view) {
        var comp = view.component;
        var currVal_0 = import0.ɵnodeValue(view, 6).ngClassUntouched;
        var currVal_1 = import0.ɵnodeValue(view, 6).ngClassTouched;
        var currVal_2 = import0.ɵnodeValue(view, 6).ngClassPristine;
        var currVal_3 = import0.ɵnodeValue(view, 6).ngClassDirty;
        var currVal_4 = import0.ɵnodeValue(view, 6).ngClassValid;
        var currVal_5 = import0.ɵnodeValue(view, 6).ngClassInvalid;
        var currVal_6 = import0.ɵnodeValue(view, 6).ngClassPending;
        var currVal_7 = import0.ɵinlineInterpolate(1, '', view.parent.context.$implicit.type, '');
        var currVal_8 = import0.ɵinlineInterpolate(1, '', view.parent.context.$implicit.key, '');
        check(view, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8);
    });
}
function View_Survey_4() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 3, 'option', [], null, null, null, null, null),
        import0.ɵdirectiveDef(2, null, 0, import1.NgSelectOption, [
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
        import0.ɵdirectiveDef(2, null, 0, import1.ɵq, [
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
        import0.ɵtextDef(null, [
            '',
            ''
        ])
    ], function (check, view) {
        var comp = view.component;
        var currVal_0 = view.context.$implicit.key;
        check(view, 1, 0, currVal_0);
        var currVal_1 = view.context.$implicit.key;
        check(view, 2, 0, currVal_1);
    }, function (check, view) {
        var comp = view.component;
        var currVal_0 = view.context.$implicit.value;
        check(view, 3, 0, currVal_0);
    });
}
function View_Survey_3() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 12, 'div', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n                    ']),
        import0.ɵelementDef(0, null, null, 9, 'select', [], [
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
                'change'
            ],
            [
                null,
                'blur'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('change' === eventName)) {
                var pd_0 = (import0.ɵnodeValue(view, 3).onChange($event.target.value) !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            if (('blur' === eventName)) {
                var pd_1 = (import0.ɵnodeValue(view, 3).onTouched() !== false);
                allowDefault = (pd_1 && allowDefault);
            }
            return allowDefault;
        }, null, null),
        import0.ɵdirectiveDef(0, null, 0, import1.SelectControlValueAccessor, [
            import0.Renderer,
            import0.ElementRef
        ], null, null),
        import0.ɵproviderDef(0, null, 2, import1.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [import1.SelectControlValueAccessor]),
        import0.ɵdirectiveDef(10, null, 0, import1.FormControlName, [
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
        import0.ɵproviderDef(0, null, 3, import1.NgControl, null, [import1.FormControlName]),
        import0.ɵdirectiveDef(0, null, 0, import1.NgControlStatus, [import1.NgControl], null, null),
        import0.ɵtextDef(null, ['\n                        ']),
        import0.ɵanchorDef(256, null, null, 1, null, View_Survey_4),
        import0.ɵdirectiveDef(12, null, 0, import2.NgForOf, [
            import0.ViewContainerRef,
            import0.TemplateRef,
            import0.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        import0.ɵtextDef(null, ['\n                    ']),
        import0.ɵtextDef(null, ['\n                '])
    ], function (check, view) {
        var comp = view.component;
        var currVal_0 = view.parent.context.$implicit.key;
        check(view, 5, 0, currVal_0);
        var currVal_1 = view.parent.context.$implicit.options;
        check(view, 10, 0, currVal_1);
    }, function (check, view) {
        var comp = view.component;
        var currVal_0 = import0.ɵnodeValue(view, 7).ngClassUntouched;
        var currVal_1 = import0.ɵnodeValue(view, 7).ngClassTouched;
        var currVal_2 = import0.ɵnodeValue(view, 7).ngClassPristine;
        var currVal_3 = import0.ɵnodeValue(view, 7).ngClassDirty;
        var currVal_4 = import0.ɵnodeValue(view, 7).ngClassValid;
        var currVal_5 = import0.ɵnodeValue(view, 7).ngClassInvalid;
        var currVal_6 = import0.ɵnodeValue(view, 7).ngClassPending;
        check(view, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
    });
}
function View_Survey_5() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'div', [[
                'class',
                'errorMessage'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['*required'])
    ], null, null);
}
function View_Survey_1() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 17, 'div', [[
                'class',
                'form-row'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n            ']),
        import0.ɵelementDef(0, null, null, 1, 'div', [[
                'class',
                'formHeading'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, [
            '',
            ''
        ]),
        import0.ɵtextDef(null, ['\n\n            ']),
        import0.ɵelementDef(0, null, null, 8, 'div', [], null, null, null, null, null),
        import0.ɵdirectiveDef(0, null, 0, import2.NgSwitch, [], { ngSwitch: [
                0,
                'ngSwitch'
            ]
        }, null),
        import0.ɵtextDef(null, ['\n                ']),
        import0.ɵanchorDef(256, null, null, 1, null, View_Survey_2),
        import0.ɵdirectiveDef(4, null, 0, import2.NgSwitchCase, [
            import0.ViewContainerRef,
            import0.TemplateRef,
            import2.NgSwitch
        ], { ngSwitchCase: [
                0,
                'ngSwitchCase'
            ]
        }, null),
        import0.ɵtextDef(null, ['\n                ']),
        import0.ɵanchorDef(256, null, null, 1, null, View_Survey_3),
        import0.ɵdirectiveDef(4, null, 0, import2.NgSwitchCase, [
            import0.ViewContainerRef,
            import0.TemplateRef,
            import2.NgSwitch
        ], { ngSwitchCase: [
                0,
                'ngSwitchCase'
            ]
        }, null),
        import0.ɵtextDef(null, ['\n            ']),
        import0.ɵtextDef(null, ['\n\n            ']),
        import0.ɵanchorDef(256, null, null, 1, null, View_Survey_5),
        import0.ɵdirectiveDef(0, null, 0, import2.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        import0.ɵtextDef(null, ['\n        '])
    ], function (check, view) {
        var comp = view.component;
        var currVal_0 = view.context.$implicit.controlType;
        check(view, 6, 0, currVal_0);
        var currVal_1 = 'textbox';
        check(view, 9, 0, currVal_1);
        var currVal_2 = 'dropdown';
        check(view, 12, 0, currVal_2);
        var currVal_3 = !comp.form.controls[view.context.$implicit.key].valid;
        check(view, 16, 0, currVal_3);
    }, function (check, view) {
        var comp = view.component;
        var currVal_0 = view.context.$implicit.text;
        check(view, 3, 0, currVal_0);
    });
}
function View_Survey_6() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 2, 'div', [], null, null, null, null, null),
        import0.ɵelementDef(0, null, null, 1, 'strong', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['The form contains the following values'])
    ], null, null);
}
export function View_Survey_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 30, 'div', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵelementDef(0, null, null, 14, 'form', [[
                'novalidate',
                ''
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
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('submit' === eventName)) {
                var pd_0 = (import0.ɵnodeValue(view, 4).onSubmit($event) !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            if (('reset' === eventName)) {
                var pd_1 = (import0.ɵnodeValue(view, 4).onReset() !== false);
                allowDefault = (pd_1 && allowDefault);
            }
            if (('ngSubmit' === eventName)) {
                var pd_2 = (comp.onSubmit() !== false);
                allowDefault = (pd_2 && allowDefault);
            }
            return allowDefault;
        }, null, null),
        import0.ɵdirectiveDef(0, null, 0, import1.ɵbf, [], null, null),
        import0.ɵdirectiveDef(8, null, 0, import1.FormGroupDirective, [
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
        import0.ɵproviderDef(0, null, 3, import1.ControlContainer, null, [import1.FormGroupDirective]),
        import0.ɵdirectiveDef(0, null, 0, import1.NgControlStatusGroup, [import1.ControlContainer], null, null),
        import0.ɵtextDef(null, ['\n        ']),
        import0.ɵanchorDef(256, null, null, 1, null, View_Survey_1),
        import0.ɵdirectiveDef(12, null, 0, import2.NgForOf, [
            import0.ViewContainerRef,
            import0.TemplateRef,
            import0.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        import0.ɵtextDef(null, ['\n\n        ']),
        import0.ɵelementDef(0, null, null, 4, 'div', [[
                'class',
                'form-row'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n            ']),
        import0.ɵelementDef(0, null, null, 1, 'button', [[
                'type',
                'submit'
            ]
        ], [[
                3,
                'disabled',
                0
            ]
        ], null, null, null, null),
        import0.ɵtextDef(null, ['Save']),
        import0.ɵtextDef(null, ['\n        ']),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵtextDef(null, ['\n\n    ']),
        import0.ɵelementDef(0, null, null, 7, 'div', [[
                'class',
                'form-row'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n        ']),
        import0.ɵanchorDef(256, null, null, 1, null, View_Survey_6),
        import0.ɵdirectiveDef(0, null, 0, import2.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        import0.ɵtextDef(null, ['\n        ']),
        import0.ɵelementDef(0, null, null, 1, 'div', [], null, null, null, null, null),
        import0.ɵtextDef(null, [
            '\n            ',
            '\n        '
        ]),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵelementDef(0, null, null, 2, 'h4', [], null, null, null, null, null),
        import0.ɵelementDef(0, null, null, 1, 'a', [[
                'href',
                'http://www.syntaxsuccess.com/viewarticle/dynamic-form-in-angular-2.0'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['Read more here']),
        import0.ɵtextDef(null, ['\n'])
    ], function (check, view) {
        var comp = view.component;
        var currVal_0 = comp.form;
        check(view, 4, 0, currVal_0);
        var currVal_1 = comp.model.questions;
        check(view, 9, 0, currVal_1);
        var currVal_2 = comp.payLoad;
        check(view, 21, 0, currVal_2);
    }, function (check, view) {
        var comp = view.component;
        var currVal_0 = import0.ɵnodeValue(view, 6).ngClassUntouched;
        var currVal_1 = import0.ɵnodeValue(view, 6).ngClassTouched;
        var currVal_2 = import0.ɵnodeValue(view, 6).ngClassPristine;
        var currVal_3 = import0.ɵnodeValue(view, 6).ngClassDirty;
        var currVal_4 = import0.ɵnodeValue(view, 6).ngClassValid;
        var currVal_5 = import0.ɵnodeValue(view, 6).ngClassInvalid;
        var currVal_6 = import0.ɵnodeValue(view, 6).ngClassPending;
        check(view, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
        var currVal_7 = !comp.form.valid;
        check(view, 13, 0, currVal_7);
        var currVal_8 = comp.payLoad;
        check(view, 24, 0, currVal_8);
    });
}
var RenderType_Survey_Host = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: [],
    data: { animation: [] }
});
function View_Survey_Host_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'survey', [], null, null, null, View_Survey_0, RenderType_Survey),
        import0.ɵdirectiveDef(1025, null, 0, import3.Survey, [], null, null)
    ], function (check, view) {
        check(view, 1, 0);
    }, null);
}
export var SurveyNgFactory = import0.ɵcreateComponentFactory('survey', import3.Survey, View_Survey_Host_0);
