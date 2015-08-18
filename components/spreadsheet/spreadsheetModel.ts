import {KeyMap} from './key-map';
import {Row} from './row';
import {Column} from './column';

export class SpreadsheetModel{

    rows:Array<Row>;
    current:Column;
    start:number;
    end:number;

    constructor(public rowCount, public columnCount){

        this.rows = [];
        this.start = 0;
        this.end = rowCount;

        for(let i = 0; i < this.rowCount; i++){

            this.rows.push(new Row(i,this.columnCount));
        }

        this.current = this.rows[0].columns[0];
    }

    selectColumn(col){
        this.current = col;
    }

    navigate(keyCode){

        const navDirection = KeyMap.getNavigationDirection(keyCode);

        if(navDirection.down){
            this.ensureRow();
            this.current = this.rows[this.current.rowIndex + 1].columns[this.current.columnIndex];
            this.adjustRowRangeDownward();
        }
        if(navDirection.up){
            if(this.current.rowIndex === 0){
                return;
            }
            this.current = this.rows[this.current.rowIndex - 1].columns[this.current.columnIndex];
            this.adjustRowRangeUpward();
        }
        if(navDirection.left){
            if(this.current.columnIndex === 0){
                return;
            }
            this.current = this.rows[this.current.rowIndex].columns[this.current.columnIndex - 1];
        }
        if(navDirection.right){
            if(this.current.columnIndex === this.columnCount - 1){
                return;
            }
            this.current = this.rows[this.current.rowIndex].columns[this.current.columnIndex + 1];
        }
    }

    adjustRowRangeUpward(){
        if(this.current.rowIndex < this.start){
            this.shiftRowsBy(-1);
        }
    }

    adjustRowRangeDownward(){
        if(this.current.rowIndex === this.end){
            this.shiftRowsBy(1);
        }
    }

    shiftRowsBy(offset){
        this.start = this.start + offset;
        this.end = this.end + offset;
    }

    ensureRow(){
        if(this.current.rowIndex + 1 >= this.rows.length){
            this.rows.push(new Row(this.current.rowIndex + 1,this.columnCount));
        }
    }
}



