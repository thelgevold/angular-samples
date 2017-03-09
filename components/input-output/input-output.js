import { Component, Input, Output, EventEmitter, Attribute, ElementRef } from '@angular/core';
var InputOutput = (function () {
    function InputOutput(el, plain) {
        this.stringChanged = new EventEmitter();
        console.log(plain);
        this.el = el;
    }
    Object.defineProperty(InputOutput.prototype, "growingString", {
        get: function () {
            return this._growingString;
        },
        set: function (value) {
            this._growingString = value.toLowerCase();
            this.stringChanged.next({ value: 'changed to ' + this._growingString });
        },
        enumerable: true,
        configurable: true
    });
    InputOutput.prototype.ngOnInit = function () {
        console.log(this.fixedValue);
    };
    return InputOutput;
}());
export { InputOutput };
InputOutput.decorators = [
    { type: Component, args: [{
                template: "<h1>{{headline}}</h1>\n              <div>Counter: {{counter}}</div>\n              <div>Running total of counter values: {{sum}}</div>\n              <div>Growing string: {{growingString}}</div>",
                selector: 'input-output'
            },] },
];
InputOutput.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: undefined, decorators: [{ type: Attribute, args: ['plain',] },] },
]; };
InputOutput.propDecorators = {
    'stringChanged': [{ type: Output },],
    'counter': [{ type: Input },],
    'fixedValue': [{ type: Input },],
    'sum': [{ type: Input, args: ['mySum',] },],
    'headline': [{ type: Input },],
    'growingString': [{ type: Input },],
};
