import {Component,Input, Output, EventEmitter, Attribute} from 'angular2/core';

@Component({
    template:`<div>Counter: {{counter}}</div>
              <div>Running total of counter values: {{sum}}</div>
              <div>Growing string: {{growingString}}</div>`,

    selector:'input-output'
})

export class InputOutput{

    private _growingString;

    @Output()
    stringChanged = new EventEmitter();

    @Input()
    counter:number;

    @Input('mySum')
    sum:number;

    @Input()
    set growingString(value){
        this._growingString = value.toLowerCase();
        this.stringChanged.next({value:'changed to ' + this._growingString});
    }
    get growingString(){
        return this._growingString;
    }

    constructor(@Attribute('plain') plain){
        console.log(plain);
    }

}