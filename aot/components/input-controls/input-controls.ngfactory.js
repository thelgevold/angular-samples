import * as import0 from '@angular/core';
import * as import1 from '../../../components/input-controls/input-controls';
import * as import2 from '@angular/forms';
import * as import3 from '@angular/common';
var styles_InputControls = [];
export var RenderType_InputControls = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: styles_InputControls,
    data: { animation: [] }
});
function View_InputControls_1() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'li', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['Angular'])
    ], null, null);
}
function View_InputControls_2() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'li', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['JavaScript'])
    ], null, null);
}
function View_InputControls_3() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'li', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['C#'])
    ], null, null);
}
export function View_InputControls_0() {
    return import0.ɵviewDef(0, [
        import0.ɵtextDef(null, ['\n            ']),
        import0.ɵelementDef(0, null, null, 1, 'h1', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['Input Controls']),
        import0.ɵtextDef(null, ['\n            ']),
        import0.ɵelementDef(0, null, null, 14, 'div', [[
                'class',
                'input-controls'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n                ']),
        import0.ɵelementDef(0, null, null, 1, 'h4', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['"Two way bindings"']),
        import0.ɵtextDef(null, ['\n\n                ']),
        import0.ɵelementDef(0, null, null, 5, 'input', [[
                'id',
                'name'
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
                var pd_0 = (import0.ɵnodeValue(view, 10).onChange($event.target.value) !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            if (('blur' === eventName)) {
                var pd_1 = (import0.ɵnodeValue(view, 10).onTouched() !== false);
                allowDefault = (pd_1 && allowDefault);
            }
            if (('compositionstart' === eventName)) {
                var pd_2 = (import0.ɵnodeValue(view, 12).compositionStart() !== false);
                allowDefault = (pd_2 && allowDefault);
            }
            if (('compositionend' === eventName)) {
                var pd_3 = (import0.ɵnodeValue(view, 12).compositionEnd() !== false);
                allowDefault = (pd_3 && allowDefault);
            }
            if (('ngModelChange' === eventName)) {
                var pd_4 = ((comp.name = $event) !== false);
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
        import0.ɵtextDef(null, ['\n\n                ']),
        import0.ɵelementDef(0, null, null, 1, 'div', [], null, null, null, null, null),
        import0.ɵtextDef(null, [
            'Current Value: ',
            ''
        ]),
        import0.ɵtextDef(null, ['\n            ']),
        import0.ɵtextDef(null, ['\n\n            ']),
        import0.ɵelementDef(0, null, null, 26, 'div', [[
                'class',
                'input-controls'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n                ']),
        import0.ɵelementDef(0, null, null, 1, 'h4', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['Select a gender']),
        import0.ɵtextDef(null, ['\n                ']),
        import0.ɵelementDef(0, null, null, 6, 'div', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n                    ']),
        import0.ɵelementDef(0, null, null, 3, 'label', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n                        ']),
        import0.ɵelementDef(0, [[
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
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                var pd_0 = ((comp.gender = import0.ɵnodeValue(view, 29).value) !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            return allowDefault;
        }, null, null),
        import0.ɵtextDef(null, ['\n                        Male\n                    ']),
        import0.ɵtextDef(null, ['\n                ']),
        import0.ɵtextDef(null, ['\n                ']),
        import0.ɵelementDef(0, null, null, 6, 'div', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n                    ']),
        import0.ɵelementDef(0, null, null, 3, 'label', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n                        ']),
        import0.ɵelementDef(0, [[
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
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                var pd_0 = ((comp.gender = import0.ɵnodeValue(view, 37).value) !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            return allowDefault;
        }, null, null),
        import0.ɵtextDef(null, ['\n                        Female\n                    ']),
        import0.ɵtextDef(null, ['\n                ']),
        import0.ɵtextDef(null, ['\n                ']),
        import0.ɵelementDef(0, null, null, 4, 'div', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n                    Selected gender is ']),
        import0.ɵelementDef(0, null, null, 1, 'strong', [], null, null, null, null, null),
        import0.ɵtextDef(null, [
            '',
            ''
        ]),
        import0.ɵtextDef(null, ['\n                ']),
        import0.ɵtextDef(null, ['\n            ']),
        import0.ɵtextDef(null, ['\n\n            ']),
        import0.ɵelementDef(0, null, null, 28, 'div', [[
                'class',
                'input-controls'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n                ']),
        import0.ɵelementDef(0, null, null, 1, 'h4', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['Select your programming skills']),
        import0.ɵtextDef(null, ['\n                ']),
        import0.ɵelementDef(0, null, null, 6, 'div', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n                    ']),
        import0.ɵelementDef(0, null, null, 3, 'label', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n                        ']),
        import0.ɵelementDef(0, [[
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
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('change' === eventName)) {
                var pd_0 = ((comp.angular = import0.ɵnodeValue(view, 57).checked) !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            return allowDefault;
        }, null, null),
        import0.ɵtextDef(null, ['\n                        Angular\n                    ']),
        import0.ɵtextDef(null, ['\n                ']),
        import0.ɵtextDef(null, ['\n                ']),
        import0.ɵelementDef(0, null, null, 6, 'div', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n                    ']),
        import0.ɵelementDef(0, null, null, 3, 'label', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n                        ']),
        import0.ɵelementDef(0, [[
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
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('change' === eventName)) {
                var pd_0 = ((comp.javascript = import0.ɵnodeValue(view, 65).checked) !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            return allowDefault;
        }, null, null),
        import0.ɵtextDef(null, ['\n                        JavaScript\n                    ']),
        import0.ɵtextDef(null, ['\n                ']),
        import0.ɵtextDef(null, ['\n                ']),
        import0.ɵelementDef(0, null, null, 6, 'div', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n                    ']),
        import0.ɵelementDef(0, null, null, 3, 'label', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n                        ']),
        import0.ɵelementDef(0, [[
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
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('change' === eventName)) {
                var pd_0 = ((comp.csharp = import0.ɵnodeValue(view, 73).checked) !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            return allowDefault;
        }, null, null),
        import0.ɵtextDef(null, ['\n                        C#\n                    ']),
        import0.ɵtextDef(null, ['\n                ']),
        import0.ɵtextDef(null, ['\n            ']),
        import0.ɵtextDef(null, ['\n\n            ']),
        import0.ɵelementDef(0, null, null, 13, 'div', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n                Selected Skills:\n                ']),
        import0.ɵelementDef(0, null, null, 10, 'ul', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n                    ']),
        import0.ɵanchorDef(256, null, null, 1, null, View_InputControls_1),
        import0.ɵdirectiveDef(0, null, 0, import3.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        import0.ɵtextDef(null, ['\n                    ']),
        import0.ɵanchorDef(256, null, null, 1, null, View_InputControls_2),
        import0.ɵdirectiveDef(0, null, 0, import3.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        import0.ɵtextDef(null, ['\n                    ']),
        import0.ɵanchorDef(256, null, null, 1, null, View_InputControls_3),
        import0.ɵdirectiveDef(0, null, 0, import3.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        import0.ɵtextDef(null, ['\n                ']),
        import0.ɵtextDef(null, ['\n            ']),
        import0.ɵtextDef(null, ['\n\n            ']),
        import0.ɵelementDef(0, null, null, 2, 'h4', [], null, null, null, null, null),
        import0.ɵelementDef(0, null, null, 1, 'a', [[
                'href',
                'http://www.syntaxsuccess.com/viewarticle/input-controls-in-angular-2.0'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['Read more here'])
    ], function (check, view) {
        var comp = view.component;
        var currVal_0 = comp.name;
        check(view, 12, 0, currVal_0);
        var currVal_1 = comp.angular;
        check(view, 83, 0, currVal_1);
        var currVal_2 = comp.javascript;
        check(view, 86, 0, currVal_2);
        var currVal_3 = comp.csharp;
        check(view, 89, 0, currVal_3);
    }, function (check, view) {
        var comp = view.component;
        var currVal_0 = import0.ɵnodeValue(view, 14).ngClassUntouched;
        var currVal_1 = import0.ɵnodeValue(view, 14).ngClassTouched;
        var currVal_2 = import0.ɵnodeValue(view, 14).ngClassPristine;
        var currVal_3 = import0.ɵnodeValue(view, 14).ngClassDirty;
        var currVal_4 = import0.ɵnodeValue(view, 14).ngClassValid;
        var currVal_5 = import0.ɵnodeValue(view, 14).ngClassInvalid;
        var currVal_6 = import0.ɵnodeValue(view, 14).ngClassPending;
        check(view, 9, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
        var currVal_7 = comp.name;
        check(view, 17, 0, currVal_7);
        var currVal_8 = comp.gender;
        check(view, 44, 0, currVal_8);
    });
}
var RenderType_InputControls_Host = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: [],
    data: { animation: [] }
});
function View_InputControls_Host_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'input-controls', [], null, null, null, View_InputControls_0, RenderType_InputControls),
        import0.ɵdirectiveDef(1024, null, 0, import1.InputControls, [], null, null)
    ], null, null);
}
export var InputControlsNgFactory = import0.ɵcreateComponentFactory('input-controls', import1.InputControls, View_InputControls_Host_0);
