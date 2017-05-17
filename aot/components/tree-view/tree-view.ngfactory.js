import * as import0 from '@angular/core';
import * as import1 from '@angular/common';
import * as import2 from '../../../components/tree-view/tree-view';
var styles_TreeView = [];
export var RenderType_TreeView = import0.ɵcrt({
    encapsulation: 2,
    styles: styles_TreeView,
    data: {}
});
function View_TreeView_3(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'li', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ]))
    ], null, function (ck, v) {
        var currVal_0 = v.context.$implicit;
        ck(v, 1, 0, currVal_0);
    });
}
function View_TreeView_2(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 10, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n\n            '])),
        (l()(), import0.ɵeld(0, null, null, 4, 'ul', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵand(16777216, null, null, 1, null, View_TreeView_3)),
        import0.ɵdid(802816, null, 0, import1.NgForOf, [
            import0.ViewContainerRef,
            import0.TemplateRef,
            import0.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵted(null, ['\n\n            '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'tree-view', [], null, null, null, View_TreeView_0, RenderType_TreeView)),
        import0.ɵdid(49152, null, 0, import2.TreeView, [], { directories: [
                0,
                'directories'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n\n        ']))
    ], function (ck, v) {
        var currVal_0 = v.parent.context.$implicit.files;
        ck(v, 5, 0, currVal_0);
        var currVal_1 = v.parent.context.$implicit.directories;
        ck(v, 9, 0, currVal_1);
    }, null);
}
function View_TreeView_1(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 8, 'li', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n\n        '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'span', [[
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
                var pd_0 = (v.context.$implicit.toggle() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ])),
        (l()(), import0.ɵeld(0, null, null, 0, 'input', [[
                'type',
                'checkbox'
            ]
        ], [[
                8,
                'checked',
                0
            ]
        ], [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (v.context.$implicit.check() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import0.ɵted(null, [
            ' ',
            '\n\n        '
        ])),
        (l()(), import0.ɵand(16777216, null, null, 1, null, View_TreeView_2)),
        import0.ɵdid(16384, null, 0, import1.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n\n    ']))
    ], function (ck, v) {
        var currVal_3 = v.context.$implicit.expanded;
        ck(v, 7, 0, currVal_3);
    }, function (ck, v) {
        var currVal_0 = v.context.$implicit.getIcon();
        ck(v, 3, 0, currVal_0);
        var currVal_1 = v.context.$implicit.checked;
        ck(v, 4, 0, currVal_1);
        var currVal_2 = v.context.$implicit.name;
        ck(v, 5, 0, currVal_2);
    });
}
export function View_TreeView_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 4, 'ul', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵand(16777216, null, null, 1, null, View_TreeView_1)),
        import0.ɵdid(802816, null, 0, import1.NgForOf, [
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
        var currVal_0 = co.directories;
        ck(v, 3, 0, currVal_0);
    }, null);
}
function View_TreeView_Host_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'tree-view', [], null, null, null, View_TreeView_0, RenderType_TreeView)),
        import0.ɵdid(49152, null, 0, import2.TreeView, [], null, null)
    ], null, null);
}
export var TreeViewNgFactory = import0.ɵccf('tree-view', import2.TreeView, View_TreeView_Host_0, { directories: 'directories' }, {}, []);
