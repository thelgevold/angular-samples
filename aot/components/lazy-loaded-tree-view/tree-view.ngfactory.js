import * as import0 from '@angular/core';
import * as import1 from '../../../components/lazy-loaded-tree-view/tree-view';
import * as import2 from '../../../components/lazy-loaded-tree-view/redux/store';
import * as import3 from '../../../components/lazy-loaded-tree-view/tree-node-service';
import * as import4 from '@angular/common';
var styles_LazyTreeView = [];
export var RenderType_LazyTreeView = import0.ɵcrt({
    encapsulation: 2,
    styles: styles_LazyTreeView,
    data: {}
});
function View_LazyTreeView_2(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 4, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n      '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'lazy-tree-view', [], null, null, null, View_LazyTreeView_0, RenderType_LazyTreeView)),
        import0.ɵdid(245760, null, 0, import1.LazyTreeView, [
            import2.Store,
            import3.TreeNodeService
        ], { root: [
                0,
                'root'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n    ']))
    ], function (ck, v) {
        var currVal_0 = v.parent.context.$implicit;
        ck(v, 3, 0, currVal_0);
    }, null);
}
function View_LazyTreeView_1(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 12, 'li', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n\n    '])),
        (l()(), import0.ɵeld(0, null, null, 3, 'span', [[
                'class',
                'iconButton'
            ]
        ], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (v.context.$implicit.expand() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        import0.ɵdid(278528, null, 0, import4.NgClass, [
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
        import0.ɵpod(['tree-node-no-children']),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ])),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'span', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ])),
        (l()(), import0.ɵted(null, ['\n\n    '])),
        (l()(), import0.ɵand(16777216, null, null, 1, null, View_LazyTreeView_2)),
        import0.ɵdid(16384, null, 0, import4.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n  ']))
    ], function (ck, v) {
        var currVal_0 = 'iconButton';
        var currVal_1 = ck(v, 4, 0, !v.context.$implicit.showIcon);
        ck(v, 3, 0, currVal_0, currVal_1);
        var currVal_4 = v.context.$implicit.expanded;
        ck(v, 11, 0, currVal_4);
    }, function (ck, v) {
        var currVal_2 = v.context.$implicit.icon;
        ck(v, 5, 0, currVal_2);
        var currVal_3 = v.context.$implicit.name;
        ck(v, 8, 0, currVal_3);
    });
}
export function View_LazyTreeView_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 4, 'ul', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n  '])),
        (l()(), import0.ɵand(16777216, null, null, 1, null, View_LazyTreeView_1)),
        import0.ɵdid(802816, null, 0, import4.NgForOf, [
            import0.ViewContainerRef,
            import0.TemplateRef,
            import0.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n'])),
        (l()(), import0.ɵted(null, ['\n\n']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_0 = co.items;
        ck(v, 3, 0, currVal_0);
    }, null);
}
function View_LazyTreeView_Host_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'lazy-tree-view', [], null, null, null, View_LazyTreeView_0, RenderType_LazyTreeView)),
        import0.ɵdid(245760, null, 0, import1.LazyTreeView, [
            import2.Store,
            import3.TreeNodeService
        ], null, null)
    ], function (ck, v) {
        ck(v, 1, 0);
    }, null);
}
export var LazyTreeViewNgFactory = import0.ɵccf('lazy-tree-view', import1.LazyTreeView, View_LazyTreeView_Host_0, { root: 'root' }, {}, []);
