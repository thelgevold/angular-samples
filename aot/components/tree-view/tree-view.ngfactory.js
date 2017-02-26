import * as import0 from '@angular/core';
import * as import1 from '@angular/common';
import * as import2 from '../../../components/tree-view/tree-view';
var styles_TreeView = [];
export var RenderType_TreeView = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: styles_TreeView,
    data: { animation: [] }
});
function View_TreeView_3() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'li', [], null, null, null, null, null),
        import0.ɵtextDef(null, [
            '',
            ''
        ])
    ], null, function (check, view) {
        var comp = view.component;
        var currVal_0 = view.context.$implicit;
        check(view, 1, 0, currVal_0);
    });
}
function View_TreeView_2() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 10, 'div', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n\n            ']),
        import0.ɵelementDef(0, null, null, 4, 'ul', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n                ']),
        import0.ɵanchorDef(256, null, null, 1, null, View_TreeView_3),
        import0.ɵdirectiveDef(12, null, 0, import1.NgForOf, [
            import0.ViewContainerRef,
            import0.TemplateRef,
            import0.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        import0.ɵtextDef(null, ['\n            ']),
        import0.ɵtextDef(null, ['\n\n            ']),
        import0.ɵelementDef(0, null, null, 1, 'tree-view', [], null, null, null, View_TreeView_0, RenderType_TreeView),
        import0.ɵdirectiveDef(1024, null, 0, import2.TreeView, [], { directories: [
                0,
                'directories'
            ]
        }, null),
        import0.ɵtextDef(null, ['\n\n        '])
    ], function (check, view) {
        var comp = view.component;
        var currVal_0 = view.parent.context.$implicit.files;
        check(view, 5, 0, currVal_0);
        var currVal_1 = view.parent.context.$implicit.directories;
        check(view, 9, 0, currVal_1);
    }, null);
}
function View_TreeView_1() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 8, 'li', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n\n        ']),
        import0.ɵelementDef(0, null, null, 1, 'span', [[
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
                var pd_0 = (view.context.$implicit.toggle() !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            return allowDefault;
        }, null, null),
        import0.ɵtextDef(null, [
            '',
            ''
        ]),
        import0.ɵelementDef(0, null, null, 0, 'input', [[
                'type',
                'checkbox'
            ]
        ], [[
                3,
                'checked',
                0
            ]
        ], [[
                null,
                'click'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                var pd_0 = (view.context.$implicit.check() !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            return allowDefault;
        }, null, null),
        import0.ɵtextDef(null, [
            ' ',
            '\n\n        '
        ]),
        import0.ɵanchorDef(256, null, null, 1, null, View_TreeView_2),
        import0.ɵdirectiveDef(0, null, 0, import1.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        import0.ɵtextDef(null, ['\n\n    '])
    ], function (check, view) {
        var comp = view.component;
        var currVal_0 = view.context.$implicit.expanded;
        check(view, 7, 0, currVal_0);
    }, function (check, view) {
        var comp = view.component;
        var currVal_0 = view.context.$implicit.getIcon();
        check(view, 3, 0, currVal_0);
        var currVal_1 = view.context.$implicit.checked;
        check(view, 4, 0, currVal_1);
        var currVal_2 = view.context.$implicit.name;
        check(view, 5, 0, currVal_2);
    });
}
export function View_TreeView_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 4, 'ul', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵanchorDef(256, null, null, 1, null, View_TreeView_1),
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
        import0.ɵtextDef(null, ['\n\n'])
    ], function (check, view) {
        var comp = view.component;
        var currVal_0 = comp.directories;
        check(view, 3, 0, currVal_0);
    }, null);
}
var RenderType_TreeView_Host = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: [],
    data: { animation: [] }
});
function View_TreeView_Host_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'tree-view', [], null, null, null, View_TreeView_0, RenderType_TreeView),
        import0.ɵdirectiveDef(1024, null, 0, import2.TreeView, [], null, null)
    ], null, null);
}
export var TreeViewNgFactory = import0.ɵcreateComponentFactory('tree-view', import2.TreeView, View_TreeView_Host_0);
