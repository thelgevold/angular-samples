import { CustomerEventEmitter } from './customer-event-emitter';
export var PubSubService = (function () {
    function PubSubService() {
        this.Stream = new CustomerEventEmitter();
    }
    return PubSubService;
}());
