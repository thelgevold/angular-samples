import { Component } from '@angular/core';
var BoundTextbox = (function () {
    function BoundTextbox() {
        this.text = 'hello';
    }
    BoundTextbox.prototype.typing = function ($event) {
        this.text = $event.target.value;
    };
    return BoundTextbox;
}());
export { BoundTextbox };
BoundTextbox.decorators = [
    { type: Component, args: [{
                selector: 'bound-textbox',
                template: '<h1>Bound Textbox</h1><input [value]="text" (keyup)="typing($event)" /><span>{{text}}</span>'
            },] },
];
BoundTextbox.ctorParameters = function () { return []; };
