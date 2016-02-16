import {Input, Output, EventEmitter} from 'angular2/core';

export class Base{

    @Output()
    baseEvent = new EventEmitter();

    @Input()
    headline:string;
}