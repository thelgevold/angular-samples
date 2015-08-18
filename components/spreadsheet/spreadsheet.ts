import {Component, View, NgFor, NgModel, CSSClass, ElementRef} from 'angular2/angular2';

import {SpreadsheetModel} from './spreadsheetModel';
import {KeyMap} from './key-map';
import {HeaderRowService} from './header-row-service';

@Component({
    selector: 'spreadsheet',
    properties: ['rows','columns'],
})

@View({
    templateUrl: './components/spreadsheet/spreadsheet.html',
    directives: [NgFor, NgModel, CSSClass]
})

export class Spreadsheet {

    model:SpreadsheetModel;
    rows:Number;
    columns:Number;

    constructor(){
        this.model = new SpreadsheetModel(10,4);
    }

    getHeader(){
        return HeaderRowService.createHeader(this.model.rows[0].columns.length);
    }

    typing($event,col){
        col.cellValue = String.fromCharCode($event.keyCode);
    }

    navigate($event){
        this.model.navigate($event.keyCode);
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