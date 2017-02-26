import * as import0 from '@angular/core';
import * as import1 from '../../../components/access-child-components/parent';
import * as import2 from './child.ngfactory';
import * as import3 from '../../../components/access-child-components/child';
var styles_Parent = [];
export var RenderType_Parent = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: styles_Parent,
    data: { animation: [] }
});
export function View_Parent_0() {
    return import0.ɵviewDef(0, [
        import0.ɵqueryDef(20480, 1, { viewChildren: 1 }),
        import0.ɵelementDef(0, null, null, 10, 'div', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n                ']),
        import0.ɵelementDef(0, null, null, 1, 'button', [], null, [[
                null,
                'click'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                var pd_0 = (comp.updateViewChildren() !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            return allowDefault;
        }, null, null),
        import0.ɵtextDef(null, ['Update Time via ViewChildren']),
        import0.ɵtextDef(null, ['\n                ']),
        import0.ɵelementDef(0, null, null, 1, 'child', [], null, null, null, import2.View_Child_0, import2.RenderType_Child),
        import0.ɵdirectiveDef(1024, [[
                1,
                4
            ]
        ], 0, import3.Child, [], null, null),
        import0.ɵtextDef(null, ['\n                ']),
        import0.ɵelementDef(0, null, null, 1, 'child', [], null, null, null, import2.View_Child_0, import2.RenderType_Child),
        import0.ɵdirectiveDef(1024, [[
                1,
                4
            ]
        ], 0, import3.Child, [], null, null),
        import0.ɵtextDef(null, ['\n              '])
    ], null, null);
}
var RenderType_Parent_Host = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: [],
    data: { animation: [] }
});
function View_Parent_Host_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'parent', [], null, null, null, View_Parent_0, RenderType_Parent),
        import0.ɵdirectiveDef(1024, null, 0, import1.Parent, [], null, null)
    ], null, null);
}
export var ParentNgFactory = import0.ɵcreateComponentFactory('parent', import1.Parent, View_Parent_Host_0);
