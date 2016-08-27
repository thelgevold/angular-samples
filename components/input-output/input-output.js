var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, Input, Output, EventEmitter, Attribute, ElementRef } from '@angular/core';
export let InputOutput = class InputOutput {
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
};
__decorate([
    Output(), 
    __metadata('design:type', Object)
], InputOutput.prototype, "stringChanged", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Number)
], InputOutput.prototype, "counter", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], InputOutput.prototype, "fixedValue", void 0);
__decorate([
    Input('mySum'), 
    __metadata('design:type', Number)
], InputOutput.prototype, "sum", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], InputOutput.prototype, "headline", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Object), 
    __metadata('design:paramtypes', [Object])
], InputOutput.prototype, "growingString", null);
InputOutput = __decorate([
    Component({
        template: `<h1>{{headline}}</h1>
              <div>Counter: {{counter}}</div>
              <div>Running total of counter values: {{sum}}</div>
              <div>Growing string: {{growingString}}</div>`,
        selector: 'input-output'
    }),
    __param(1, Attribute('plain')), 
    __metadata('design:paramtypes', [ElementRef, Object])
], InputOutput);
