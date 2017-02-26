import * as import0 from '@angular/core';
import * as import1 from './tree-view.ngfactory';
import * as import2 from '../../../components/lazy-loaded-tree-view/tree-view';
import * as import3 from '../../../components/lazy-loaded-tree-view/redux/store';
import * as import4 from '../../../components/lazy-loaded-tree-view/tree-node-service';
import * as import5 from '../../../components/lazy-loaded-tree-view/country-demo';
import * as import6 from '@angular/http';
var styles_CountryDemo = [];
export var RenderType_CountryDemo = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: styles_CountryDemo,
    data: { animation: [] }
});
export function View_CountryDemo_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'h1', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['Lazy loaded TreeView using Redux and RxJs']),
        import0.ɵtextDef(null, ['\n            ']),
        import0.ɵelementDef(0, null, null, 1, 'lazy-tree-view', [], null, null, null, import1.View_LazyTreeView_0, import1.RenderType_LazyTreeView),
        import0.ɵdirectiveDef(1027, null, 0, import2.LazyTreeView, [
            import3.Store,
            import4.TreeNodeService
        ], { root: [
                0,
                'root'
            ]
        }, null)
    ], function (check, view) {
        var comp = view.component;
        var currVal_0 = comp.node;
        check(view, 4, 0, currVal_0);
    }, null);
}
var RenderType_CountryDemo_Host = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: [],
    data: { animation: [] }
});
function View_CountryDemo_Host_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 3, 'country-demo', [], null, null, null, View_CountryDemo_0, RenderType_CountryDemo),
        import0.ɵdirectiveDef(1025, null, 0, import5.CountryDemo, [], null, null),
        import0.ɵproviderDef(32768, null, 1, import3.Store, import3.Store, [import6.Http]),
        import0.ɵproviderDef(32768, null, 1, import4.TreeNodeService, import4.TreeNodeService, [import3.Store])
    ], function (check, view) {
        check(view, 1, 0);
    }, null);
}
export var CountryDemoNgFactory = import0.ɵcreateComponentFactory('country-demo', import5.CountryDemo, View_CountryDemo_Host_0);
