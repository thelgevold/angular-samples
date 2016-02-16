import {Component,Input, Output, EventEmitter, Attribute} from 'angular2/core';
import {Base} from './base';

@Component({
    template:`<h1>{{headline}}</h1>
              <div>Counter: {{counter}}</div>
              <div>Running total of counter values: {{sum}}</div>
              <div>Growing string: {{growingString}}</div>`,

    selector:'input-output'
})

export class InputOutput extends Base{

    private _growingString;

    @Output()
    stringChanged = new EventEmitter();

    @Input()
    counter:number;

    @Input('mySum')
    sum:number;

    @Input()
    headline:string;

    @Input()
    set growingString(value){
        this._growingString = value.toLowerCase();
        this.stringChanged.next({value:'changed to ' + this._growingString});
    }
    get growingString(){
        return this._growingString;
    }

    constructor(@Attribute('plain') plain){
        super();
        console.log(plain);
    }

}