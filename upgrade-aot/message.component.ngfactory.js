import * as import0 from '@angular/core';
import * as import1 from '../message.component';
import * as import2 from '../upgrade-pub-sub.service';
var styles_MessageComponent = [];
export var RenderType_MessageComponent = import0.ɵcrt({
    encapsulation: 2,
    styles: styles_MessageComponent,
    data: {}
});
export function View_MessageComponent_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ])),
        (l()(), import0.ɵted(null, ['\n             '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'button', [], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.sendMessage() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import0.ɵted(null, ['Send Message From New Angular'])),
        (l()(), import0.ɵted(null, [' \n             ']))
    ], null, function (ck, v) {
        var co = v.component;
        var currVal_0 = co.message;
        ck(v, 1, 0, currVal_0);
    });
}
function View_MessageComponent_Host_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'ng-component', [], null, null, null, View_MessageComponent_0, RenderType_MessageComponent)),
        import0.ɵdid(114688, null, 0, import1.MessageComponent, [import2.UpgradePubSubService], null, null)
    ], function (ck, v) {
        ck(v, 1, 0);
    }, null);
}
export var MessageComponentNgFactory = import0.ɵccf('ng-component', import1.MessageComponent, View_MessageComponent_Host_0, {}, {}, []);
