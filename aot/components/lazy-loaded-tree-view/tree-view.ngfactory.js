import * as import0 from '@angular/core';
import * as import1 from '../../../components/lazy-loaded-tree-view/tree-view';
import * as import2 from '../../../components/lazy-loaded-tree-view/redux/store';
import * as import3 from '../../../components/lazy-loaded-tree-view/tree-node-service';
import * as import4 from '@angular/common';
var styles_LazyTreeView = [];
export var RenderType_LazyTreeView = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: styles_LazyTreeView,
    data: { animation: [] }
});
function View_LazyTreeView_2() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 4, 'div', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n      ']),
        import0.ɵelementDef(0, null, null, 1, 'lazy-tree-view', [], null, null, null, View_LazyTreeView_0, RenderType_LazyTreeView),
        import0.ɵdirectiveDef(1027, null, 0, import1.LazyTreeView, [
            import2.Store,
            import3.TreeNodeService
        ], { root: [
                0,
                'root'
            ]
        }, null),
        import0.ɵtextDef(null, ['\n    '])
    ], function (check, view) {
        var comp = view.component;
        var currVal_0 = view.parent.context.$implicit;
        check(view, 3, 0, currVal_0);
    }, null);
}
function View_LazyTreeView_1() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 12, 'li', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n\n    ']),
        import0.ɵelementDef(0, null, null, 3, 'span', [[
                'class',
                'iconButton'
            ]
        ], null, [[
                null,
                'click'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                var pd_0 = (view.context.$implicit.expand() !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            return allowDefault;
        }, null, null),
        import0.ɵdirectiveDef(4, null, 0, import4.NgClass, [
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
        import0.ɵpureObjectDef(['tree-node-no-children']),
        import0.ɵtextDef(null, [
            '',
            ''
        ]),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵelementDef(0, null, null, 1, 'span', [], null, null, null, null, null),
        import0.ɵtextDef(null, [
            '',
            ''
        ]),
        import0.ɵtextDef(null, ['\n\n    ']),
        import0.ɵanchorDef(256, null, null, 1, null, View_LazyTreeView_2),
        import0.ɵdirectiveDef(0, null, 0, import4.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        import0.ɵtextDef(null, ['\n  '])
    ], function (check, view) {
        var comp = view.component;
        var currVal_0 = 'iconButton';
        var currVal_1 = check(view, 4, 0, !view.context.$implicit.showIcon);
        check(view, 3, 0, currVal_0, currVal_1);
        var currVal_2 = view.context.$implicit.expanded;
        check(view, 11, 0, currVal_2);
    }, function (check, view) {
        var comp = view.component;
        var currVal_0 = view.context.$implicit.icon;
        check(view, 5, 0, currVal_0);
        var currVal_1 = view.context.$implicit.name;
        check(view, 8, 0, currVal_1);
    });
}
export function View_LazyTreeView_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 4, 'ul', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n  ']),
        import0.ɵanchorDef(256, null, null, 1, null, View_LazyTreeView_1),
        import0.ɵdirectiveDef(12, null, 0, import4.NgForOf, [
            import0.ViewContainerRef,
            import0.TemplateRef,
            import0.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        import0.ɵtextDef(null, ['\n']),
        import0.ɵtextDef(null, ['\n\n'])
    ], function (check, view) {
        var comp = view.component;
        var currVal_0 = comp.items;
        check(view, 3, 0, currVal_0);
    }, null);
}
var RenderType_LazyTreeView_Host = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: [],
    data: { animation: [] }
});
function View_LazyTreeView_Host_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'lazy-tree-view', [], null, null, null, View_LazyTreeView_0, RenderType_LazyTreeView),
        import0.ɵdirectiveDef(1027, null, 0, import1.LazyTreeView, [
            import2.Store,
            import3.TreeNodeService
        ], null, null)
    ], function (check, view) {
        check(view, 1, 0);
    }, null);
}
export var LazyTreeViewNgFactory = import0.ɵcreateComponentFactory('lazy-tree-view', import1.LazyTreeView, View_LazyTreeView_Host_0);
