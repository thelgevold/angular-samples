import * as import0 from '@angular/core';
import * as import1 from '../../../../components/algorithms/graph/vertex';
import * as import2 from '../../../../components/algorithms/graph/edge-service';
var styles_Vertex = [];
export var RenderType_Vertex = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: styles_Vertex,
    data: { animation: [] }
});
export function View_Vertex_0() {
    return import0.ɵviewDef(0, [
        import0.ɵqueryDef(20480, 1, { element: 0 }),
        import0.ɵelementDef(0, [
            [
                1,
                0
            ],
            [
                'vertex',
                1
            ]
        ], null, 2, 'div', [[
                'class',
                'vertex'
            ]
        ], null, [[
                null,
                'click'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                var pd_0 = (comp.setCoordinates() !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            return allowDefault;
        }, null, null),
        import0.ɵelementDef(0, null, null, 1, 'span', [[
                'class',
                'vertex-text'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, [
            '',
            ''
        ])
    ], null, function (check, view) {
        var comp = view.component;
        var currVal_0 = comp.value;
        check(view, 3, 0, currVal_0);
    });
}
var RenderType_Vertex_Host = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: [],
    data: { animation: [] }
});
function View_Vertex_Host_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(256, null, null, 1, 'vertex', [], null, null, null, View_Vertex_0, RenderType_Vertex),
        import0.ɵdirectiveDef(1024, null, 0, import1.Vertex, [
            import2.EdgeService,
            import0.ViewContainerRef
        ], null, null)
    ], null, null);
}
export var VertexNgFactory = import0.ɵcreateComponentFactory('vertex', import1.Vertex, View_Vertex_Host_0);
