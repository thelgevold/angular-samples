import {Component,Input} from 'angular2/core';
import {InputOutput} from './input-output';

@Component({
    directives:[InputOutput],
    template:`<button (click)="update()">Update</button>
              <input-output plain="just a simple attribute"
                            fixedValue="another hard coded value"
                            (stringChanged)="myStringChanged($event)"
                            [mySum]="runningTotal"
                            [counter]="count"
                            [headline]="myTitle"
                            [growingString]="myString">
              </input-output>`
})

export class InputOutputDemo{

    count = 0;
    runningTotal = 0;
    myString = '';

    myTitle = 'Input/Output Demo';

    update(){
        this.count++;
        this.runningTotal += this.count;
        this.myString += 'A';
    }

    myStringChanged(val){
        console.log(val);
    }
}