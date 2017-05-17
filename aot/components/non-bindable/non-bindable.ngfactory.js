import * as import0 from '@angular/core';
import * as import1 from '../../../components/non-bindable/non-bindable';
var styles_IgnoreBindings = [];
export var RenderType_IgnoreBindings = import0.ɵcrt({
    encapsulation: 2,
    styles: styles_IgnoreBindings,
    data: {}
});
export function View_IgnoreBindings_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'h1', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Ignoring Bindings'])),
        (l()(), import0.ɵted(null, ['\n\n'])),
        (l()(), import0.ɵeld(0, null, null, 4, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Ignored Binding:\n    '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [[
                'ngNonBindable',
                ''
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['{{10 * 10}}'])),
        (l()(), import0.ɵted(null, ['\n'])),
        (l()(), import0.ɵted(null, ['\n\n'])),
        (l()(), import0.ɵeld(0, null, null, 4, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n    Executed Binding:\n    '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ])),
        (l()(), import0.ɵted(null, ['\n'])),
        (l()(), import0.ɵted(null, ['\n\n']))
    ], null, function (ck, v) {
        var currVal_0 = (10 * 10);
        ck(v, 12, 0, currVal_0);
    });
}
function View_IgnoreBindings_Host_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'ignore-bindings', [], null, null, null, View_IgnoreBindings_0, RenderType_IgnoreBindings)),
        import0.ɵdid(49152, null, 0, import1.IgnoreBindings, [], null, null)
    ], null, null);
}
export var IgnoreBindingsNgFactory = import0.ɵccf('ignore-bindings', import1.IgnoreBindings, View_IgnoreBindings_Host_0, {}, {}, []);
