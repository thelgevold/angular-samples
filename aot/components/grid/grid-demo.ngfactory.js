import * as import0 from '@angular/core';
import * as import1 from './grid.ngfactory';
import * as import2 from '../../../components/grid/grid';
import * as import3 from '../../../components/grid/grid-demo';
var styles_GridDemo = [];
export var RenderType_GridDemo = import0.ɵcrt({
    encapsulation: 2,
    styles: styles_GridDemo,
    data: {}
});
export function View_GridDemo_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'grid', [[
                'name',
                'person grid'
            ]
        ], null, null, null, import1.View_Grid_0, import1.RenderType_Grid)),
        import0.ɵdid(114688, null, 0, import2.Grid, [], {
            columns: [
                0,
                'columns'
            ],
            rows: [
                1,
                'rows'
            ],
            name: [
                2,
                'name'
            ]
        }, null)
    ], function (ck, v) {
        var co = v.component;
        var currVal_0 = co.columns;
        var currVal_1 = co.people;
        var currVal_2 = 'person grid';
        ck(v, 1, 0, currVal_0, currVal_1, currVal_2);
    }, null);
}
function View_GridDemo_Host_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'ng-component', [], null, null, null, View_GridDemo_0, RenderType_GridDemo)),
        import0.ɵdid(49152, null, 0, import3.GridDemo, [], null, null)
    ], null, null);
}
export var GridDemoNgFactory = import0.ɵccf('ng-component', import3.GridDemo, View_GridDemo_Host_0, {}, {}, []);
