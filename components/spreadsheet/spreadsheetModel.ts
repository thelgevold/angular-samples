
import {KeyMap} from './key-map';
import {Row} from './row';
import {Column} from './column';

export class SpreadsheetModel{

    rows:Array<Row>;
    current:Column;

    constructor(public rowCount, public columnCount){

        this.rows = [];

        for(let i = 0; i < this.rowCount; i++){

            this.rows.push(this.addRow(this.columnCount,i));
        }

        this.current = this.rows[0].columns[0];
    }

    addRow(columnCount,rowIndex){
        let row = new Row();
        for(let j = 0; j < columnCount; j++){
            row.columns.push(new Column(j,rowIndex));
        }

        return row;
    }

    selectColumn(col){
        this.current = col;
    }

    navigate(keyCode){
        const navDirection = KeyMap.getNavigationDorection(keyCode);

        if(navDirection.down){
            this.ensureRow(1);
            this.current = this.rows[this.current.rowIndex + 1].columns[this.current.columnIndex];
        }
        if(navDirection.up){
            if(this.current.rowIndex === 0){
                return;
            }
            this.current = this.rows[this.current.rowIndex - 1].columns[this.current.columnIndex];
        }
        if(navDirection.left){
            this.current = this.rows[this.current.rowIndex].columns[this.current.columnIndex - 1];
        }
        if(navDirection.right){
            this.current = this.rows[this.current.rowIndex].columns[this.current.columnIndex + 1];
        }

    }

    ensureRow(delta){

        if(this.current.rowIndex + delta >= this.rows.length){
            this.rows.push(this.addRow(this.columnCount,this.current.rowIndex + delta));
        }
    }

    getActive(col){
        if(col === this.current){
            return 'active-cell';
        }

    }
}



