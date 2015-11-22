import{Clock} from '../clock.ts';

import {Component, bootstrapWebWorker} from 'angular2/web_worker/worker';

@Component({
    selector: 'london',
    template: `
    <div>
      <h2>London</h2>
      <div>{{time}}</div>
    </div>
  `

})

export class NewYork extends Clock{
}

bootstrapWebWorker(NewYork);
