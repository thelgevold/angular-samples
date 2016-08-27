var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { Sorter } from './sorter';
export let Grid = class Grid {
    constructor() {
        this.sorter = new Sorter();
    }
    sort(key) {
        this.sorter.sort(key, this.rows);
    }
    ngOnInit() {
        console.log(this.name);
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Array)
], Grid.prototype, "columns", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Array)
], Grid.prototype, "rows", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], Grid.prototype, "name", void 0);
Grid = __decorate([
    Component({
        selector: 'grid',
        templateUrl: './components/grid/grid.html'
    }), 
    __metadata('design:paramtypes', [])
], Grid);
