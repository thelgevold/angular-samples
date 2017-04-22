import * as import0 from '@angular/core';
import * as import1 from '@angular/common';
import * as import2 from '../../../components/pub-sub/consumer';
import * as import3 from '../../../components/pub-sub/pub-sub-service';
var styles_Consumer = [];
export var RenderType_Consumer = import0.ɵcrt({
    encapsulation: 2,
    styles: styles_Consumer,
    data: {}
});
function View_Consumer_2(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 7, 'tr', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'td', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ])),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'td', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ])),
        (l()(), import0.ɵted(null, ['\n            ']))
    ], null, function (ck, v) {
        var currVal_0 = v.context.$implicit.firstName;
        ck(v, 3, 0, currVal_0);
        var currVal_1 = v.context.$implicit.lastName;
        ck(v, 6, 0, currVal_1);
    });
}
function View_Consumer_1(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 27, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'h4', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Processed Customers'])),
        (l()(), import0.ɵted(null, ['\n\n    '])),
        (l()(), import0.ɵeld(0, null, null, 18, 'table', [[
                'class',
                'table'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵeld(0, null, null, 9, 'thead', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵeld(0, null, null, 6, 'tr', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'td', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['First Name'])),
        (l()(), import0.ɵeld(0, null, null, 1, 'td', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Last Name'])),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵeld(0, null, null, 4, 'tbody', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵand(8388608, null, null, 1, null, View_Consumer_2)),
        import0.ɵdid(401408, null, 0, import1.NgForOf, [
            import0.ViewContainerRef,
            import0.TemplateRef,
            import0.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵted(null, ['\n\n    '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'button', [], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.stopProcessing() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import0.ɵted(null, ['Stop Processing'])),
        (l()(), import0.ɵted(null, ['\n']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_0 = co.processed;
        ck(v, 21, 0, currVal_0);
    }, null);
}
export function View_Consumer_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵand(8388608, null, null, 1, null, View_Consumer_1)),
        import0.ɵdid(8192, null, 0, import1.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null)
    ], function (ck, v) {
        var co = v.component;
        var currVal_0 = (co.processed.length > 0);
        ck(v, 1, 0, currVal_0);
    }, null);
}
function View_Consumer_Host_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'consumer', [], null, null, null, View_Consumer_0, RenderType_Consumer)),
        import0.ɵdid(57344, null, 0, import2.Consumer, [import3.PubSubService], null, null)
    ], function (ck, v) {
        ck(v, 1, 0);
    }, null);
}
export var ConsumerNgFactory = import0.ɵccf('consumer', import2.Consumer, View_Consumer_Host_0, {}, {}, []);
