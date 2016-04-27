import {Clock} from '../clock.ts';

import {Component} from 'angular2/web_worker/worker';
import {bootstrapApp} from "angular2/platform/worker_app";

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

bootstrapApp(La);
