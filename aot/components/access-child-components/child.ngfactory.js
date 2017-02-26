import * as import0 from '@angular/core';
import * as import1 from '../../../components/access-child-components/child';
var styles_Child = [];
export var RenderType_Child = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: styles_Child,
    data: { animation: [] }
});
export function View_Child_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'div', [], null, null, null, null, null),
        import0.ɵtextDef(null, [
            '',
            ''
        ])
    ], null, function (check, view) {
        var comp = view.component;
        var currVal_0 = comp.time;
        check(view, 1, 0, currVal_0);
    });
}
var RenderType_Child_Host = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: [],
    data: { animation: [] }
});
function View_Child_Host_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'child', [], null, null, null, View_Child_0, RenderType_Child),
        import0.ɵdirectiveDef(1024, null, 0, import1.Child, [], null, null)
    ], null, null);
}
export var ChildNgFactory = import0.ɵcreateComponentFactory('child', import1.Child, View_Child_Host_0);
