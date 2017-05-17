import * as import0 from '@angular/core';
import * as import1 from '@angular/router';
import * as import2 from '@angular/common';
import * as import3 from '../../../components/about/about';
var styles_About = [];
export var RenderType_About = import0.ɵcrt({
    encapsulation: 2,
    styles: styles_About,
    data: {}
});
export function View_About_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 27, 'div', [[
                'class',
                'container'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'h1', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Welcome'])),
        (l()(), import0.ɵted(null, ['\n\n    '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'p', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n        This is a live demo of my Angular sample components.\n    '])),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵeld(0, null, null, 6, 'p', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n        I hope you will find these '])),
        (l()(), import0.ɵeld(0, null, null, 3, 'a', [], [
            [
                1,
                'target',
                0
            ],
            [
                8,
                'href',
                4
            ]
        ], [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (import0.ɵnov(v, 11).onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        import0.ɵdid(671744, null, 0, import1.RouterLinkWithHref, [
            import1.Router,
            import1.ActivatedRoute,
            import2.LocationStrategy
        ], { routerLink: [
                0,
                'routerLink'
            ]
        }, null),
        import0.ɵpad(1),
        (l()(), import0.ɵted(null, ['demos'])),
        (l()(), import0.ɵted(null, [' useful and educational. Stay tuned for more progress soon.\n        Don\'t hesitate to tweet me at @helgevold with suggestions for more components.\n    '])),
        (l()(), import0.ɵted(null, ['\n\n    '])),
        (l()(), import0.ɵeld(0, null, null, 4, 'p', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n        Click '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'a', [[
                'href',
                'http://www.syntaxsuccess.com/angular-2-articles'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['here'])),
        (l()(), import0.ɵted(null, [' for a full list of my Angular articles.\n    '])),
        (l()(), import0.ɵted(null, ['\n\n    '])),
        (l()(), import0.ɵeld(0, null, null, 4, 'p', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n        The source code for the full set of components is available on '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'a', [[
                'href',
                'https://github.com/thelgevold/angular-2-samples'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['GitHub'])),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵted(null, ['\n\n']))
    ], function (ck, v) {
        var currVal_2 = ck(v, 12, 0, '/Demo/Spreadsheet');
        ck(v, 11, 0, currVal_2);
    }, function (ck, v) {
        var currVal_0 = import0.ɵnov(v, 11).target;
        var currVal_1 = import0.ɵnov(v, 11).href;
        ck(v, 10, 0, currVal_0, currVal_1);
    });
}
function View_About_Host_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'about', [], null, null, null, View_About_0, RenderType_About)),
        import0.ɵdid(49152, null, 0, import3.About, [], null, null)
    ], null, null);
}
export var AboutNgFactory = import0.ɵccf('about', import3.About, View_About_Host_0, {}, {}, []);
