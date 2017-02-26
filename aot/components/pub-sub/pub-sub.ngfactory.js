import * as import0 from '@angular/core';
import * as import1 from './producer.ngfactory';
import * as import2 from '../../../components/pub-sub/producer';
import * as import3 from '../../../components/pub-sub/pub-sub-service';
import * as import4 from './consumer.ngfactory';
import * as import5 from '../../../components/pub-sub/consumer';
import * as import6 from '../../../components/pub-sub/pub-sub';
var styles_PubSub = [];
export var RenderType_PubSub = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: styles_PubSub,
    data: { animation: [] }
});
export function View_PubSub_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 1, 'h1', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['Pub Sub Using Observables']),
        import0.ɵtextDef(null, ['\n\n']),
        import0.ɵelementDef(0, null, null, 1, 'producer', [], null, null, null, import1.View_Producer_0, import1.RenderType_Producer),
        import0.ɵdirectiveDef(1024, null, 0, import2.Producer, [import3.PubSubService], null, null),
        import0.ɵtextDef(null, ['\n\n']),
        import0.ɵelementDef(0, null, null, 0, 'br', [], null, null, null, null, null),
        import0.ɵelementDef(0, null, null, 0, 'br', [], null, null, null, null, null),
        import0.ɵtextDef(null, ['\n']),
        import0.ɵelementDef(0, null, null, 1, 'consumer', [], null, null, null, import4.View_Consumer_0, import4.RenderType_Consumer),
        import0.ɵdirectiveDef(1025, null, 0, import5.Consumer, [import3.PubSubService], null, null),
        import0.ɵtextDef(null, ['\n\n']),
        import0.ɵelementDef(0, null, null, 2, 'h4', [], null, null, null, null, null),
        import0.ɵelementDef(0, null, null, 1, 'a', [[
                'href',
                'http://www.syntaxsuccess.com/viewarticle/pub-sub-in-angular-2.0'
            ]
        ], null, null, null, null, null),
        import0.ɵtextDef(null, ['Read more here'])
    ], function (check, view) {
        var comp = view.component;
        check(view, 10, 0);
    }, null);
}
var RenderType_PubSub_Host = import0.ɵcreateRendererTypeV2({
    encapsulation: 2,
    styles: [],
    data: { animation: [] }
});
function View_PubSub_Host_0() {
    return import0.ɵviewDef(0, [
        import0.ɵelementDef(0, null, null, 2, 'pub-sub', [], null, null, null, View_PubSub_0, RenderType_PubSub),
        import0.ɵdirectiveDef(1024, null, 0, import6.PubSub, [], null, null),
        import0.ɵproviderDef(32768, null, 1, import3.PubSubService, import3.PubSubService, [])
    ], null, null);
}
export var PubSubNgFactory = import0.ɵcreateComponentFactory('pub-sub', import6.PubSub, View_PubSub_Host_0);
