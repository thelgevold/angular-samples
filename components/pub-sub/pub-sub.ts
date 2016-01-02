import {Component} from 'angular2/core';
import {Producer} from './producer';
import {Consumer} from './consumer';
import {PubSubService} from './pub-sub-service';

@Component({
    selector: 'pub-sub',
    templateUrl: './components/pub-sub/pub-sub.html',
    directives:[Producer,Consumer],
    providers:[PubSubService]
})

export class PubSub {

}