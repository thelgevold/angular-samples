import * as import0 from '@angular/core';
import * as import1 from '../../../components/address-form/address-form';
import * as import2 from '@angular/forms';
import * as import3 from '@angular/common';
var styles_AddressForm = [];
export var RenderType_AddressForm = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: styles_AddressForm,
    data: { animation: [] }
});
function View_AddressForm_1() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'div', [[
                'class',
                'errorMessage'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['First Name is required'])
    ], null, null);
}
function View_AddressForm_2() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'div', [[
                'class',
                'errorMessage'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['Street Address is required'])
    ], null, null);
}
function View_AddressForm_3() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'div', [[
                'class',
                'errorMessage'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['Zip code has to be 5 digits long'])
    ], null, null);
}
function View_AddressForm_4() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 2, 'div', [], null, null, null, null, null),
        import0.ɵelementDef(0, null, null, 1, 'strong', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['The form contains the following values'])
    ], null, null);
}
export function View_AddressForm_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'h1', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['Address Form']),
        import0.ɵtextDef(null, ['\n\n']),
        import0.ɵelementDef(0, null, null, 1, 'div', [
            [
                'class',
                'alert alert-info'
            ],
            [
                'role',
                'alert'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n    Error messages per field and disabled save button until entire form is valid.\n']),
        import0.ɵtextDef(null, ['\n\n']),
        import0.ɵelementDef(0, null, null, 83, 'form', [[
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
                var pd_0 = (import0.ɵnodeValue(view, 8).onSubmit($event) !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            if (('reset' === eventName)) {
                var pd_1 = (import0.ɵnodeValue(view, 8).onReset() !== false);
                allowDefault = (pd_1 && allowDefault);
            }
            if (('ngSubmit' === eventName)) {
                var pd_2 = (comp.onSubmit() !== false);
                allowDefault = (pd_2 && allowDefault);
            }
            return allowDefault;
        }, null, null),
        import0.ɵdirectiveDef(0, null, 0, import2.ɵbf, [], null, null),
        import0.ɵdirectiveDef(8, null, 0, import2.FormGroupDirective, [
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
        import0.ɵproviderDef(0, null, 3, import2.ControlContainer, null, [import2.FormGroupDirective]),
        import0.ɵdirectiveDef(0, null, 0, import2.NgControlStatusGroup, [import2.ControlContainer], null, null),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵelementDef(0, null, null, 14, 'div', [[
                'class',
                'form-row'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n        ']),
        import0.ɵelementDef(0, null, null, 1, 'div', [[
                'class',
                'formHeading'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['First Name']),
        import0.ɵtextDef(null, ['\n        ']),
        import0.ɵelementDef(0, null, null, 5, 'input', [
            [
                'formControlName',
                'firstName'
            ],
            [
                'id',
                'firstName'
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
                var pd_0 = (import0.ɵnodeValue(view, 18).onChange($event.target.value) !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            if (('blur' === eventName)) {
                var pd_1 = (import0.ɵnodeValue(view, 18).onTouched() !== false);
                allowDefault = (pd_1 && allowDefault);
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
        import0.ɵdirectiveDef(10, null, 0, import2.FormControlName, [
            [
                3,
                import2.ControlContainer
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
        ], { name: [
                0,
                'name'
            ]
        }, null),
        import0.ɵproviderDef(0, null, 3, import2.NgControl, null, [import2.FormControlName]),
        import0.ɵdirectiveDef(0, null, 0, import2.NgControlStatus, [import2.NgControl], null, null),
        import0.ɵtextDef(null, ['\n        ']),
        import0.ɵanchorDef(256, null, null, 1, null, View_AddressForm_1),
        import0.ɵdirectiveDef(0, null, 0, import3.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵtextDef(null, ['\n\n    ']),
        import0.ɵelementDef(0, null, null, 14, 'div', [[
                'class',
                'form-row'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n        ']),
        import0.ɵelementDef(0, null, null, 1, 'div', [[
                'class',
                'formHeading'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['Street Address']),
        import0.ɵtextDef(null, ['\n        ']),
        import0.ɵelementDef(0, null, null, 5, 'input', [
            [
                'formControlName',
                'streetAddress'
            ],
            [
                'id',
                'streetAddress'
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
                var pd_0 = (import0.ɵnodeValue(view, 34).onChange($event.target.value) !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            if (('blur' === eventName)) {
                var pd_1 = (import0.ɵnodeValue(view, 34).onTouched() !== false);
                allowDefault = (pd_1 && allowDefault);
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
        import0.ɵdirectiveDef(10, null, 0, import2.FormControlName, [
            [
                3,
                import2.ControlContainer
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
        ], { name: [
                0,
                'name'
            ]
        }, null),
        import0.ɵproviderDef(0, null, 3, import2.NgControl, null, [import2.FormControlName]),
        import0.ɵdirectiveDef(0, null, 0, import2.NgControlStatus, [import2.NgControl], null, null),
        import0.ɵtextDef(null, ['\n        ']),
        import0.ɵanchorDef(256, null, null, 1, null, View_AddressForm_2),
        import0.ɵdirectiveDef(0, null, 0, import3.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵtextDef(null, ['\n\n    ']),
        import0.ɵelementDef(0, null, null, 14, 'div', [[
                'class',
                'form-row'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n        ']),
        import0.ɵelementDef(0, null, null, 1, 'div', [[
                'class',
                'formHeading'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['Zip Code']),
        import0.ɵtextDef(null, ['\n        ']),
        import0.ɵelementDef(0, null, null, 5, 'input', [
            [
                'formControlName',
                'zip'
            ],
            [
                'id',
                'zip'
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
                var pd_0 = (import0.ɵnodeValue(view, 50).onChange($event.target.value) !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            if (('blur' === eventName)) {
                var pd_1 = (import0.ɵnodeValue(view, 50).onTouched() !== false);
                allowDefault = (pd_1 && allowDefault);
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
        import0.ɵdirectiveDef(10, null, 0, import2.FormControlName, [
            [
                3,
                import2.ControlContainer
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
        ], { name: [
                0,
                'name'
            ]
        }, null),
        import0.ɵproviderDef(0, null, 3, import2.NgControl, null, [import2.FormControlName]),
        import0.ɵdirectiveDef(0, null, 0, import2.NgControlStatus, [import2.NgControl], null, null),
        import0.ɵtextDef(null, ['\n        ']),
        import0.ɵanchorDef(256, null, null, 1, null, View_AddressForm_3),
        import0.ɵdirectiveDef(0, null, 0, import3.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵtextDef(null, ['\n\n    ']),
        import0.ɵelementDef(0, null, null, 22, 'div', [[
                'class',
                'form-row'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n        ']),
        import0.ɵelementDef(0, null, null, 1, 'div', [[
                'class',
                'formHeading'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['Address Type']),
        import0.ɵtextDef(null, ['\n        ']),
        import0.ɵelementDef(0, null, null, 16, 'select', [
            [
                'formControlName',
                'type'
            ],
            [
                'id',
                'type'
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
                var pd_0 = (import0.ɵnodeValue(view, 66).onChange($event.target.value) !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            if (('blur' === eventName)) {
                var pd_1 = (import0.ɵnodeValue(view, 66).onTouched() !== false);
                allowDefault = (pd_1 && allowDefault);
            }
            return allowDefault;
        }, null, null),
        import0.ɵdirectiveDef(0, null, 0, import2.SelectControlValueAccessor, [
            import0.Renderer,
            import0.ElementRef
        ], null, null),
        import0.ɵproviderDef(0, null, 2, import2.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [import2.SelectControlValueAccessor]),
        import0.ɵdirectiveDef(10, null, 0, import2.FormControlName, [
            [
                3,
                import2.ControlContainer
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
        ], { name: [
                0,
                'name'
            ]
        }, null),
        import0.ɵproviderDef(0, null, 3, import2.NgControl, null, [import2.FormControlName]),
        import0.ɵdirectiveDef(0, null, 0, import2.NgControlStatus, [import2.NgControl], null, null),
        import0.ɵtextDef(null, ['\n            ']),
        import0.ɵelementDef(0, null, null, 3, 'option', [], null, null, null, null, null),
        import0.ɵdirectiveDef(2, null, 0, import2.NgSelectOption, [
            import0.ElementRef,
            import0.Renderer,
            [
                2,
                import2.SelectControlValueAccessor
            ]
        ], { value: [
                0,
                'value'
            ]
        }, null),
        import0.ɵdirectiveDef(2, null, 0, import2.ɵq, [
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
        import0.ɵtextDef(null, ['Home Address']),
        import0.ɵtextDef(null, ['\n            ']),
        import0.ɵelementDef(0, null, null, 3, 'option', [], null, null, null, null, null),
        import0.ɵdirectiveDef(2, null, 0, import2.NgSelectOption, [
            import0.ElementRef,
            import0.Renderer,
            [
                2,
                import2.SelectControlValueAccessor
            ]
        ], { value: [
                0,
                'value'
            ]
        }, null),
        import0.ɵdirectiveDef(2, null, 0, import2.ɵq, [
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
        import0.ɵtextDef(null, ['Billing Address']),
        import0.ɵtextDef(null, ['\n        ']),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵelementDef(0, null, null, 4, 'div', [[
                'class',
                'form-row'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n        ']),
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
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵtextDef(null, ['\n\n']),
        import0.ɵtextDef(null, ['\n\n']),
        import0.ɵelementDef(0, null, null, 7, 'div', [[
                'class',
                'form-row'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵanchorDef(256, null, null, 1, null, View_AddressForm_4),
        import0.ɵdirectiveDef(0, null, 0, import3.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵelementDef(0, null, null, 1, 'div', [], null, null, null, null, null),
        import0.ɵtextDef(null, [
            '\n        ',
            '\n    '
        ]),
        import0.ɵtextDef(null, ['\n']),
        import0.ɵtextDef(null, ['\n\n']),
        import0.ɵelementDef(0, null, null, 2, 'h4', [], null, null, null, null, null),
        import0.ɵelementDef(0, null, null, 1, 'a', [[
                'href',
                'http://www.syntaxsuccess.com/viewarticle/forms-and-validation-in-angular-2.0'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['Read more here'])
    ], function (check, view) {
        var comp = view.component;
        var currVal_0 = comp.form;
        check(view, 8, 0, currVal_0);
        var currVal_1 = 'firstName';
        check(view, 20, 0, currVal_1);
        var currVal_2 = (comp.form.controls.firstName.touched && !comp.form.controls.firstName.valid);
        check(view, 25, 0, currVal_2);
        var currVal_3 = 'streetAddress';
        check(view, 36, 0, currVal_3);
        var currVal_4 = (comp.form.controls.streetAddress.touched && !comp.form.controls.streetAddress.valid);
        check(view, 41, 0, currVal_4);
        var currVal_5 = 'zip';
        check(view, 52, 0, currVal_5);
        var currVal_6 = (comp.form.controls.zip.touched && !comp.form.controls.zip.valid);
        check(view, 57, 0, currVal_6);
        var currVal_7 = 'type';
        check(view, 68, 0, currVal_7);
        var currVal_8 = 'home';
        check(view, 73, 0, currVal_8);
        var currVal_9 = 'home';
        check(view, 74, 0, currVal_9);
        var currVal_10 = 'billing';
        check(view, 78, 0, currVal_10);
        var currVal_11 = 'billing';
        check(view, 79, 0, currVal_11);
        var currVal_12 = comp.payLoad;
        check(view, 94, 0, currVal_12);
    }, function (check, view) {
        var comp = view.component;
        var currVal_0 = import0.ɵnodeValue(view, 10).ngClassUntouched;
        var currVal_1 = import0.ɵnodeValue(view, 10).ngClassTouched;
        var currVal_2 = import0.ɵnodeValue(view, 10).ngClassPristine;
        var currVal_3 = import0.ɵnodeValue(view, 10).ngClassDirty;
        var currVal_4 = import0.ɵnodeValue(view, 10).ngClassValid;
        var currVal_5 = import0.ɵnodeValue(view, 10).ngClassInvalid;
        var currVal_6 = import0.ɵnodeValue(view, 10).ngClassPending;
        check(view, 6, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
        var currVal_7 = import0.ɵnodeValue(view, 22).ngClassUntouched;
        var currVal_8 = import0.ɵnodeValue(view, 22).ngClassTouched;
        var currVal_9 = import0.ɵnodeValue(view, 22).ngClassPristine;
        var currVal_10 = import0.ɵnodeValue(view, 22).ngClassDirty;
        var currVal_11 = import0.ɵnodeValue(view, 22).ngClassValid;
        var currVal_12 = import0.ɵnodeValue(view, 22).ngClassInvalid;
        var currVal_13 = import0.ɵnodeValue(view, 22).ngClassPending;
        check(view, 17, 0, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13);
        var currVal_14 = import0.ɵnodeValue(view, 38).ngClassUntouched;
        var currVal_15 = import0.ɵnodeValue(view, 38).ngClassTouched;
        var currVal_16 = import0.ɵnodeValue(view, 38).ngClassPristine;
        var currVal_17 = import0.ɵnodeValue(view, 38).ngClassDirty;
        var currVal_18 = import0.ɵnodeValue(view, 38).ngClassValid;
        var currVal_19 = import0.ɵnodeValue(view, 38).ngClassInvalid;
        var currVal_20 = import0.ɵnodeValue(view, 38).ngClassPending;
        check(view, 33, 0, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20);
        var currVal_21 = import0.ɵnodeValue(view, 54).ngClassUntouched;
        var currVal_22 = import0.ɵnodeValue(view, 54).ngClassTouched;
        var currVal_23 = import0.ɵnodeValue(view, 54).ngClassPristine;
        var currVal_24 = import0.ɵnodeValue(view, 54).ngClassDirty;
        var currVal_25 = import0.ɵnodeValue(view, 54).ngClassValid;
        var currVal_26 = import0.ɵnodeValue(view, 54).ngClassInvalid;
        var currVal_27 = import0.ɵnodeValue(view, 54).ngClassPending;
        check(view, 49, 0, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27);
        var currVal_28 = import0.ɵnodeValue(view, 70).ngClassUntouched;
        var currVal_29 = import0.ɵnodeValue(view, 70).ngClassTouched;
        var currVal_30 = import0.ɵnodeValue(view, 70).ngClassPristine;
        var currVal_31 = import0.ɵnodeValue(view, 70).ngClassDirty;
        var currVal_32 = import0.ɵnodeValue(view, 70).ngClassValid;
        var currVal_33 = import0.ɵnodeValue(view, 70).ngClassInvalid;
        var currVal_34 = import0.ɵnodeValue(view, 70).ngClassPending;
        check(view, 65, 0, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34);
        var currVal_35 = !comp.form.valid;
        check(view, 86, 0, currVal_35);
        var currVal_36 = comp.payLoad;
        check(view, 97, 0, currVal_36);
    });
}
var RenderType_AddressForm_Host = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: [],
    data: { animation: [] }
});
function View_AddressForm_Host_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'address-form', [], null, null, null, View_AddressForm_0, RenderType_AddressForm),
        import0.ɵdirectiveDef(1024, null, 0, import1.AddressForm, [], null, null)
    ], null, null);
}
export var AddressFormNgFactory = import0.ɵcreateComponentFactory('address-form', import1.AddressForm, View_AddressForm_Host_0);
