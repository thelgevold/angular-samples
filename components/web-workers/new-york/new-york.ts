import{Clock} from '../clock.ts';

import {Component, bootstrapWebWorker} from 'angular2/web_worker/worker';

@Component({
    selector: 'new-york',
    templateUrl: './clock.html'


})

export class NewYork extends Clock{
    city = 'New York';

    constructor(){
        super(-5);
    }
}

bootstrapWebWorker(NewYork);
