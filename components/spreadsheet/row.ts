import {Column} from './column';

export class Row{

    columns:Array<Column>;

    constructor(public rowIndex, columnCount){
        this.columns = [];

        for(let j = 0; j < columnCount; j++){
            this.columns.push(new Column(j,rowIndex));
        }
    }
}