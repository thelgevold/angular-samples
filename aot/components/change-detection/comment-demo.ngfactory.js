import * as import0 from '@angular/core';
import * as import1 from './comment-section-1.ngfactory';
import * as import2 from '../../../components/change-detection/comment-section-1';
import * as import3 from './comment-section-2.ngfactory';
import * as import4 from '../../../components/change-detection/comment-section-2';
import * as import5 from '../../../components/change-detection/comment-demo';
var styles_CommentDemo = [];
export var RenderType_CommentDemo = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: styles_CommentDemo,
    data: { animation: [] }
});
export function View_CommentDemo_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'h1', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['Change Detection']),
        import0.ɵtextDef(null, ['\n']),
        import0.ɵelementDef(0, null, null, 13, 'div', [[
                'class',
                'row'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵelementDef(0, null, null, 4, 'div', [[
                'class',
                'col-md-6'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n\n        ']),
        import0.ɵelementDef(0, null, null, 1, 'comment-section-1', [], null, null, null, import1.View_CommentSection1_0, import1.RenderType_CommentSection1),
        import0.ɵdirectiveDef(1024, null, 0, import2.CommentSection1, [], null, null),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵtextDef(null, ['\n\n    ']),
        import0.ɵelementDef(0, null, null, 4, 'div', [[
                'class',
                'col-md-6'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n        ']),
        import0.ɵelementDef(0, null, null, 1, 'comment-section-2', [], null, null, null, import3.View_CommentSection2_0, import3.RenderType_CommentSection2),
        import0.ɵdirectiveDef(1024, null, 0, import4.CommentSection2, [], null, null),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵtextDef(null, ['\n']),
        import0.ɵtextDef(null, ['\n']),
        import0.ɵelementDef(0, null, null, 11, 'div', [[
                'class',
                'row'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵelementDef(0, null, null, 8, 'div', [[
                'style',
                'margin: 15px;'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n        ']),
        import0.ɵelementDef(0, null, null, 1, 'button', [], null, [[
                null,
                'click'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                var pd_0 = (comp.count() !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            return allowDefault;
        }, null, null),
        import0.ɵtextDef(null, ['Increment Counter']),
        import0.ɵtextDef(null, ['\n        ']),
        import0.ɵelementDef(0, null, null, 2, 'div', [], null, null, null, null, null),
        import0.ɵelementDef(0, null, null, 1, 'strong', [], null, null, null, null, null),
        import0.ɵtextDef(null, [
            '',
            ''
        ]),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵtextDef(null, ['\n']),
        import0.ɵtextDef(null, ['\n']),
        import0.ɵelementDef(0, null, null, 2, 'h4', [], null, null, null, null, null),
        import0.ɵelementDef(0, null, null, 1, 'a', [[
                'href',
                'http://www.syntaxsuccess.com/viewarticle/change-detection-in-angular-2.0'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['Read more here'])
    ], null, function (check, view) {
        var comp = view.component;
        var currVal_0 = comp.counter;
        check(view, 27, 0, currVal_0);
    });
}
var RenderType_CommentDemo_Host = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: [],
    data: { animation: [] }
});
function View_CommentDemo_Host_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'comment-demo', [], null, null, null, View_CommentDemo_0, RenderType_CommentDemo),
        import0.ɵdirectiveDef(1024, null, 0, import5.CommentDemo, [], null, null)
    ], null, null);
}
export var CommentDemoNgFactory = import0.ɵcreateComponentFactory('comment-demo', import5.CommentDemo, View_CommentDemo_Host_0);
