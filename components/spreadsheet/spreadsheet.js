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
import { SpreadsheetModel } from './spreadsheetModel';
import { HeaderRowService } from './header-row-service';
export let Spreadsheet = class Spreadsheet {
    constructor() {
        this.header = [];
        this.visibleRows = [];
        this.model = new SpreadsheetModel(10, 4);
        this.header = HeaderRowService.createHeader(this.model.rows[0].columns.length);
        this.visibleRows = this.getVisibleRows();
    }
    getHeader() {
        return HeaderRowService.createHeader(this.model.rows[0].columns.length);
    }
    navigate($event) {
        this.model.navigate($event.keyCode);
        this.visibleRows = this.getVisibleRows();
    }
    ngAfterViewChecked() {
        let cell = document.getElementById(this.model.current.rowIndex + '-' + this.model.current.columnIndex);
        cell.focus();
    }
    getVisibleRows() {
        return this.model.rows.filter((row) => row.rowIndex >= this.model.start && row.rowIndex < this.model.end);
    }
    getActive(col) {
        if (col === this.model.current) {
            return 'active-cell';
        }
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Number)
], Spreadsheet.prototype, "rows", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Number)
], Spreadsheet.prototype, "columns", void 0);
Spreadsheet = __decorate([
    Component({
        selector: 'spreadsheet',
        templateUrl: './spreadsheet.html'
    }), 
    __metadata('design:paramtypes', [])
], Spreadsheet);
