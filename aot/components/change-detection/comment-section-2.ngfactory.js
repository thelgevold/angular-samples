import * as import0 from '@angular/core';
import * as import1 from '../../../components/change-detection/comment-section-2';
import * as import2 from '@angular/forms';
import * as import3 from '@angular/common';
var styles_CommentSection2 = [];
export var RenderType_CommentSection2 = import0.ɵcrt({
    encapsulation: 2,
    styles: styles_CommentSection2,
    data: {}
});
function View_CommentSection2_1(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 7, 'tr', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'td', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ])),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'td', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ])),
        (l()(), import0.ɵted(null, ['\n        ']))
    ], null, function (ck, v) {
        var currVal_0 = v.context.$implicit.author;
        ck(v, 3, 0, currVal_0);
        var currVal_1 = v.context.$implicit.text;
        ck(v, 6, 0, currVal_1);
    });
}
export function View_CommentSection2_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 47, 'div', [[
                'style',
                'border: 1px solid black;padding: 5px;'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n\n    '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [[
                'class',
                'alert alert-info'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '\n        ',
            '\n    '
        ])),
        (l()(), import0.ɵted(null, ['\n\n    '])),
        (l()(), import0.ɵeld(0, null, null, 2, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵeld(0, null, null, 1, 'strong', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ])),
        (l()(), import0.ɵted(null, ['\n\n    '])),
        (l()(), import0.ɵeld(0, null, null, 4, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'button', [], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.addComment() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import0.ɵted(null, ['Add Comment'])),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵeld(0, null, null, 0, 'br', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n\n    '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Author'])),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵeld(0, null, null, 5, 'input', [], [
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
                var pd_0 = (import0.ɵnov(v, 21)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (import0.ɵnov(v, 21).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (import0.ɵnov(v, 21)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (import0.ɵnov(v, 21)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (('ngModelChange' === en)) {
                var pd_4 = ((co.author = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)),
        import0.ɵdid(8192, null, 0, import2.DefaultValueAccessor, [
            import0.Renderer,
            import0.ElementRef,
            [
                2,
                import2.COMPOSITION_BUFFER_MODE
            ]
        ], null, null),
        import0.ɵprd(512, null, import2.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [import2.DefaultValueAccessor]),
        import0.ɵdid(335872, null, 0, import2.NgModel, [
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
        import0.ɵprd(1024, null, import2.NgControl, null, [import2.NgModel]),
        import0.ɵdid(8192, null, 0, import2.NgControlStatus, [import2.NgControl], null, null),
        (l()(), import0.ɵted(null, ['\n\n    '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Text'])),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵeld(0, null, null, 5, 'input', [], [
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
                var pd_0 = (import0.ɵnov(v, 31)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (import0.ɵnov(v, 31).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (import0.ɵnov(v, 31)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (import0.ɵnov(v, 31)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (('ngModelChange' === en)) {
                var pd_4 = ((co.text = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)),
        import0.ɵdid(8192, null, 0, import2.DefaultValueAccessor, [
            import0.Renderer,
            import0.ElementRef,
            [
                2,
                import2.COMPOSITION_BUFFER_MODE
            ]
        ], null, null),
        import0.ɵprd(512, null, import2.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [import2.DefaultValueAccessor]),
        import0.ɵdid(335872, null, 0, import2.NgModel, [
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
        import0.ɵprd(1024, null, import2.NgControl, null, [import2.NgModel]),
        import0.ɵdid(8192, null, 0, import2.NgControlStatus, [import2.NgControl], null, null),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵeld(0, null, null, 0, 'br', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵeld(0, null, null, 0, 'br', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵeld(0, null, null, 5, 'table', [[
                'class',
                'table'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵeld(0, null, null, 3, 'tbody', [], null, null, null, null, null)),
        (l()(), import0.ɵand(8388608, null, null, 1, null, View_CommentSection2_1)),
        import0.ɵdid(401408, null, 0, import3.NgForOf, [
            import0.ViewContainerRef,
            import0.TemplateRef,
            import0.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵted(null, ['\n\n'])),
        (l()(), import0.ɵted(null, ['\n']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_9 = co.author;
        ck(v, 23, 0, currVal_9);
        var currVal_17 = co.text;
        ck(v, 33, 0, currVal_17);
        var currVal_18 = co.comments;
        ck(v, 45, 0, currVal_18);
    }, function (ck, v) {
        var co = v.component;
        var currVal_0 = co.message;
        ck(v, 3, 0, currVal_0);
        var currVal_1 = co.lastUpdated();
        ck(v, 7, 0, currVal_1);
        var currVal_2 = import0.ɵnov(v, 25).ngClassUntouched;
        var currVal_3 = import0.ɵnov(v, 25).ngClassTouched;
        var currVal_4 = import0.ɵnov(v, 25).ngClassPristine;
        var currVal_5 = import0.ɵnov(v, 25).ngClassDirty;
        var currVal_6 = import0.ɵnov(v, 25).ngClassValid;
        var currVal_7 = import0.ɵnov(v, 25).ngClassInvalid;
        var currVal_8 = import0.ɵnov(v, 25).ngClassPending;
        ck(v, 20, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8);
        var currVal_10 = import0.ɵnov(v, 35).ngClassUntouched;
        var currVal_11 = import0.ɵnov(v, 35).ngClassTouched;
        var currVal_12 = import0.ɵnov(v, 35).ngClassPristine;
        var currVal_13 = import0.ɵnov(v, 35).ngClassDirty;
        var currVal_14 = import0.ɵnov(v, 35).ngClassValid;
        var currVal_15 = import0.ɵnov(v, 35).ngClassInvalid;
        var currVal_16 = import0.ɵnov(v, 35).ngClassPending;
        ck(v, 30, 0, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16);
    });
}
function View_CommentSection2_Host_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'comment-section-2', [], null, null, null, View_CommentSection2_0, RenderType_CommentSection2)),
        import0.ɵdid(24576, null, 0, import1.CommentSection2, [], null, null)
    ], null, null);
}
export var CommentSection2NgFactory = import0.ɵccf('comment-section-2', import1.CommentSection2, View_CommentSection2_Host_0, {}, {}, []);
