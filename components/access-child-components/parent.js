var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChildren, QueryList } from '@angular/core';
import { Child } from './child';
export let Parent = class Parent {
    updateViewChildren() {
        this.viewChildren.toArray().forEach((child) => child.setTime(new Date().toTimeString()));
    }
};
__decorate([
    ViewChildren(Child), 
    __metadata('design:type', QueryList)
], Parent.prototype, "viewChildren", void 0);
Parent = __decorate([
    Component({
        selector: 'parent',
        template: `<div>
                <button (click)="updateViewChildren()">Update Time via ViewChildren</button>
                <child></child>
                <child></child>
              </div>`
    }), 
    __metadata('design:paramtypes', [])
], Parent);
