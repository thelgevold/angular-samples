import * as import0 from '@angular/core';
import * as import1 from '../../../components/bound-textbox/bound-textbox';
var styles_BoundTextbox = [];
export var RenderType_BoundTextbox = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: styles_BoundTextbox,
    data: { animation: [] }
});
export function View_BoundTextbox_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'h1', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['Bound Textbox']),
        import0.ɵelementDef(0, null, null, 0, 'input', [], [[
                3,
                'value',
                0
            ]
        ], [[
                null,
                'keyup'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('keyup' === eventName)) {
                var pd_0 = (comp.typing($event) !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            return allowDefault;
        }, null, null),
        import0.ɵelementDef(0, null, null, 1, 'span', [], null, null, null, null, null),
        import0.ɵtextDef(null, [
            '',
            ''
        ])
    ], null, function (check, view) {
        var comp = view.component;
        var currVal_0 = comp.text;
        check(view, 2, 0, currVal_0);
        var currVal_1 = comp.text;
        check(view, 4, 0, currVal_1);
    });
}
var RenderType_BoundTextbox_Host = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: [],
    data: { animation: [] }
});
function View_BoundTextbox_Host_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'bound-textbox', [], null, null, null, View_BoundTextbox_0, RenderType_BoundTextbox),
        import0.ɵdirectiveDef(1024, null, 0, import1.BoundTextbox, [], null, null)
    ], null, null);
}
export var BoundTextboxNgFactory = import0.ɵcreateComponentFactory('bound-textbox', import1.BoundTextbox, View_BoundTextbox_Host_0);
