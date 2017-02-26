import { CustomerEventEmitter } from './customer-event-emitter';
var PubSubService = (function () {
    function PubSubService() {
        this.Stream = new CustomerEventEmitter();
    }
    return PubSubService;
}());
export { PubSubService };
