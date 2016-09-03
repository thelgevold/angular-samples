import {Component,OnInit} from '@angular/core';
import {PubSubService} from './pub-sub-service';
import {Customer} from './customer';

@Component({
    selector: 'consumer',
    templateUrl: './consumer.html'
})

export class Consumer implements OnInit{

    processed = [];
    subscription = null;

    constructor(private pubSubService:PubSubService){
    }

    ngOnInit(){
        this.subscription = this.pubSubService.Stream.subscribe(customer => this.processCustomer(customer));
    }

    processCustomer(customer){
        this.processed.push(customer);
    }

    stopProcessing(){
        this.subscription.unsubscribe();
    }
}