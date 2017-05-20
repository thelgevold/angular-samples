import {Component} from '@angular/core';
import {PubSubService} from './pub-sub-service';

@Component({
    selector: 'pub-sub',
    template: `
    <h1>Pub Sub Using Observables</h1>

    <producer></producer>

    <br/><br/>
    <consumer></consumer>

    <h4><a href="http://www.syntaxsuccess.com/viewarticle/pub-sub-in-angular-2.0">Read more here</a></h4>
    `,
    providers:[PubSubService]
})

export class PubSub {

}