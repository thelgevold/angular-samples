var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
BoundTextbox = __decorate([
    Component({
        selector: 'bound-textbox',
        template: '<h1>Bound Textbox</h1><input [value]="text" (keyup)="typing($event)" /><span>{{text}}</span>'
    })
], BoundTextbox);
export { BoundTextbox };
