import * as import0 from '@angular/core';
import * as import1 from '@angular/common';
import * as import2 from '../../../components/rxjs-buffering/rxjs-buffering';
var styles_RxJsBuffering = [];
export var RenderType_RxJsBuffering = import0.ɵcrt({
    encapsulation: 2,
    styles: styles_RxJsBuffering,
    data: {}
});
function View_RxJsBuffering_1(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [[
                'class',
                'box'
            ]
        ], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.add(v.context.$implicit) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ]))
    ], null, function (ck, v) {
        var currVal_0 = v.context.$implicit;
        ck(v, 1, 0, currVal_0);
    });
}
function View_RxJsBuffering_2(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [[
                'class',
                'sum'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            'SUM: ',
            ''
        ]))
    ], null, function (ck, v) {
        var co = v.component;
        var currVal_0 = co.calculation.sum;
        ck(v, 1, 0, currVal_0);
    });
}
export function View_RxJsBuffering_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'h3', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Click three numbers to add'])),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵand(8388608, null, null, 1, null, View_RxJsBuffering_1)),
        import0.ɵdid(401408, null, 0, import1.NgForOf, [
            import0.ViewContainerRef,
            import0.TemplateRef,
            import0.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵand(8388608, null, null, 1, null, View_RxJsBuffering_2)),
        import0.ɵdid(8192, null, 0, import1.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n  ']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_0 = co.numbers;
        ck(v, 5, 0, currVal_0);
        var currVal_1 = co.showSum;
        ck(v, 8, 0, currVal_1);
    }, null);
}
function View_RxJsBuffering_Host_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'ng-component', [], null, null, null, View_RxJsBuffering_0, RenderType_RxJsBuffering)),
        import0.ɵdid(57344, null, 0, import2.RxJsBuffering, [], null, null)
    ], function (ck, v) {
        ck(v, 1, 0);
    }, null);
}
export var RxJsBufferingNgFactory = import0.ɵccf('ng-component', import2.RxJsBuffering, View_RxJsBuffering_Host_0, {}, {}, []);
