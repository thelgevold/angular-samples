import {Clock} from '../clock.ts';

import {Component} from 'angular2/web_worker/worker';
import {bootstrapApp} from "angular2/platform/worker_app";


@Component({
    selector: 'london',
    templateUrl: './clock.html'

})

export class London extends Clock{
    city = 'London';

    constructor(){
        super(0);
    }
}

bootstrapApp(London);

