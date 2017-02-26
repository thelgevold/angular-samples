import * as import0 from '@angular/core';
import * as import1 from '../../../components/pub-sub/producer';
import * as import2 from '@angular/forms';
import * as import3 from '../../../components/pub-sub/pub-sub-service';
var styles_Producer = [];
export var RenderType_Producer = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: styles_Producer,
    data: { animation: [] }
});
export function View_Producer_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'div', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['First Name']),
        import0.ɵtextDef(null, ['\n']),
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
                var pd_0 = (import0.ɵnodeValue(view, 4).onChange($event.target.value) !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            if (('blur' === eventName)) {
                var pd_1 = (import0.ɵnodeValue(view, 4).onTouched() !== false);
                allowDefault = (pd_1 && allowDefault);
            }
            if (('compositionstart' === eventName)) {
                var pd_2 = (import0.ɵnodeValue(view, 6).compositionStart() !== false);
                allowDefault = (pd_2 && allowDefault);
            }
            if (('compositionend' === eventName)) {
                var pd_3 = (import0.ɵnodeValue(view, 6).compositionEnd() !== false);
                allowDefault = (pd_3 && allowDefault);
            }
            if (('ngModelChange' === eventName)) {
                var pd_4 = ((comp.firstName = $event) !== false);
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
        import0.ɵtextDef(null, ['\n\n']),
        import0.ɵelementDef(0, null, null, 1, 'div', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['Last Name']),
        import0.ɵtextDef(null, ['\n']),
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
                var pd_0 = (import0.ɵnodeValue(view, 14).onChange($event.target.value) !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            if (('blur' === eventName)) {
                var pd_1 = (import0.ɵnodeValue(view, 14).onTouched() !== false);
                allowDefault = (pd_1 && allowDefault);
            }
            if (('compositionstart' === eventName)) {
                var pd_2 = (import0.ɵnodeValue(view, 16).compositionStart() !== false);
                allowDefault = (pd_2 && allowDefault);
            }
            if (('compositionend' === eventName)) {
                var pd_3 = (import0.ɵnodeValue(view, 16).compositionEnd() !== false);
                allowDefault = (pd_3 && allowDefault);
            }
            if (('ngModelChange' === eventName)) {
                var pd_4 = ((comp.lastName = $event) !== false);
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
        import0.ɵtextDef(null, ['\n\n']),
        import0.ɵelementDef(0, null, null, 4, 'div', [[
                'style',
                'margin-top: 10px;'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵelementDef(0, null, null, 1, 'button', [], null, [[
                null,
                'click'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                var pd_0 = (comp.createCustomer() !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            return allowDefault;
        }, null, null),
        import0.ɵtextDef(null, ['Create Customer']),
        import0.ɵtextDef(null, ['\n'])
    ], function (check, view) {
        var comp = view.component;
        var currVal_0 = comp.firstName;
        check(view, 6, 0, currVal_0);
        var currVal_1 = comp.lastName;
        check(view, 16, 0, currVal_1);
    }, function (check, view) {
        var comp = view.component;
        var currVal_0 = import0.ɵnodeValue(view, 8).ngClassUntouched;
        var currVal_1 = import0.ɵnodeValue(view, 8).ngClassTouched;
        var currVal_2 = import0.ɵnodeValue(view, 8).ngClassPristine;
        var currVal_3 = import0.ɵnodeValue(view, 8).ngClassDirty;
        var currVal_4 = import0.ɵnodeValue(view, 8).ngClassValid;
        var currVal_5 = import0.ɵnodeValue(view, 8).ngClassInvalid;
        var currVal_6 = import0.ɵnodeValue(view, 8).ngClassPending;
        check(view, 3, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
        var currVal_7 = import0.ɵnodeValue(view, 18).ngClassUntouched;
        var currVal_8 = import0.ɵnodeValue(view, 18).ngClassTouched;
        var currVal_9 = import0.ɵnodeValue(view, 18).ngClassPristine;
        var currVal_10 = import0.ɵnodeValue(view, 18).ngClassDirty;
        var currVal_11 = import0.ɵnodeValue(view, 18).ngClassValid;
        var currVal_12 = import0.ɵnodeValue(view, 18).ngClassInvalid;
        var currVal_13 = import0.ɵnodeValue(view, 18).ngClassPending;
        check(view, 13, 0, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13);
    });
}
var RenderType_Producer_Host = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: [],
    data: { animation: [] }
});
function View_Producer_Host_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'producer', [], null, null, null, View_Producer_0, RenderType_Producer),
        import0.ɵdirectiveDef(1024, null, 0, import1.Producer, [import3.PubSubService], null, null)
    ], null, null);
}
export var ProducerNgFactory = import0.ɵcreateComponentFactory('producer', import1.Producer, View_Producer_Host_0);
