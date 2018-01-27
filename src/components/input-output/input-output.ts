import {Component,Input, Output, EventEmitter, Attribute, OnInit, ElementRef} from '@angular/core';

@Component({
    template:`<h1>{{headline}}</h1>
              <div>Counter: {{counter}}</div>
              <div>Running total of counter values: {{sum}}</div>
              <div>Growing string: {{growingString}}</div>`,

    selector:'input-output'
})

export class InputOutput implements OnInit{

    private _growingString;

    @Output()
    stringChanged = new EventEmitter();

    el:ElementRef;

    @Input()
    counter:number;

    @Input()
    fixedValue:string;

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

    constructor(el:ElementRef,@Attribute('plain') plain){
        console.log(plain);
        this.el = el;

    }

    ngOnInit(){
        console.log(this.fixedValue);
    }

}