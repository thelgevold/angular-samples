import {Component} from '@angular/core';
import {PubSubService} from './pub-sub-service';

@Component({
    selector: 'pub-sub',
    templateUrl: './pub-sub.html',
    providers:[PubSubService]
})

export class PubSub {

}