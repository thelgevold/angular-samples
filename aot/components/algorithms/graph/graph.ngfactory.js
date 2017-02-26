import * as import0 from '@angular/core';
import * as import1 from './vertex.ngfactory';
import * as import2 from '../../../../components/algorithms/graph/vertex';
import * as import3 from '../../../../components/algorithms/graph/edge-service';
import * as import4 from '../../../../components/algorithms/graph/graph';
var styles_Graph = [];
export var RenderType_Graph = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: styles_Graph,
    data: { animation: [] }
});
export function View_Graph_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 46, 'div', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵelementDef(0, null, null, 1, 'h1', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['Create a Graph']),
        import0.ɵtextDef(null, ['\n\n    ']),
        import0.ɵelementDef(0, null, null, 1, 'div', [
            [
                'class',
                'alert alert-info'
            ],
            [
                'role',
                'alert'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n        Click any pair of nodes to connect them with an edge\n    ']),
        import0.ɵtextDef(null, ['\n\n    ']),
        import0.ɵelementDef(256, null, null, 1, 'vertex', [], null, null, null, import1.View_Vertex_0, import1.RenderType_Vertex),
        import0.ɵdirectiveDef(1024, null, 0, import2.Vertex, [
            import3.EdgeService,
            import0.ViewContainerRef
        ], { value: [
                0,
                'value'
            ]
        }, null),
        import0.ɵtextDef(null, ['\n\n    ']),
        import0.ɵelementDef(0, null, null, 34, 'table', [[
                'class',
                'graph-table'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n        ']),
        import0.ɵelementDef(0, null, null, 32, 'tbody', [], null, null, null, null, null),
        import0.ɵelementDef(0, null, null, 8, 'tr', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n            ']),
        import0.ɵelementDef(0, null, null, 2, 'td', [], null, null, null, null, null),
        import0.ɵelementDef(256, null, null, 1, 'vertex', [], null, null, null, import1.View_Vertex_0, import1.RenderType_Vertex),
        import0.ɵdirectiveDef(1024, null, 0, import2.Vertex, [
            import3.EdgeService,
            import0.ViewContainerRef
        ], { value: [
                0,
                'value'
            ]
        }, null),
        import0.ɵelementDef(0, null, null, 2, 'td', [], null, null, null, null, null),
        import0.ɵelementDef(256, null, null, 1, 'vertex', [], null, null, null, import1.View_Vertex_0, import1.RenderType_Vertex),
        import0.ɵdirectiveDef(1024, null, 0, import2.Vertex, [
            import3.EdgeService,
            import0.ViewContainerRef
        ], { value: [
                0,
                'value'
            ]
        }, null),
        import0.ɵtextDef(null, ['\n        ']),
        import0.ɵelementDef(0, null, null, 8, 'tr', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n            ']),
        import0.ɵelementDef(0, null, null, 2, 'td', [], null, null, null, null, null),
        import0.ɵelementDef(256, null, null, 1, 'vertex', [], null, null, null, import1.View_Vertex_0, import1.RenderType_Vertex),
        import0.ɵdirectiveDef(1024, null, 0, import2.Vertex, [
            import3.EdgeService,
            import0.ViewContainerRef
        ], { value: [
                0,
                'value'
            ]
        }, null),
        import0.ɵelementDef(0, null, null, 2, 'td', [], null, null, null, null, null),
        import0.ɵelementDef(256, null, null, 1, 'vertex', [], null, null, null, import1.View_Vertex_0, import1.RenderType_Vertex),
        import0.ɵdirectiveDef(1024, null, 0, import2.Vertex, [
            import3.EdgeService,
            import0.ViewContainerRef
        ], { value: [
                0,
                'value'
            ]
        }, null),
        import0.ɵtextDef(null, ['\n        ']),
        import0.ɵtextDef(null, ['\n        ']),
        import0.ɵelementDef(0, null, null, 11, 'tr', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n            ']),
        import0.ɵelementDef(0, null, null, 2, 'td', [], null, null, null, null, null),
        import0.ɵelementDef(256, null, null, 1, 'vertex', [], null, null, null, import1.View_Vertex_0, import1.RenderType_Vertex),
        import0.ɵdirectiveDef(1024, null, 0, import2.Vertex, [
            import3.EdgeService,
            import0.ViewContainerRef
        ], { value: [
                0,
                'value'
            ]
        }, null),
        import0.ɵelementDef(0, null, null, 2, 'td', [], null, null, null, null, null),
        import0.ɵelementDef(256, null, null, 1, 'vertex', [], null, null, null, import1.View_Vertex_0, import1.RenderType_Vertex),
        import0.ɵdirectiveDef(1024, null, 0, import2.Vertex, [
            import3.EdgeService,
            import0.ViewContainerRef
        ], { value: [
                0,
                'value'
            ]
        }, null),
        import0.ɵelementDef(0, null, null, 2, 'td', [], null, null, null, null, null),
        import0.ɵelementDef(256, null, null, 1, 'vertex', [], null, null, null, import1.View_Vertex_0, import1.RenderType_Vertex),
        import0.ɵdirectiveDef(1024, null, 0, import2.Vertex, [
            import3.EdgeService,
            import0.ViewContainerRef
        ], { value: [
                0,
                'value'
            ]
        }, null),
        import0.ɵtextDef(null, ['\n        ']),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵtextDef(null, ['\n']),
        import0.ɵtextDef(null, ['\n']),
        import0.ɵelementDef(0, null, null, 2, 'h4', [], null, null, null, null, null),
        import0.ɵelementDef(0, null, null, 1, 'a', [[
                'href',
                'http://www.syntaxsuccess.com/viewarticle/loading-components-dynamically-in-angular-2.0'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['Read more here'])
    ], function (check, view) {
        var comp = view.component;
        var currVal_0 = 'A';
        check(view, 9, 0, currVal_0);
        var currVal_1 = 'B';
        check(view, 18, 0, currVal_1);
        var currVal_2 = 'C';
        check(view, 21, 0, currVal_2);
        var currVal_3 = 'E';
        check(view, 27, 0, currVal_3);
        var currVal_4 = 'F';
        check(view, 30, 0, currVal_4);
        var currVal_5 = 'G';
        check(view, 37, 0, currVal_5);
        var currVal_6 = 'H';
        check(view, 40, 0, currVal_6);
        var currVal_7 = 'I';
        check(view, 43, 0, currVal_7);
    }, null);
}
var RenderType_Graph_Host = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: [],
    data: { animation: [] }
});
function View_Graph_Host_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 2, 'graph', [], null, null, null, View_Graph_0, RenderType_Graph),
        import0.ɵproviderDef(0, null, 1, import3.EdgeService, import3.EdgeService, []),
        import0.ɵdirectiveDef(1025, null, 0, import4.Graph, [
            import0.ComponentFactoryResolver,
            import3.EdgeService
        ], null, null)
    ], function (check, view) {
        check(view, 2, 0);
    }, null);
}
export var GraphNgFactory = import0.ɵcreateComponentFactory('graph', import4.Graph, View_Graph_Host_0);
