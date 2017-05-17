import * as import0 from '@angular/core';
import * as import1 from '@angular/common';
import * as import2 from '../../../../components/algorithms/graph/edge';
var styles_Edge = [];
export var RenderType_Edge = import0.ɵcrt({
    encapsulation: 2,
    styles: styles_Edge,
    data: {}
});
export function View_Edge_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [[
                'class',
                'edge'
            ]
        ], null, null, null, null, null)),
        import0.ɵdid(278528, null, 0, import1.NgStyle, [
            import0.KeyValueDiffers,
            import0.ElementRef,
            import0.Renderer
        ], { ngStyle: [
                0,
                'ngStyle'
            ]
        }, null)
    ], function (ck, v) {
        var co = v.component;
        var currVal_0 = co.style;
        ck(v, 1, 0, currVal_0);
    }, null);
}
function View_Edge_Host_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'edge', [], null, null, null, View_Edge_0, RenderType_Edge)),
        import0.ɵdid(49152, null, 0, import2.Edge, [], null, null)
    ], null, null);
}
export var EdgeNgFactory = import0.ɵccf('edge', import2.Edge, View_Edge_Host_0, {}, {}, []);
