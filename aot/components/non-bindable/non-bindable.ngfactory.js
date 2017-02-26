import * as import0 from '@angular/core';
import * as import1 from '../../../components/non-bindable/non-bindable';
var styles_IgnoreBindings = [];
export var RenderType_IgnoreBindings = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: styles_IgnoreBindings,
    data: { animation: [] }
});
export function View_IgnoreBindings_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'h1', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['Ignoring Bindings']),
        import0.ɵtextDef(null, ['\n\n']),
        import0.ɵelementDef(0, null, null, 4, 'div', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['Ignored Binding:\n    ']),
        import0.ɵelementDef(0, null, null, 1, 'div', [[
                'ngNonBindable',
                ''
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['{{10 * 10}}']),
        import0.ɵtextDef(null, ['\n']),
        import0.ɵtextDef(null, ['\n\n']),
        import0.ɵelementDef(0, null, null, 4, 'div', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n    Executed Binding:\n    ']),
        import0.ɵelementDef(0, null, null, 1, 'div', [], null, null, null, null, null),
        import0.ɵtextDef(null, [
            '',
            ''
        ]),
        import0.ɵtextDef(null, ['\n']),
        import0.ɵtextDef(null, ['\n\n'])
    ], null, function (check, view) {
        var comp = view.component;
        var currVal_0 = (10 * 10);
        check(view, 12, 0, currVal_0);
    });
}
var RenderType_IgnoreBindings_Host = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: [],
    data: { animation: [] }
});
function View_IgnoreBindings_Host_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'ignore-bindings', [], null, null, null, View_IgnoreBindings_0, RenderType_IgnoreBindings),
        import0.ɵdirectiveDef(1024, null, 0, import1.IgnoreBindings, [], null, null)
    ], null, null);
}
export var IgnoreBindingsNgFactory = import0.ɵcreateComponentFactory('ignore-bindings', import1.IgnoreBindings, View_IgnoreBindings_Host_0);
