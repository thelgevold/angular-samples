import{Clock} from '../clock.ts';

import {Component, bootstrapWebWorker} from 'angular2/web_worker/worker';

@Component({
    selector: 'london',
    templateUrl: './clock.html'

})

export class NewYork extends Clock{
    city = 'London';

    constructor(){
        super(0);
    }
}

bootstrapWebWorker(NewYork);
