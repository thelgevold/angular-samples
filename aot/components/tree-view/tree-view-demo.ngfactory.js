import * as import0 from '@angular/core';
import * as import1 from './tree-view.ngfactory';
import * as import2 from '../../../components/tree-view/tree-view';
import * as import3 from '../../../components/tree-view/tree-view-demo';
var styles_TreeViewDemo = [];
export var RenderType_TreeViewDemo = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: styles_TreeViewDemo,
    data: { animation: [] }
});
export function View_TreeViewDemo_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'h1', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['Recursive TreeView']),
        import0.ɵelementDef(0, null, null, 1, 'tree-view', [], null, null, null, import1.View_TreeView_0, import1.RenderType_TreeView),
        import0.ɵdirectiveDef(1024, null, 0, import2.TreeView, [], { directories: [
                0,
                'directories'
            ]
        }, null),
        import0.ɵtextDef(null, ['          ']),
        import0.ɵelementDef(0, null, null, 2, 'h4', [], null, null, null, null, null),
        import0.ɵelementDef(0, null, null, 1, 'a', [[
                'href',
                'http://www.syntaxsuccess.com/viewarticle/recursive-treeview-in-angular-2.0'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['Read more here'])
    ], function (check, view) {
        var comp = view.component;
        var currVal_0 = comp.directories;
        check(view, 3, 0, currVal_0);
    }, null);
}
var RenderType_TreeViewDemo_Host = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: [],
    data: { animation: [] }
});
function View_TreeViewDemo_Host_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'ng-component', [], null, null, null, View_TreeViewDemo_0, RenderType_TreeViewDemo),
        import0.ɵdirectiveDef(1024, null, 0, import3.TreeViewDemo, [], null, null)
    ], null, null);
}
export var TreeViewDemoNgFactory = import0.ɵcreateComponentFactory('ng-component', import3.TreeViewDemo, View_TreeViewDemo_Host_0);
