import {Component} from 'angular2/core';

@Component({
    selector: 'adder',
    inputs: ['operands:operands'],
    template:'<span>{{operands.op1 + operands.op2}}</span>'
})

export class Adder {
    operands:any;
}