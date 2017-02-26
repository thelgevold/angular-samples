import * as import0 from '@angular/core';
import * as import1 from '@angular/common';
import * as import2 from '../../../../components/algorithms/graph/edge';
var styles_Edge = [];
export var RenderType_Edge = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: styles_Edge,
    data: { animation: [] }
});
export function View_Edge_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'div', [[
                'class',
                'edge'
            ]
        ], null, null, null, null, null),
        import0.ɵdirectiveDef(4, null, 0, import1.NgStyle, [
            import0.KeyValueDiffers,
            import0.ElementRef,
            import0.Renderer
        ], { ngStyle: [
                0,
                'ngStyle'
            ]
        }, null)
    ], function (check, view) {
        var comp = view.component;
        var currVal_0 = comp.style;
        check(view, 1, 0, currVal_0);
    }, null);
}
var RenderType_Edge_Host = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: [],
    data: { animation: [] }
});
function View_Edge_Host_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'edge', [], null, null, null, View_Edge_0, RenderType_Edge),
        import0.ɵdirectiveDef(1024, null, 0, import2.Edge, [], null, null)
    ], null, null);
}
export var EdgeNgFactory = import0.ɵcreateComponentFactory('edge', import2.Edge, View_Edge_Host_0);
