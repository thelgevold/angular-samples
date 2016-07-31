import {Component} from '@angular/core';
import {ServiceMessageBrokerFactory, PRIMITIVE} from '@angular/platform-browser';
import {bootstrapWorkerApp} from '@angular/platform-browser-dynamic';

const FACTORIAL_CHANNEL = "FACTORIAL";

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
    let result = factorial(parseInt(val));
    return Promise.resolve(result);
  }
}

bootstrapWorkerApp(Worker).catch(err => console.error(err));

function factorial(num) {

  if (num === 0) {
    return 1;
  }
  else {
    return (num * factorial(num - 1));
  }
}