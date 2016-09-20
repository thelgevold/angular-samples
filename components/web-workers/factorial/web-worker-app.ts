import {Component} from '@angular/core';

const FACTORIAL_CHANNEL = "FACTORIAL";

import {NgModule} from '@angular/core';
import {WorkerAppModule} from '@angular/platform-webworker';
import {platformWorkerAppDynamic} from '@angular/platform-webworker-dynamic';
import {ServiceMessageBrokerFactory, PRIMITIVE} from '@angular/platform-webworker';

@Component({
  selector: 'app',
  template:'<div>Web worker loaded</div>'
})
class Worker {
  time: string;
  constructor(private _serviceBrokerFactory: ServiceMessageBrokerFactory){

    var broker = _serviceBrokerFactory.createMessageBroker(FACTORIAL_CHANNEL, false);
    broker.registerMethod("factorial", [PRIMITIVE], this.calculate, PRIMITIVE);
  }

  private calculate(val: string) {
    if(val) {
      let result = factorial(parseInt(val));
      return Promise.resolve(result);
    }
    return Promise.resolve('');
  }
}

@NgModule({imports: [WorkerAppModule], bootstrap: [Worker], declarations: [Worker]})
class WorkerModule {
}

platformWorkerAppDynamic().bootstrapModule(WorkerModule);

function factorial(num) {

  if (num === 0) {
    return 1;
  }
  else {
    return (num * factorial(num - 1));
  }
}