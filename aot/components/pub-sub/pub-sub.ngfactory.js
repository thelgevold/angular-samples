import * as import0 from '@angular/core';
import * as import1 from './producer.ngfactory';
import * as import2 from '../../../components/pub-sub/producer';
import * as import3 from '../../../components/pub-sub/pub-sub-service';
import * as import4 from './consumer.ngfactory';
import * as import5 from '../../../components/pub-sub/consumer';
import * as import6 from '../../../components/pub-sub/pub-sub';
var styles_PubSub = [];
export var RenderType_PubSub = import0.ɵcrt({
    encapsulation: 2,
    styles: styles_PubSub,
    data: {}
});
export function View_PubSub_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'h1', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Pub Sub Using Observables'])),
        (l()(), import0.ɵted(null, ['\n\n'])),
        (l()(), import0.ɵeld(0, null, null, 1, 'producer', [], null, null, null, import1.View_Producer_0, import1.RenderType_Producer)),
        import0.ɵdid(24576, null, 0, import2.Producer, [import3.PubSubService], null, null),
        (l()(), import0.ɵted(null, ['\n\n'])),
        (l()(), import0.ɵeld(0, null, null, 0, 'br', [], null, null, null, null, null)),
        (l()(), import0.ɵeld(0, null, null, 0, 'br', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n'])),
        (l()(), import0.ɵeld(0, null, null, 1, 'consumer', [], null, null, null, import4.View_Consumer_0, import4.RenderType_Consumer)),
        import0.ɵdid(57344, null, 0, import5.Consumer, [import3.PubSubService], null, null),
        (l()(), import0.ɵted(null, ['\n\n'])),
        (l()(), import0.ɵeld(0, null, null, 2, 'h4', [], null, null, null, null, null)),
        (l()(), import0.ɵeld(0, null, null, 1, 'a', [[
                'href',
                'http://www.syntaxsuccess.com/viewarticle/pub-sub-in-angular-2.0'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Read more here']))
    ], function (ck, v) {
        ck(v, 10, 0);
    }, null);
}
function View_PubSub_Host_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 2, 'pub-sub', [], null, null, null, View_PubSub_0, RenderType_PubSub)),
        import0.ɵdid(24576, null, 0, import6.PubSub, [], null, null),
        import0.ɵprd(2304, null, import3.PubSubService, import3.PubSubService, [])
    ], null, null);
}
export var PubSubNgFactory = import0.ɵccf('pub-sub', import6.PubSub, View_PubSub_Host_0, {}, {}, []);
