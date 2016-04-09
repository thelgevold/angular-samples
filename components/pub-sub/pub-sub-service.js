System.register(['./customer-event-emitter'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var customer_event_emitter_1;
    var PubSubService;
    return {
        setters:[
            function (customer_event_emitter_1_1) {
                customer_event_emitter_1 = customer_event_emitter_1_1;
            }],
        execute: function() {
            PubSubService = (function () {
                function PubSubService() {
                    this.Stream = new customer_event_emitter_1.CustomerEventEmitter();
                }
                return PubSubService;
            }());
            exports_1("PubSubService", PubSubService);
        }
    }
});
