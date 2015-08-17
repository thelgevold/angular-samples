
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
        const navDirection = KeyMap.getNavigationDorection(keyCode);

        if(navDirection.down){
            this.current = this.rows[this.current.rowIndex + 1].columns[this.current.columnIndex];
        }
        if(navDirection.up){
            this.current = this.rows[this.current.rowIndex - 1].columns[this.current.columnIndex];
        }
        if(navDirection.left){
            this.current = this.rows[this.current.rowIndex].columns[this.current.columnIndex - 1];
        }
        if(navDirection.right){
            this.current = this.rows[this.current.rowIndex].columns[this.current.columnIndex + 1];
        }

    }

    getActive(col){
        if(col === this.current){
            return 'active-cell';
        }

    }
}



