import {Component,OnInit} from 'angular2/core';
import {PubSubService} from './pub-sub-service';
import {Customer} from './customer';

@Component({
    selector: 'consumer',
    templateUrl: './components/pub-sub/consumer.html'
})

export class Consumer implements OnInit{

    processed = [];

    constructor(private pubSubService:PubSubService){
    }

    ngOnInit(){
        this.pubSubService.Stream.subscribe(customer => this.processCustomer(customer));
    }

    processCustomer(customer){
        this.processed.push(customer);
    }

    stopProcessing(){
        this.pubSubService.Stream.unsubscribe();
    }
}