import * as import0 from '@angular/core';
import * as import1 from '../../../components/jquery-integration/jquery-integration';
var styles_JqueryIntegration = [];
export var RenderType_JqueryIntegration = import0.ɵcrt({
    encapsulation: 2,
    styles: styles_JqueryIntegration,
    data: {}
});
export function View_JqueryIntegration_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'h1', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Integrating jQuery with Angular 2.0'])),
        (l()(), import0.ɵted(null, ['\n\n'])),
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [[
                'class',
                'moving-box'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n    Drag this box around\n'])),
        (l()(), import0.ɵted(null, ['\n\n'])),
        (l()(), import0.ɵeld(0, null, null, 2, 'h4', [], null, null, null, null, null)),
        (l()(), import0.ɵeld(0, null, null, 1, 'a', [[
                'href',
                'http://www.syntaxsuccess.com/viewarticle/using-jquery-with-angular-2.0'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Read more here']))
    ], null, null);
}
function View_JqueryIntegration_Host_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'jquery-integration', [], null, null, null, View_JqueryIntegration_0, RenderType_JqueryIntegration)),
        import0.ɵdid(57344, null, 0, import1.JqueryIntegration, [import0.ElementRef], null, null)
    ], function (ck, v) {
        ck(v, 1, 0);
    }, null);
}
export var JqueryIntegrationNgFactory = import0.ɵccf('jquery-integration', import1.JqueryIntegration, View_JqueryIntegration_Host_0, {}, {}, []);
