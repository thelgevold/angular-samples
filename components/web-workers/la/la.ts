import {Clock} from '../clock.ts';

import {Component, bootstrapWebWorker} from 'angular2/web_worker/worker';

@Component({
    selector: 'la',
    templateUrl: './clock.html'
})

export class La extends Clock{
    city = 'Los Angeles';

    constructor(){
        super(-8);
    }
}

bootstrapWebWorker(La);