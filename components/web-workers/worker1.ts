import {Component, View, bootstrapWebWorker} from 'angular2/web_worker/worker';

@Component({
    selector: 'worker1',
    template: `
    <div>
      <h2>Clock running in separate web worker</h2>
      <div>{{time}}</div>
    </div>
  `

})
export class Worker1 {

    time:string;

    onInit(){
        setInterval(() => {
            this.time = new Date().toLocaleTimeString();
        },1000);
    }
}

bootstrapWebWorker(Worker1);
