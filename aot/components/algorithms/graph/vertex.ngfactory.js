import * as import0 from '@angular/core';
import * as import1 from '../../../../components/algorithms/graph/vertex';
import * as import2 from '../../../../components/algorithms/graph/edge-service';
var styles_Vertex = [];
export var RenderType_Vertex = import0.ɵcrt({
    encapsulation: 2,
    styles: styles_Vertex,
    data: {}
});
export function View_Vertex_0(l) {
    return import0.ɵvid(0, [
        import0.ɵqud(201326592, 1, { element: 0 }),
        (l()(), import0.ɵeld(0, [
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
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.setCoordinates() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import0.ɵeld(0, null, null, 1, 'span', [[
                'class',
                'vertex-text'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ]))
    ], null, function (ck, v) {
        var co = v.component;
        var currVal_0 = co.value;
        ck(v, 3, 0, currVal_0);
    });
}
function View_Vertex_Host_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(8388608, null, null, 1, 'vertex', [], null, null, null, View_Vertex_0, RenderType_Vertex)),
        import0.ɵdid(24576, null, 0, import1.Vertex, [
            import2.EdgeService,
            import0.ViewContainerRef
        ], null, null)
    ], null, null);
}
export var VertexNgFactory = import0.ɵccf('vertex', import1.Vertex, View_Vertex_Host_0, { value: 'value' }, {}, []);
