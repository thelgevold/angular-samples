import {Column} from './column';

export class Row{

    columns:Array<Column>

    constructor(public rowIndex){
        this.columns = [];
    }
}