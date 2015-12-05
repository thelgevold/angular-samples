import {Clock} from '../clock.ts';

import {Component} from 'angular2/web_worker/worker';
import {platform} from "angular2/core";
import {WORKER_APP_PLATFORM, setupWebWorker} from "angular2/platform/worker_app";

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

platform([WORKER_APP_PLATFORM])
    .asyncApplication(setupWebWorker)
    .then((ref) => ref.bootstrap(London));
