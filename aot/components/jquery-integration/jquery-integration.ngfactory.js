import * as import0 from '@angular/core';
import * as import1 from '../../../components/jquery-integration/jquery-integration';
var styles_JqueryIntegration = [];
export var RenderType_JqueryIntegration = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: styles_JqueryIntegration,
    data: { animation: [] }
});
export function View_JqueryIntegration_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'h1', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['Integrating jQuery with Angular 2.0']),
        import0.ɵtextDef(null, ['\n\n']),
        import0.ɵelementDef(0, null, null, 1, 'div', [[
                'class',
                'moving-box'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n    Drag this box around\n']),
        import0.ɵtextDef(null, ['\n\n']),
        import0.ɵelementDef(0, null, null, 2, 'h4', [], null, null, null, null, null),
        import0.ɵelementDef(0, null, null, 1, 'a', [[
                'href',
                'http://www.syntaxsuccess.com/viewarticle/using-jquery-with-angular-2.0'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['Read more here'])
    ], null, null);
}
var RenderType_JqueryIntegration_Host = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: [],
    data: { animation: [] }
});
function View_JqueryIntegration_Host_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'jquery-integration', [], null, null, null, View_JqueryIntegration_0, RenderType_JqueryIntegration),
        import0.ɵdirectiveDef(1025, null, 0, import1.JqueryIntegration, [import0.ElementRef], null, null)
    ], function (check, view) {
        check(view, 1, 0);
    }, null);
}
export var JqueryIntegrationNgFactory = import0.ɵcreateComponentFactory('jquery-integration', import1.JqueryIntegration, View_JqueryIntegration_Host_0);
