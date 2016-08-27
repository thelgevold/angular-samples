import { CustomerEventEmitter } from './customer-event-emitter';
export class PubSubService {
    constructor() {
        this.Stream = new CustomerEventEmitter();
    }
}
