import * as import0 from '@angular/core';
import * as import1 from '../../../components/react-integration/angular-2-host';
var styles_Angular2Host = [];
export var RenderType_Angular2Host = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: styles_Angular2Host,
    data: { animation: [] }
});
export function View_Angular2Host_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 9, 'div', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵelementDef(0, null, null, 1, 'h1', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['Integrating React with Angular 2.0']),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵelementDef(0, null, null, 1, 'p', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['This component integrates a FLUX based React component with Angular 2.0.\n       The treeview supports expanding and collapsing of nodes. Click the "icon" next to the node text to expand or\n       collapse a node.\n    ']),
        import0.ɵtextDef(null, ['\n    ']),
        import0.ɵelementDef(0, null, null, 0, 'div', [[
                'id',
                'react-tree-view'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n']),
        import0.ɵtextDef(null, ['\n\n']),
        import0.ɵelementDef(0, null, null, 2, 'h4', [], null, null, null, null, null),
        import0.ɵelementDef(0, null, null, 1, 'a', [[
                'href',
                'http://www.syntaxsuccess.com/viewarticle/integrating-react-with-angular-2.0'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['Read more here'])
    ], null, null);
}
var RenderType_Angular2Host_Host = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: [],
    data: { animation: [] }
});
function View_Angular2Host_Host_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'angular-2-host', [], null, null, null, View_Angular2Host_0, RenderType_Angular2Host),
        import0.ɵdirectiveDef(1025, null, 0, import1.Angular2Host, [], null, null)
    ], function (check, view) {
        check(view, 1, 0);
    }, null);
}
export var Angular2HostNgFactory = import0.ɵcreateComponentFactory('angular-2-host', import1.Angular2Host, View_Angular2Host_Host_0);
