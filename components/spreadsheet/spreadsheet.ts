import {Component, View, NgFor, NgModel, CSSClass, ElementRef} from 'angular2/angular2';

import {SpreadsheetModel} from './spreadsheetModel';
import {KeyMap} from './key-map';

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

    typing($event,col){
        col.cellValue = String.fromCharCode($event.keyCode);
    }

    navigate($event){


        this.model.navigate($event.keyCode);
    }

}