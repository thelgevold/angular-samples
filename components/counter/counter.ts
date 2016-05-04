import {Component} from '@angular/core';

@Component({
    selector: 'counter',
    inputs: ['value'],
    template:'<button (click)="increment()">Increment Value</button>'
})

export class Counter {

    value:any;

    increment(){
        this.value.previous = this.value.current;
        this.value.current++;
    }

}