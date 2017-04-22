import * as import0 from '@angular/core';
import * as import1 from './comment-section-1.ngfactory';
import * as import2 from '../../../components/change-detection/comment-section-1';
import * as import3 from './comment-section-2.ngfactory';
import * as import4 from '../../../components/change-detection/comment-section-2';
import * as import5 from '../../../components/change-detection/comment-demo';
var styles_CommentDemo = [];
export var RenderType_CommentDemo = import0.ɵcrt({
    encapsulation: 2,
    styles: styles_CommentDemo,
    data: {}
});
export function View_CommentDemo_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'h1', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Change Detection'])),
        (l()(), import0.ɵted(null, ['\n'])),
        (l()(), import0.ɵeld(0, null, null, 13, 'div', [[
                'class',
                'row'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵeld(0, null, null, 4, 'div', [[
                'class',
                'col-md-6'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n\n        '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'comment-section-1', [], null, null, null, import1.View_CommentSection1_0, import1.RenderType_CommentSection1)),
        import0.ɵdid(24576, null, 0, import2.CommentSection1, [], null, null),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵted(null, ['\n\n    '])),
        (l()(), import0.ɵeld(0, null, null, 4, 'div', [[
                'class',
                'col-md-6'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'comment-section-2', [], null, null, null, import3.View_CommentSection2_0, import3.RenderType_CommentSection2)),
        import0.ɵdid(24576, null, 0, import4.CommentSection2, [], null, null),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵted(null, ['\n'])),
        (l()(), import0.ɵted(null, ['\n'])),
        (l()(), import0.ɵeld(0, null, null, 11, 'div', [[
                'class',
                'row'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵeld(0, null, null, 8, 'div', [[
                'style',
                'margin: 15px;'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'button', [], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.count() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import0.ɵted(null, ['Increment Counter'])),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵeld(0, null, null, 2, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵeld(0, null, null, 1, 'strong', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ])),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵted(null, ['\n'])),
        (l()(), import0.ɵted(null, ['\n'])),
        (l()(), import0.ɵeld(0, null, null, 2, 'h4', [], null, null, null, null, null)),
        (l()(), import0.ɵeld(0, null, null, 1, 'a', [[
                'href',
                'http://www.syntaxsuccess.com/viewarticle/change-detection-in-angular-2.0'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Read more here']))
    ], null, function (ck, v) {
        var co = v.component;
        var currVal_0 = co.counter;
        ck(v, 27, 0, currVal_0);
    });
}
function View_CommentDemo_Host_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'comment-demo', [], null, null, null, View_CommentDemo_0, RenderType_CommentDemo)),
        import0.ɵdid(24576, null, 0, import5.CommentDemo, [], null, null)
    ], null, null);
}
export var CommentDemoNgFactory = import0.ɵccf('comment-demo', import5.CommentDemo, View_CommentDemo_Host_0, {}, {}, []);
