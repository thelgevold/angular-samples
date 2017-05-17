import * as import0 from '@angular/core';
import * as import1 from '@angular/common';
import * as import2 from '../../../components/rxjs-streams/rxjs-streams';
var styles_RxJsStreams = [];
export var RenderType_RxJsStreams = import0.ɵcrt({
    encapsulation: 2,
    styles: styles_RxJsStreams,
    data: {}
});
function View_RxJsStreams_1(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 6, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵeld(0, null, null, 3, 'div', [[
                'class',
                'floatLeft'
            ]
        ], null, null, null, null, null)),
        import0.ɵdid(278528, null, 0, import1.NgClass, [
            import0.IterableDiffers,
            import0.KeyValueDiffers,
            import0.ElementRef,
            import0.Renderer
        ], {
            klass: [
                0,
                'klass'
            ],
            ngClass: [
                1,
                'ngClass'
            ]
        }, null),
        import0.ɵpod([
            'stream1',
            'stream2'
        ]),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ])),
        (l()(), import0.ɵted(null, ['\n  ']))
    ], function (ck, v) {
        var currVal_0 = 'floatLeft';
        var currVal_1 = ck(v, 4, 0, (v.context.$implicit.source === 1), (v.context.$implicit.source === 2));
        ck(v, 3, 0, currVal_0, currVal_1);
    }, function (ck, v) {
        var currVal_2 = v.context.$implicit.value;
        ck(v, 5, 0, currVal_2);
    });
}
function View_RxJsStreams_2(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 6, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵeld(0, null, null, 3, 'div', [[
                'class',
                'floatLeft'
            ]
        ], null, null, null, null, null)),
        import0.ɵdid(278528, null, 0, import1.NgClass, [
            import0.IterableDiffers,
            import0.KeyValueDiffers,
            import0.ElementRef,
            import0.Renderer
        ], {
            klass: [
                0,
                'klass'
            ],
            ngClass: [
                1,
                'ngClass'
            ]
        }, null),
        import0.ɵpod([
            'stream1',
            'stream2'
        ]),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ])),
        (l()(), import0.ɵted(null, ['\n  ']))
    ], function (ck, v) {
        var currVal_0 = 'floatLeft';
        var currVal_1 = ck(v, 4, 0, (v.context.$implicit.source === 1), (v.context.$implicit.source === 2));
        ck(v, 3, 0, currVal_0, currVal_1);
    }, function (ck, v) {
        var currVal_2 = v.context.$implicit.value;
        ck(v, 5, 0, currVal_2);
    });
}
function View_RxJsStreams_3(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 6, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵeld(0, null, null, 3, 'div', [], null, null, null, null, null)),
        import0.ɵdid(278528, null, 0, import1.NgClass, [
            import0.IterableDiffers,
            import0.KeyValueDiffers,
            import0.ElementRef,
            import0.Renderer
        ], { ngClass: [
                0,
                'ngClass'
            ]
        }, null),
        import0.ɵpod([
            'stream1',
            'stream2'
        ]),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ])),
        (l()(), import0.ɵted(null, ['\n  ']))
    ], function (ck, v) {
        var currVal_0 = ck(v, 4, 0, (v.context.$implicit.source === 1), (v.context.$implicit.source === 2));
        ck(v, 3, 0, currVal_0);
    }, function (ck, v) {
        var currVal_1 = v.context.$implicit.value;
        ck(v, 5, 0, currVal_1);
    });
}
export function View_RxJsStreams_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [[
                'class',
                'stream1'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Stream1'])),
        (l()(), import0.ɵted(null, ['\n'])),
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [[
                'class',
                'stream2'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Stream2'])),
        (l()(), import0.ɵted(null, ['\n'])),
        (l()(), import0.ɵeld(0, null, null, 0, 'br', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n'])),
        (l()(), import0.ɵeld(0, null, null, 1, 'button', [], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.mergeStreams() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import0.ɵted(null, ['Merge Streams'])),
        (l()(), import0.ɵted(null, ['\n'])),
        (l()(), import0.ɵeld(0, null, null, 1, 'button', [], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.concatStreams() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import0.ɵted(null, ['Concat Streams'])),
        (l()(), import0.ɵted(null, ['\n'])),
        (l()(), import0.ɵeld(0, null, null, 1, 'button', [], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.forkJoinStreams() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import0.ɵted(null, ['ForkJoin Streams'])),
        (l()(), import0.ɵted(null, ['\n'])),
        (l()(), import0.ɵeld(0, null, null, 1, 'button', [], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.flatMapStreams() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import0.ɵted(null, ['FlatMap Streams'])),
        (l()(), import0.ɵted(null, ['\n\n'])),
        (l()(), import0.ɵeld(0, null, null, 7, 'div', [[
                'class',
                'stream-section'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n  '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'h4', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Concatenated Streams'])),
        (l()(), import0.ɵted(null, ['\n  '])),
        (l()(), import0.ɵand(16777216, null, null, 1, null, View_RxJsStreams_1)),
        import0.ɵdid(802816, null, 0, import1.NgForOf, [
            import0.ViewContainerRef,
            import0.TemplateRef,
            import0.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n'])),
        (l()(), import0.ɵted(null, ['\n\n'])),
        (l()(), import0.ɵeld(0, null, null, 7, 'div', [[
                'class',
                'stream-section'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n  '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'h4', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Merged Streams'])),
        (l()(), import0.ɵted(null, ['\n  '])),
        (l()(), import0.ɵand(16777216, null, null, 1, null, View_RxJsStreams_2)),
        import0.ɵdid(802816, null, 0, import1.NgForOf, [
            import0.ViewContainerRef,
            import0.TemplateRef,
            import0.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n'])),
        (l()(), import0.ɵted(null, ['\n\n'])),
        (l()(), import0.ɵeld(0, null, null, 7, 'div', [[
                'class',
                'stream-section'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n  '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'h4', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['ForkJoined Streams'])),
        (l()(), import0.ɵted(null, ['\n  '])),
        (l()(), import0.ɵand(16777216, null, null, 1, null, View_RxJsStreams_3)),
        import0.ɵdid(802816, null, 0, import1.NgForOf, [
            import0.ViewContainerRef,
            import0.TemplateRef,
            import0.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n'])),
        (l()(), import0.ɵted(null, ['\n\n'])),
        (l()(), import0.ɵeld(0, null, null, 0, 'br', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n'])),
        (l()(), import0.ɵeld(0, null, null, 7, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n  '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'h4', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Flatmapped Streams'])),
        (l()(), import0.ɵted(null, ['\n  '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ])),
        (l()(), import0.ɵted(null, ['\n'])),
        (l()(), import0.ɵted(null, ['\n\n']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_0 = co.concatStream;
        ck(v, 26, 0, currVal_0);
        var currVal_1 = co.mergeStream;
        ck(v, 35, 0, currVal_1);
        var currVal_2 = co.forkJoinStream;
        ck(v, 44, 0, currVal_2);
    }, function (ck, v) {
        var co = v.component;
        var currVal_3 = co.flatMappedStreams.msg;
        ck(v, 55, 0, currVal_3);
    });
}
function View_RxJsStreams_Host_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'rxjs-streams', [], null, null, null, View_RxJsStreams_0, RenderType_RxJsStreams)),
        import0.ɵdid(49152, null, 0, import2.RxJsStreams, [], null, null)
    ], null, null);
}
export var RxJsStreamsNgFactory = import0.ɵccf('rxjs-streams', import2.RxJsStreams, View_RxJsStreams_Host_0, {}, {}, []);
