import * as import0 from '@angular/core';
import * as import1 from './friends-list.ngfactory';
import * as import2 from '../../../components/rxjs-caching/friends-list';
import * as import3 from '../../../components/rxjs-caching/friends-service';
import * as import4 from '../../../components/rxjs-caching/caching-demo';
import * as import5 from '@angular/common';
import * as import6 from '@angular/http';
var styles_CachingDemo = [];
export var RenderType_CachingDemo = import0.ɵcrt({
    encapsulation: 2,
    styles: styles_CachingDemo,
    data: {}
});
function View_CachingDemo_1(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 13, 'tr', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵeld(0, null, null, 10, 'td', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['    \n            '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'h2', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Friends 1'])),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'friends-list', [], null, null, null, import1.View_FriendsList_0, import1.RenderType_FriendsList)),
        import0.ɵdid(245760, null, 0, import2.FriendsList, [import3.FriendsService], null, null),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'button', [], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.remove('first') !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import0.ɵted(null, ['Remove'])),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵted(null, ['\n    ']))
    ], function (ck, v) {
        ck(v, 8, 0);
    }, null);
}
function View_CachingDemo_2(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 13, 'tr', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵeld(0, null, null, 10, 'td', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['    \n            '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'h2', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Friends 2'])),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'friends-list', [], null, null, null, import1.View_FriendsList_0, import1.RenderType_FriendsList)),
        import0.ɵdid(245760, null, 0, import2.FriendsList, [import3.FriendsService], null, null),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'button', [], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.remove('second') !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import0.ɵted(null, ['Remove'])),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵted(null, ['\n    ']))
    ], function (ck, v) {
        ck(v, 8, 0);
    }, null);
}
export function View_CachingDemo_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 7, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n  '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'button', [], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.clearCache() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import0.ɵted(null, ['Clear Cache'])),
        (l()(), import0.ɵted(null, ['\n  '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'button', [], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.reset() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import0.ɵted(null, ['Reset'])),
        (l()(), import0.ɵted(null, ['\n'])),
        (l()(), import0.ɵted(null, ['\n\n'])),
        (l()(), import0.ɵeld(0, null, null, 8, 'table', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵeld(0, null, null, 6, 'tbody', [], null, null, null, null, null)),
        (l()(), import0.ɵand(16777216, null, null, 1, null, View_CachingDemo_1)),
        import0.ɵdid(16384, null, 0, import5.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵand(16777216, null, null, 1, null, View_CachingDemo_2)),
        import0.ɵdid(16384, null, 0, import5.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_0 = co.display.first;
        ck(v, 13, 0, currVal_0);
        var currVal_1 = co.display.second;
        ck(v, 16, 0, currVal_1);
    }, null);
}
function View_CachingDemo_Host_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 2, 'ng-component', [], null, null, null, View_CachingDemo_0, RenderType_CachingDemo)),
        import0.ɵprd(512, null, import3.FriendsService, import3.FriendsService, [import6.Http]),
        import0.ɵdid(49152, null, 0, import4.CachingDemo, [import3.FriendsService], null, null)
    ], null, null);
}
export var CachingDemoNgFactory = import0.ɵccf('ng-component', import4.CachingDemo, View_CachingDemo_Host_0, {}, {}, []);
