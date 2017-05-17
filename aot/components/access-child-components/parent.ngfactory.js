import * as import0 from '@angular/core';
import * as import1 from '../../../components/access-child-components/parent';
import * as import2 from './child.ngfactory';
import * as import3 from '../../../components/access-child-components/child';
var styles_Parent = [];
export var RenderType_Parent = import0.ɵcrt({
    encapsulation: 2,
    styles: styles_Parent,
    data: {}
});
export function View_Parent_0(l) {
    return import0.ɵvid(0, [
        import0.ɵqud(671088640, 1, { viewChildren: 1 }),
        (l()(), import0.ɵeld(0, null, null, 10, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'button', [], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.updateViewChildren() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import0.ɵted(null, ['Update Time via ViewChildren'])),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'child', [], null, null, null, import2.View_Child_0, import2.RenderType_Child)),
        import0.ɵdid(49152, [[
                1,
                4
            ]
        ], 0, import3.Child, [], null, null),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'child', [], null, null, null, import2.View_Child_0, import2.RenderType_Child)),
        import0.ɵdid(49152, [[
                1,
                4
            ]
        ], 0, import3.Child, [], null, null),
        (l()(), import0.ɵted(null, ['\n              ']))
    ], null, null);
}
function View_Parent_Host_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'parent', [], null, null, null, View_Parent_0, RenderType_Parent)),
        import0.ɵdid(49152, null, 0, import1.Parent, [], null, null)
    ], null, null);
}
export var ParentNgFactory = import0.ɵccf('parent', import1.Parent, View_Parent_Host_0, {}, {}, []);
