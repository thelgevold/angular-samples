import { Component, Input, Output, EventEmitter, Attribute, ElementRef } from '@angular/core';
export class InputOutput {
    constructor(el, plain) {
        this.stringChanged = new EventEmitter();
        console.log(plain);
        this.el = el;
    }
    set growingString(value) {
        this._growingString = value.toLowerCase();
        this.stringChanged.next({ value: 'changed to ' + this._growingString });
    }
    get growingString() {
        return this._growingString;
    }
    ngOnInit() {
        console.log(this.fixedValue);
    }
}
InputOutput.decorators = [
    { type: Component, args: [{
                template: `<h1>{{headline}}</h1>
              <div>Counter: {{counter}}</div>
              <div>Running total of counter values: {{sum}}</div>
              <div>Growing string: {{growingString}}</div>`,
                selector: 'input-output'
            },] },
];
InputOutput.ctorParameters = [
    { type: ElementRef, },
    { type: undefined, decorators: [{ type: Attribute, args: ['plain',] },] },
];
InputOutput.propDecorators = {
    'stringChanged': [{ type: Output },],
    'counter': [{ type: Input },],
    'fixedValue': [{ type: Input },],
    'sum': [{ type: Input, args: ['mySum',] },],
    'headline': [{ type: Input },],
    'growingString': [{ type: Input },],
};
