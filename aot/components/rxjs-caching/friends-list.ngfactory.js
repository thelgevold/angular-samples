import * as import0 from '@angular/core';
import * as import1 from '@angular/common';
import * as import2 from '../../../components/rxjs-caching/friends-list';
import * as import3 from '../../../components/rxjs-caching/friends-service';
var styles_FriendsList = [];
export var RenderType_FriendsList = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: styles_FriendsList,
    data: { animation: [] }
});
function View_FriendsList_1() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'div', [], null, null, null, null, null),
        import0.ɵtextDef(null, [
            '\n      ',
            '\n    '
        ])
    ], null, function (check, view) {
        var comp = view.component;
        var currVal_0 = view.context.$implicit;
        check(view, 1, 0, currVal_0);
    });
}
export function View_FriendsList_0() {
    return import0.ɵviewDef(0, [
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵanchorDef(256, null, null, 1, null, View_FriendsList_1),
        import0.ɵdirectiveDef(12, null, 0, import1.NgForOf, [
            import0.ViewContainerRef,
            import0.TemplateRef,
            import0.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵelementDef(0, null, null, 1, 'button', [], null, [[
                null,
                'click'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                var pd_0 = (comp.loadData() !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            return allowDefault;
        }, null, null),
        import0.ɵtextDef(null, ['Reload']),
        import0.ɵtextDef(null, ['\n  '])
    ], function (check, view) {
        var comp = view.component;
        var currVal_0 = comp.friends;
        check(view, 2, 0, currVal_0);
    }, null);
}
var RenderType_FriendsList_Host = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: [],
    data: { animation: [] }
});
function View_FriendsList_Host_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'friends-list', [], null, null, null, View_FriendsList_0, RenderType_FriendsList),
        import0.ɵdirectiveDef(1027, null, 0, import2.FriendsList, [import3.FriendsService], null, null)
    ], function (check, view) {
        check(view, 1, 0);
    }, null);
}
export var FriendsListNgFactory = import0.ɵcreateComponentFactory('friends-list', import2.FriendsList, View_FriendsList_Host_0);
