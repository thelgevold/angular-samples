import{Clock} from '../clock.ts';

import {Component} from 'angular2/web_worker/worker';
import {bootstrapApp} from "angular2/platform/worker_app";

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

bootstrapApp(NewYork);

