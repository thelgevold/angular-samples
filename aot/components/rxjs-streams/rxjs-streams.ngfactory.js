import * as import0 from '@angular/core';
import * as import1 from '@angular/common';
import * as import2 from '../../../components/rxjs-streams/rxjs-streams';
var styles_RxJsStreams = [];
export var RenderType_RxJsStreams = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: styles_RxJsStreams,
    data: { animation: [] }
});
function View_RxJsStreams_1() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 6, 'div', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵelementDef(0, null, null, 3, 'div', [[
                'class',
                'floatLeft'
            ]
        ], null, null, null, null, null),
        import0.ɵdirectiveDef(4, null, 0, import1.NgClass, [
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
        import0.ɵpureObjectDef([
            'stream1',
            'stream2'
        ]),
        import0.ɵtextDef(null, [
            '',
            ''
        ]),
        import0.ɵtextDef(null, ['\n  '])
    ], function (check, view) {
        var comp = view.component;
        var currVal_0 = 'floatLeft';
        var currVal_1 = check(view, 4, 0, (view.context.$implicit.source === 1), (view.context.$implicit.source === 2));
        check(view, 3, 0, currVal_0, currVal_1);
    }, function (check, view) {
        var comp = view.component;
        var currVal_0 = view.context.$implicit.value;
        check(view, 5, 0, currVal_0);
    });
}
function View_RxJsStreams_2() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 6, 'div', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵelementDef(0, null, null, 3, 'div', [[
                'class',
                'floatLeft'
            ]
        ], null, null, null, null, null),
        import0.ɵdirectiveDef(4, null, 0, import1.NgClass, [
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
        import0.ɵpureObjectDef([
            'stream1',
            'stream2'
        ]),
        import0.ɵtextDef(null, [
            '',
            ''
        ]),
        import0.ɵtextDef(null, ['\n  '])
    ], function (check, view) {
        var comp = view.component;
        var currVal_0 = 'floatLeft';
        var currVal_1 = check(view, 4, 0, (view.context.$implicit.source === 1), (view.context.$implicit.source === 2));
        check(view, 3, 0, currVal_0, currVal_1);
    }, function (check, view) {
        var comp = view.component;
        var currVal_0 = view.context.$implicit.value;
        check(view, 5, 0, currVal_0);
    });
}
function View_RxJsStreams_3() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 6, 'div', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵelementDef(0, null, null, 3, 'div', [], null, null, null, null, null),
        import0.ɵdirectiveDef(4, null, 0, import1.NgClass, [
            import0.IterableDiffers,
            import0.KeyValueDiffers,
            import0.ElementRef,
            import0.Renderer
        ], { ngClass: [
                0,
                'ngClass'
            ]
        }, null),
        import0.ɵpureObjectDef([
            'stream1',
            'stream2'
        ]),
        import0.ɵtextDef(null, [
            '',
            ''
        ]),
        import0.ɵtextDef(null, ['\n  '])
    ], function (check, view) {
        var comp = view.component;
        var currVal_0 = check(view, 4, 0, (view.context.$implicit.source === 1), (view.context.$implicit.source === 2));
        check(view, 3, 0, currVal_0);
    }, function (check, view) {
        var comp = view.component;
        var currVal_0 = view.context.$implicit.value;
        check(view, 5, 0, currVal_0);
    });
}
export function View_RxJsStreams_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'div', [[
                'class',
                'stream1'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['Stream1']),
        import0.ɵtextDef(null, ['\n']),
        import0.ɵelementDef(0, null, null, 1, 'div', [[
                'class',
                'stream2'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['Stream2']),
        import0.ɵtextDef(null, ['\n']),
        import0.ɵelementDef(0, null, null, 0, 'br', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n']),
        import0.ɵelementDef(0, null, null, 1, 'button', [], null, [[
                null,
                'click'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                var pd_0 = (comp.mergeStreams() !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            return allowDefault;
        }, null, null),
        import0.ɵtextDef(null, ['Merge Streams']),
        import0.ɵtextDef(null, ['\n']),
        import0.ɵelementDef(0, null, null, 1, 'button', [], null, [[
                null,
                'click'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                var pd_0 = (comp.concatStreams() !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            return allowDefault;
        }, null, null),
        import0.ɵtextDef(null, ['Concat Streams']),
        import0.ɵtextDef(null, ['\n']),
        import0.ɵelementDef(0, null, null, 1, 'button', [], null, [[
                null,
                'click'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                var pd_0 = (comp.forkJoinStreams() !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            return allowDefault;
        }, null, null),
        import0.ɵtextDef(null, ['ForkJoin Streams']),
        import0.ɵtextDef(null, ['\n']),
        import0.ɵelementDef(0, null, null, 1, 'button', [], null, [[
                null,
                'click'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                var pd_0 = (comp.flatMapStreams() !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            return allowDefault;
        }, null, null),
        import0.ɵtextDef(null, ['FlatMap Streams']),
        import0.ɵtextDef(null, ['\n\n']),
        import0.ɵelementDef(0, null, null, 7, 'div', [[
                'class',
                'stream-section'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n  ']),
        import0.ɵelementDef(0, null, null, 1, 'h4', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['Concatenated Streams']),
        import0.ɵtextDef(null, ['\n  ']),
        import0.ɵanchorDef(256, null, null, 1, null, View_RxJsStreams_1),
        import0.ɵdirectiveDef(12, null, 0, import1.NgForOf, [
            import0.ViewContainerRef,
            import0.TemplateRef,
            import0.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        import0.ɵtextDef(null, ['\n']),
        import0.ɵtextDef(null, ['\n\n']),
        import0.ɵelementDef(0, null, null, 7, 'div', [[
                'class',
                'stream-section'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n  ']),
        import0.ɵelementDef(0, null, null, 1, 'h4', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['Merged Streams']),
        import0.ɵtextDef(null, ['\n  ']),
        import0.ɵanchorDef(256, null, null, 1, null, View_RxJsStreams_2),
        import0.ɵdirectiveDef(12, null, 0, import1.NgForOf, [
            import0.ViewContainerRef,
            import0.TemplateRef,
            import0.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        import0.ɵtextDef(null, ['\n']),
        import0.ɵtextDef(null, ['\n\n']),
        import0.ɵelementDef(0, null, null, 7, 'div', [[
                'class',
                'stream-section'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n  ']),
        import0.ɵelementDef(0, null, null, 1, 'h4', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['ForkJoined Streams']),
        import0.ɵtextDef(null, ['\n  ']),
        import0.ɵanchorDef(256, null, null, 1, null, View_RxJsStreams_3),
        import0.ɵdirectiveDef(12, null, 0, import1.NgForOf, [
            import0.ViewContainerRef,
            import0.TemplateRef,
            import0.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        import0.ɵtextDef(null, ['\n']),
        import0.ɵtextDef(null, ['\n\n']),
        import0.ɵelementDef(0, null, null, 0, 'br', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n']),
        import0.ɵelementDef(0, null, null, 7, 'div', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n  ']),
        import0.ɵelementDef(0, null, null, 1, 'h4', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['Flatmapped Streams']),
        import0.ɵtextDef(null, ['\n  ']),
        import0.ɵelementDef(0, null, null, 1, 'div', [], null, null, null, null, null),
        import0.ɵtextDef(null, [
            '',
            ''
        ]),
        import0.ɵtextDef(null, ['\n']),
        import0.ɵtextDef(null, ['\n\n'])
    ], function (check, view) {
        var comp = view.component;
        var currVal_0 = comp.concatStream;
        check(view, 26, 0, currVal_0);
        var currVal_1 = comp.mergeStream;
        check(view, 35, 0, currVal_1);
        var currVal_2 = comp.forkJoinStream;
        check(view, 44, 0, currVal_2);
    }, function (check, view) {
        var comp = view.component;
        var currVal_0 = comp.flatMappedStreams.msg;
        check(view, 55, 0, currVal_0);
    });
}
var RenderType_RxJsStreams_Host = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: [],
    data: { animation: [] }
});
function View_RxJsStreams_Host_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'rxjs-streams', [], null, null, null, View_RxJsStreams_0, RenderType_RxJsStreams),
        import0.ɵdirectiveDef(1024, null, 0, import2.RxJsStreams, [], null, null)
    ], null, null);
}
export var RxJsStreamsNgFactory = import0.ɵcreateComponentFactory('rxjs-streams', import2.RxJsStreams, View_RxJsStreams_Host_0);
