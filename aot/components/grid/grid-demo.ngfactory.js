import * as import0 from '@angular/core';
import * as import1 from './grid.ngfactory';
import * as import2 from '../../../components/grid/grid';
import * as import3 from '../../../components/grid/grid-demo';
var styles_GridDemo = [];
export var RenderType_GridDemo = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: styles_GridDemo,
    data: { animation: [] }
});
export function View_GridDemo_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'grid', [[
                'name',
                'person grid'
            ]
        ], null, null, null, import1.View_Grid_0, import1.RenderType_Grid),
        import0.ɵdirectiveDef(1025, null, 0, import2.Grid, [], {
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
    ], function (check, view) {
        var comp = view.component;
        var currVal_0 = comp.columns;
        var currVal_1 = comp.people;
        var currVal_2 = 'person grid';
        check(view, 1, 0, currVal_0, currVal_1, currVal_2);
    }, null);
}
var RenderType_GridDemo_Host = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: [],
    data: { animation: [] }
});
function View_GridDemo_Host_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'ng-component', [], null, null, null, View_GridDemo_0, RenderType_GridDemo),
        import0.ɵdirectiveDef(1024, null, 0, import3.GridDemo, [], null, null)
    ], null, null);
}
export var GridDemoNgFactory = import0.ɵcreateComponentFactory('ng-component', import3.GridDemo, View_GridDemo_Host_0);
