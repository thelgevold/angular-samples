import * as import0 from '@angular/core';
import * as import1 from './tree-view.ngfactory';
import * as import2 from '../../../components/lazy-loaded-tree-view/tree-view';
import * as import3 from '../../../components/lazy-loaded-tree-view/redux/store';
import * as import4 from '../../../components/lazy-loaded-tree-view/tree-node-service';
import * as import5 from '../../../components/lazy-loaded-tree-view/country-demo';
import * as import6 from '@angular/http';
var styles_CountryDemo = [];
export var RenderType_CountryDemo = import0.ɵcrt({
    encapsulation: 2,
    styles: styles_CountryDemo,
    data: {}
});
export function View_CountryDemo_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'h1', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Lazy loaded TreeView using Redux and RxJs'])),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'lazy-tree-view', [], null, null, null, import1.View_LazyTreeView_0, import1.RenderType_LazyTreeView)),
        import0.ɵdid(122880, null, 0, import2.LazyTreeView, [
            import3.Store,
            import4.TreeNodeService
        ], { root: [
                0,
                'root'
            ]
        }, null)
    ], function (ck, v) {
        var co = v.component;
        var currVal_0 = co.node;
        ck(v, 4, 0, currVal_0);
    }, null);
}
function View_CountryDemo_Host_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 3, 'country-demo', [], null, null, null, View_CountryDemo_0, RenderType_CountryDemo)),
        import0.ɵdid(57344, null, 0, import5.CountryDemo, [], null, null),
        import0.ɵprd(2304, null, import3.Store, import3.Store, [import6.Http]),
        import0.ɵprd(2304, null, import4.TreeNodeService, import4.TreeNodeService, [import3.Store])
    ], function (ck, v) {
        ck(v, 1, 0);
    }, null);
}
export var CountryDemoNgFactory = import0.ɵccf('country-demo', import5.CountryDemo, View_CountryDemo_Host_0, {}, {}, []);
