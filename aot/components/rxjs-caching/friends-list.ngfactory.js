import * as import0 from '@angular/core';
import * as import1 from '@angular/common';
import * as import2 from '../../../components/rxjs-caching/friends-list';
import * as import3 from '../../../components/rxjs-caching/friends-service';
var styles_FriendsList = [];
export var RenderType_FriendsList = import0.ɵcrt({
    encapsulation: 2,
    styles: styles_FriendsList,
    data: {}
});
function View_FriendsList_1(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '\n      ',
            '\n    '
        ]))
    ], null, function (ck, v) {
        var currVal_0 = v.context.$implicit;
        ck(v, 1, 0, currVal_0);
    });
}
export function View_FriendsList_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵand(16777216, null, null, 1, null, View_FriendsList_1)),
        import0.ɵdid(802816, null, 0, import1.NgForOf, [
            import0.ViewContainerRef,
            import0.TemplateRef,
            import0.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'button', [], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.loadData() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import0.ɵted(null, ['Reload'])),
        (l()(), import0.ɵted(null, ['\n  ']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_0 = co.friends;
        ck(v, 2, 0, currVal_0);
    }, null);
}
function View_FriendsList_Host_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'friends-list', [], null, null, null, View_FriendsList_0, RenderType_FriendsList)),
        import0.ɵdid(245760, null, 0, import2.FriendsList, [import3.FriendsService], null, null)
    ], function (ck, v) {
        ck(v, 1, 0);
    }, null);
}
export var FriendsListNgFactory = import0.ɵccf('friends-list', import2.FriendsList, View_FriendsList_Host_0, {}, {}, []);
