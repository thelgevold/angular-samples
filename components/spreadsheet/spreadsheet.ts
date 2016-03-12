import {Component, AfterViewChecked, Input} from 'angular2/core';
import {SpreadsheetModel} from './spreadsheetModel';
import {KeyMap} from './key-map';
import {HeaderRowService} from './header-row-service';

@Component({
    selector: 'spreadsheet',
    templateUrl: './components/spreadsheet/spreadsheet.html'
})

export class Spreadsheet implements AfterViewChecked{

    model:SpreadsheetModel;
    @Input() rows:Number;
    @Input() columns:Number;
    header = [];
    visibleRows = [];

    constructor(){
        this.model = new SpreadsheetModel(10,4);
        this.header = HeaderRowService.createHeader(this.model.rows[0].columns.length);
        this.visibleRows = this.getVisibleRows();
    }

    getHeader(){
        return HeaderRowService.createHeader(this.model.rows[0].columns.length);
    }

    navigate($event){
        this.model.navigate($event.keyCode);
        this.visibleRows = this.getVisibleRows();
    }

    ngAfterViewChecked(){
        let cell = document.getElementById(this.model.current.rowIndex + '-' + this.model.current.columnIndex);
        cell.focus();
    }

    getVisibleRows(){
        return this.model.rows.filter((row) => row.rowIndex >= this.model.start && row.rowIndex < this.model.end);
    }

    getActive(col){
        if(col === this.model.current){
            return 'active-cell';
        }
    }
}