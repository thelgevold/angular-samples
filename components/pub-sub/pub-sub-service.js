var customer_event_emitter_1 = require('./customer-event-emitter');
var PubSubService = (function () {
    function PubSubService() {
        this.Stream = new customer_event_emitter_1.CustomerEventEmitter();
    }
    return PubSubService;
})();
exports.PubSubService = PubSubService;
