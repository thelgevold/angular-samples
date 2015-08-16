
import {KeyMap} from './key-map';
import {Row} from './row';
import {Column} from './column';

export class SpreadsheetModel{

    rows:Array<Row>;
    current:Column;

    constructor(rowCount, columnCount){

        this.rows = [];

        for(let i = 0; i < rowCount; i++){
            var row = new Row();
            for(let j = 0; j < columnCount; j++){
                row.columns.push(new Column(j,i));
            }

            this.rows.push(row);
        }

        this.current = this.rows[0].columns[0];
    }

    selectColumn(col){
        this.current = col;
    }

    navigate(keyCode){
        let navDirection = KeyMap.getNavigationDorection(keyCode);
    }

    getActive(col){
        if(col === this.current){
            return 'active-cell';
        }

    }
}



