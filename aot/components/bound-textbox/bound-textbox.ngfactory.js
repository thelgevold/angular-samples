import * as import0 from '@angular/core';
import * as import1 from '../../../components/bound-textbox/bound-textbox';
var styles_BoundTextbox = [];
export var RenderType_BoundTextbox = import0.ɵcrt({
    encapsulation: 2,
    styles: styles_BoundTextbox,
    data: {}
});
export function View_BoundTextbox_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'h1', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Bound Textbox'])),
        (l()(), import0.ɵeld(0, null, null, 0, 'input', [], [[
                8,
                'value',
                0
            ]
        ], [[
                null,
                'keyup'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('keyup' === en)) {
                var pd_0 = (co.typing($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import0.ɵeld(0, null, null, 1, 'span', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ]))
    ], null, function (ck, v) {
        var co = v.component;
        var currVal_0 = co.text;
        ck(v, 2, 0, currVal_0);
        var currVal_1 = co.text;
        ck(v, 4, 0, currVal_1);
    });
}
function View_BoundTextbox_Host_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'bound-textbox', [], null, null, null, View_BoundTextbox_0, RenderType_BoundTextbox)),
        import0.ɵdid(24576, null, 0, import1.BoundTextbox, [], null, null)
    ], null, null);
}
export var BoundTextboxNgFactory = import0.ɵccf('bound-textbox', import1.BoundTextbox, View_BoundTextbox_Host_0, {}, {}, []);
