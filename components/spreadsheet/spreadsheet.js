import { Component, Input } from '@angular/core';
import { SpreadsheetModel } from './spreadsheetModel';
import { HeaderRowService } from './header-row-service';
export var Spreadsheet = (function () {
    function Spreadsheet() {
        this.header = [];
        this.visibleRows = [];
        this.model = new SpreadsheetModel(10, 4);
        this.header = HeaderRowService.createHeader(this.model.rows[0].columns.length);
        this.visibleRows = this.getVisibleRows();
    }
    Spreadsheet.prototype.getHeader = function () {
        return HeaderRowService.createHeader(this.model.rows[0].columns.length);
    };
    Spreadsheet.prototype.navigate = function ($event) {
        this.model.navigate($event.keyCode);
        this.visibleRows = this.getVisibleRows();
    };
    Spreadsheet.prototype.ngAfterViewChecked = function () {
        var cell = document.getElementById(this.model.current.rowIndex + '-' + this.model.current.columnIndex);
        cell.focus();
    };
    Spreadsheet.prototype.getVisibleRows = function () {
        var _this = this;
        return this.model.rows.filter(function (row) { return row.rowIndex >= _this.model.start && row.rowIndex < _this.model.end; });
    };
    Spreadsheet.prototype.getActive = function (col) {
        if (col === this.model.current) {
            return 'active-cell';
        }
    };
    Spreadsheet.decorators = [
        { type: Component, args: [{
                    selector: 'spreadsheet',
                    templateUrl: './spreadsheet.html'
                },] },
    ];
    Spreadsheet.ctorParameters = [];
    Spreadsheet.propDecorators = {
        'rows': [{ type: Input },],
        'columns': [{ type: Input },],
    };
    return Spreadsheet;
}());
