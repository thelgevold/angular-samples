import * as import0 from '@angular/core';
import * as import1 from '../../../components/change-detection/comment-section-1';
import * as import2 from '@angular/forms';
import * as import3 from '@angular/common';
var styles_CommentSection1 = [];
export var RenderType_CommentSection1 = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: styles_CommentSection1,
    data: { animation: [] }
});
function View_CommentSection1_1() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 7, 'tr', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n            ']),
        import0.ɵelementDef(0, null, null, 1, 'td', [], null, null, null, null, null),
        import0.ɵtextDef(null, [
            '',
            ''
        ]),
        import0.ɵtextDef(null, ['\n            ']),
        import0.ɵelementDef(0, null, null, 1, 'td', [], null, null, null, null, null),
        import0.ɵtextDef(null, [
            '',
            ''
        ]),
        import0.ɵtextDef(null, ['\n        '])
    ], null, function (check, view) {
        var comp = view.component;
        var currVal_0 = view.context.$implicit.author;
        check(view, 3, 0, currVal_0);
        var currVal_1 = view.context.$implicit.text;
        check(view, 6, 0, currVal_1);
    });
}
export function View_CommentSection1_0() {
    return import0.ɵviewDef(2, [
        import0.ɵelementDef(0, null, null, 47, 'div', [[
                'style',
                'border: 1px solid black;padding: 5px;'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n\n    ']),
        import0.ɵelementDef(0, null, null, 1, 'div', [[
                'class',
                'alert alert-info'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, [
            '\n        ',
            '\n    '
        ]),
        import0.ɵtextDef(null, ['\n\n    ']),
        import0.ɵelementDef(0, null, null, 2, 'div', [], null, null, null, null, null),
        import0.ɵelementDef(0, null, null, 1, 'strong', [], null, null, null, null, null),
        import0.ɵtextDef(null, [
            '',
            ''
        ]),
        import0.ɵtextDef(null, ['\n\n    ']),
        import0.ɵelementDef(0, null, null, 4, 'div', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n        ']),
        import0.ɵelementDef(0, null, null, 1, 'button', [], null, [[
                null,
                'click'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                var pd_0 = (comp.addComment() !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            return allowDefault;
        }, null, null),
        import0.ɵtextDef(null, ['Add Comment']),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵelementDef(0, null, null, 0, 'br', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n\n    ']),
        import0.ɵelementDef(0, null, null, 1, 'div', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['Author']),
        import0.ɵtextDef(null, ['\n    ']),
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
                var pd_0 = (import0.ɵnodeValue(view, 21).onChange($event.target.value) !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            if (('blur' === eventName)) {
                var pd_1 = (import0.ɵnodeValue(view, 21).onTouched() !== false);
                allowDefault = (pd_1 && allowDefault);
            }
            if (('compositionstart' === eventName)) {
                var pd_2 = (import0.ɵnodeValue(view, 23).compositionStart() !== false);
                allowDefault = (pd_2 && allowDefault);
            }
            if (('compositionend' === eventName)) {
                var pd_3 = (import0.ɵnodeValue(view, 23).compositionEnd() !== false);
                allowDefault = (pd_3 && allowDefault);
            }
            if (('ngModelChange' === eventName)) {
                var pd_4 = ((comp.author = $event) !== false);
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
        import0.ɵtextDef(null, ['\n\n    ']),
        import0.ɵelementDef(0, null, null, 1, 'div', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['Text']),
        import0.ɵtextDef(null, ['\n    ']),
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
                var pd_0 = (import0.ɵnodeValue(view, 31).onChange($event.target.value) !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            if (('blur' === eventName)) {
                var pd_1 = (import0.ɵnodeValue(view, 31).onTouched() !== false);
                allowDefault = (pd_1 && allowDefault);
            }
            if (('compositionstart' === eventName)) {
                var pd_2 = (import0.ɵnodeValue(view, 33).compositionStart() !== false);
                allowDefault = (pd_2 && allowDefault);
            }
            if (('compositionend' === eventName)) {
                var pd_3 = (import0.ɵnodeValue(view, 33).compositionEnd() !== false);
                allowDefault = (pd_3 && allowDefault);
            }
            if (('ngModelChange' === eventName)) {
                var pd_4 = ((comp.text = $event) !== false);
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
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵelementDef(0, null, null, 0, 'br', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵelementDef(0, null, null, 0, 'br', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵelementDef(0, null, null, 5, 'table', [[
                'class',
                'table'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n        ']),
        import0.ɵelementDef(0, null, null, 3, 'tbody', [], null, null, null, null, null),
        import0.ɵanchorDef(256, null, null, 1, null, View_CommentSection1_1),
        import0.ɵdirectiveDef(12, null, 0, import3.NgForOf, [
            import0.ViewContainerRef,
            import0.TemplateRef,
            import0.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵtextDef(null, ['\n\n']),
        import0.ɵtextDef(null, ['\n'])
    ], function (check, view) {
        var comp = view.component;
        var currVal_0 = comp.author;
        check(view, 23, 0, currVal_0);
        var currVal_1 = comp.text;
        check(view, 33, 0, currVal_1);
        var currVal_2 = comp.comments;
        check(view, 45, 0, currVal_2);
    }, function (check, view) {
        var comp = view.component;
        var currVal_0 = comp.message;
        check(view, 3, 0, currVal_0);
        var currVal_1 = comp.lastUpdated();
        check(view, 7, 0, currVal_1);
        var currVal_2 = import0.ɵnodeValue(view, 25).ngClassUntouched;
        var currVal_3 = import0.ɵnodeValue(view, 25).ngClassTouched;
        var currVal_4 = import0.ɵnodeValue(view, 25).ngClassPristine;
        var currVal_5 = import0.ɵnodeValue(view, 25).ngClassDirty;
        var currVal_6 = import0.ɵnodeValue(view, 25).ngClassValid;
        var currVal_7 = import0.ɵnodeValue(view, 25).ngClassInvalid;
        var currVal_8 = import0.ɵnodeValue(view, 25).ngClassPending;
        check(view, 20, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8);
        var currVal_9 = import0.ɵnodeValue(view, 35).ngClassUntouched;
        var currVal_10 = import0.ɵnodeValue(view, 35).ngClassTouched;
        var currVal_11 = import0.ɵnodeValue(view, 35).ngClassPristine;
        var currVal_12 = import0.ɵnodeValue(view, 35).ngClassDirty;
        var currVal_13 = import0.ɵnodeValue(view, 35).ngClassValid;
        var currVal_14 = import0.ɵnodeValue(view, 35).ngClassInvalid;
        var currVal_15 = import0.ɵnodeValue(view, 35).ngClassPending;
        check(view, 30, 0, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15);
    });
}
var RenderType_CommentSection1_Host = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: [],
    data: { animation: [] }
});
function View_CommentSection1_Host_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'comment-section-1', [], null, null, null, View_CommentSection1_0, RenderType_CommentSection1),
        import0.ɵdirectiveDef(1024, null, 0, import1.CommentSection1, [], null, null)
    ], null, null);
}
export var CommentSection1NgFactory = import0.ɵcreateComponentFactory('comment-section-1', import1.CommentSection1, View_CommentSection1_Host_0);
