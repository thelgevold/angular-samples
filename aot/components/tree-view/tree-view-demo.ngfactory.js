import * as import0 from '@angular/core';
import * as import1 from './tree-view.ngfactory';
import * as import2 from '../../../components/tree-view/tree-view';
import * as import3 from '../../../components/tree-view/tree-view-demo';
var styles_TreeViewDemo = [];
export var RenderType_TreeViewDemo = import0.ɵcrt({
    encapsulation: 2,
    styles: styles_TreeViewDemo,
    data: {}
});
export function View_TreeViewDemo_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'h1', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Recursive TreeView'])),
        (l()(), import0.ɵeld(0, null, null, 1, 'tree-view', [], null, null, null, import1.View_TreeView_0, import1.RenderType_TreeView)),
        import0.ɵdid(24576, null, 0, import2.TreeView, [], { directories: [
                0,
                'directories'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['          '])),
        (l()(), import0.ɵeld(0, null, null, 2, 'h4', [], null, null, null, null, null)),
        (l()(), import0.ɵeld(0, null, null, 1, 'a', [[
                'href',
                'http://www.syntaxsuccess.com/viewarticle/recursive-treeview-in-angular-2.0'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Read more here']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_0 = co.directories;
        ck(v, 3, 0, currVal_0);
    }, null);
}
function View_TreeViewDemo_Host_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'ng-component', [], null, null, null, View_TreeViewDemo_0, RenderType_TreeViewDemo)),
        import0.ɵdid(24576, null, 0, import3.TreeViewDemo, [], null, null)
    ], null, null);
}
export var TreeViewDemoNgFactory = import0.ɵccf('ng-component', import3.TreeViewDemo, View_TreeViewDemo_Host_0, {}, {}, []);
