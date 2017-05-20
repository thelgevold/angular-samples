import {Component, AfterViewChecked, Input} from '@angular/core';
import {SpreadsheetModel} from './spreadsheetModel';
import {KeyMap} from './key-map';
import {HeaderRowService} from './header-row-service';

@Component({
    selector: 'spreadsheet',
    template: `<h1>Virtualized Spreadsheet</h1>
    <table id="spreadsheet">
        <tr>
            <td class="row-number-column"></td>
            <td class="columnHeader" *ngFor="let columnHeader of header">{{columnHeader}}</td>
        </tr>
        <tr *ngFor="let row of visibleRows">
            <td class="row-number-column">{{row.rowIndex}}</td>
            <td *ngFor="let col of row.columns">
                <input  data-id="{{col.rowIndex}}-{{col.columnIndex}}" [value]="col.cellValue" (input)="col.cellValue = $event.target.value" (click)="model.selectColumn(col)" (keyup)="navigate($event)" />
            </td>
        </tr>
    </table>
    <h4><a href="http://www.syntaxsuccess.com/viewarticle/virtualized-spreadsheet-component-in-angular-2.0">Read more here</a></h4>
    `
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