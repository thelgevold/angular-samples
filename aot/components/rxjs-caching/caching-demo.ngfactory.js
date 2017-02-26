import * as import0 from '@angular/core';
import * as import1 from './friends-list.ngfactory';
import * as import2 from '../../../components/rxjs-caching/friends-list';
import * as import3 from '../../../components/rxjs-caching/friends-service';
import * as import4 from '../../../components/rxjs-caching/caching-demo';
import * as import5 from '@angular/common';
import * as import6 from '@angular/http';
var styles_CachingDemo = [];
export var RenderType_CachingDemo = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: styles_CachingDemo,
    data: { animation: [] }
});
function View_CachingDemo_1() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 13, 'tr', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n        ']),
        import0.ɵelementDef(0, null, null, 10, 'td', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['    \n            ']),
        import0.ɵelementDef(0, null, null, 1, 'h2', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['Friends 1']),
        import0.ɵtextDef(null, ['\n            ']),
        import0.ɵelementDef(0, null, null, 1, 'friends-list', [], null, null, null, import1.View_FriendsList_0, import1.RenderType_FriendsList),
        import0.ɵdirectiveDef(1027, null, 0, import2.FriendsList, [import3.FriendsService], null, null),
        import0.ɵtextDef(null, ['\n            ']),
        import0.ɵelementDef(0, null, null, 1, 'button', [], null, [[
                null,
                'click'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                var pd_0 = (comp.remove('first') !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            return allowDefault;
        }, null, null),
        import0.ɵtextDef(null, ['Remove']),
        import0.ɵtextDef(null, ['\n        ']),
        import0.ɵtextDef(null, ['\n    '])
    ], function (check, view) {
        var comp = view.component;
        check(view, 8, 0);
    }, null);
}
function View_CachingDemo_2() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 13, 'tr', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n        ']),
        import0.ɵelementDef(0, null, null, 10, 'td', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['    \n            ']),
        import0.ɵelementDef(0, null, null, 1, 'h2', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['Friends 2']),
        import0.ɵtextDef(null, ['\n            ']),
        import0.ɵelementDef(0, null, null, 1, 'friends-list', [], null, null, null, import1.View_FriendsList_0, import1.RenderType_FriendsList),
        import0.ɵdirectiveDef(1027, null, 0, import2.FriendsList, [import3.FriendsService], null, null),
        import0.ɵtextDef(null, ['\n            ']),
        import0.ɵelementDef(0, null, null, 1, 'button', [], null, [[
                null,
                'click'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                var pd_0 = (comp.remove('second') !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            return allowDefault;
        }, null, null),
        import0.ɵtextDef(null, ['Remove']),
        import0.ɵtextDef(null, ['\n        ']),
        import0.ɵtextDef(null, ['\n    '])
    ], function (check, view) {
        var comp = view.component;
        check(view, 8, 0);
    }, null);
}
export function View_CachingDemo_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 7, 'div', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n  ']),
        import0.ɵelementDef(0, null, null, 1, 'button', [], null, [[
                null,
                'click'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                var pd_0 = (comp.clearCache() !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            return allowDefault;
        }, null, null),
        import0.ɵtextDef(null, ['Clear Cache']),
        import0.ɵtextDef(null, ['\n  ']),
        import0.ɵelementDef(0, null, null, 1, 'button', [], null, [[
                null,
                'click'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                var pd_0 = (comp.reset() !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            return allowDefault;
        }, null, null),
        import0.ɵtextDef(null, ['Reset']),
        import0.ɵtextDef(null, ['\n']),
        import0.ɵtextDef(null, ['\n\n']),
        import0.ɵelementDef(0, null, null, 8, 'table', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵelementDef(0, null, null, 6, 'tbody', [], null, null, null, null, null),
        import0.ɵanchorDef(256, null, null, 1, null, View_CachingDemo_1),
        import0.ɵdirectiveDef(0, null, 0, import5.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵanchorDef(256, null, null, 1, null, View_CachingDemo_2),
        import0.ɵdirectiveDef(0, null, 0, import5.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        import0.ɵtextDef(null, ['\n'])
    ], function (check, view) {
        var comp = view.component;
        var currVal_0 = comp.display.first;
        check(view, 13, 0, currVal_0);
        var currVal_1 = comp.display.second;
        check(view, 16, 0, currVal_1);
    }, null);
}
var RenderType_CachingDemo_Host = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: [],
    data: { animation: [] }
});
function View_CachingDemo_Host_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 2, 'ng-component', [], null, null, null, View_CachingDemo_0, RenderType_CachingDemo),
        import0.ɵproviderDef(0, null, 1, import3.FriendsService, import3.FriendsService, [import6.Http]),
        import0.ɵdirectiveDef(1024, null, 0, import4.CachingDemo, [import3.FriendsService], null, null)
    ], null, null);
}
export var CachingDemoNgFactory = import0.ɵcreateComponentFactory('ng-component', import4.CachingDemo, View_CachingDemo_Host_0);
