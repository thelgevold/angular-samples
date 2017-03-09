import * as import0 from '@angular/core';
import * as import1 from '../message.component';
import * as import2 from '../upgrade-pub-sub.service';
var styles_MessageComponent = [];
export var RenderType_MessageComponent = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: styles_MessageComponent,
    data: { animation: [] }
});
export function View_MessageComponent_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'div', [], null, null, null, null, null),
        import0.ɵtextDef(null, [
            '',
            ''
        ]),
        import0.ɵtextDef(null, ['\n             ']),
        import0.ɵelementDef(0, null, null, 1, 'button', [], null, [[
                null,
                'click'
            ]
        ], function (view, eventName, $event) {
            var allowDefault = true;
            var comp = view.component;
            if (('click' === eventName)) {
                var pd_0 = (comp.sendMessage() !== false);
                allowDefault = (pd_0 && allowDefault);
            }
            return allowDefault;
        }, null, null),
        import0.ɵtextDef(null, ['Send Message From New Angular']),
        import0.ɵtextDef(null, [' \n             '])
    ], null, function (check, view) {
        var comp = view.component;
        var currVal_0 = comp.message;
        check(view, 1, 0, currVal_0);
    });
}
var RenderType_MessageComponent_Host = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: [],
    data: { animation: [] }
});
function View_MessageComponent_Host_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'ng-component', [], null, null, null, View_MessageComponent_0, RenderType_MessageComponent),
        import0.ɵdirectiveDef(1025, null, 0, import1.MessageComponent, [import2.UpgradePubSubService], null, null)
    ], function (check, view) {
        check(view, 1, 0);
    }, null);
}
export var MessageComponentNgFactory = import0.ɵcreateComponentFactory('ng-component', import1.MessageComponent, View_MessageComponent_Host_0);
