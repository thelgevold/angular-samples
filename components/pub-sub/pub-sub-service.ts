import {EventEmitter} from 'angular2/core';
import {Customer} from './customer';

export class PubSubService{

    Stream:EventEmitter<Customer>;

    constructor(){
        this.Stream = new EventEmitter<Customer>();
    }

}