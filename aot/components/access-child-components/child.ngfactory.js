import * as import0 from '@angular/core';
import * as import1 from '../../../components/access-child-components/child';
var styles_Child = [];
export var RenderType_Child = import0.ɵcrt({
    encapsulation: 2,
    styles: styles_Child,
    data: {}
});
export function View_Child_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ]))
    ], null, function (ck, v) {
        var co = v.component;
        var currVal_0 = co.time;
        ck(v, 1, 0, currVal_0);
    });
}
function View_Child_Host_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'child', [], null, null, null, View_Child_0, RenderType_Child)),
        import0.ɵdid(49152, null, 0, import1.Child, [], null, null)
    ], null, null);
}
export var ChildNgFactory = import0.ɵccf('child', import1.Child, View_Child_Host_0, {}, {}, []);
