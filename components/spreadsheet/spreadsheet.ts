import {Component, View, NgFor, NgModel, NgClass} from 'angular2/angular2';

import {SpreadsheetModel} from './spreadsheetModel';
import {KeyMap} from './key-map';
import {HeaderRowService} from './header-row-service';

@Component({
    selector: 'spreadsheet',
    inputs: ['rows','columns']
})

@View({
    templateUrl: './components/spreadsheet/spreadsheet.html',
    directives: [NgFor, NgModel, NgClass]
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

    navigate($event){
        this.model.navigate($event.keyCode);
        this.giveElementFocus();
    }

    giveElementFocus(){

        //TODO: This is a polling hack for giving focus to the current cell when scrolling off the current view
        //Will need to learn more about how to handle this properly with Angular 2.0
        let cell = document.getElementById(this.model.current.rowIndex + '-' + this.model.current.columnIndex);

        if(cell){
            cell.focus();
        }

        else{
            var interval = setInterval(() => {
                let cell = document.getElementById(this.model.current.rowIndex + '-' + this.model.current.columnIndex);

                if(cell){
                    cell.focus();
                    clearInterval(interval);
                }

            }, 10);
        }
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