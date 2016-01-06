import {CustomerEventEmitter} from './customer-event-emitter';

export class PubSubService{

    Stream:CustomerEventEmitter;

    constructor(){
        this.Stream = new CustomerEventEmitter();
    }

}