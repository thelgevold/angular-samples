import { Component, Input } from '@angular/core';
import { SpreadsheetModel } from './spreadsheetModel';
import { HeaderRowService } from './header-row-service';
export class Spreadsheet {
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
}
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
