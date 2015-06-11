import {Component, View, NgFor} from 'angular2/angular2';
import {Column} from './column';
import {Sorter} from './sorter';

@Component({
    selector: 'grid',
    properties: ['rows: rows','columns: columns']
})

@View({
    templateUrl: './components/grid/grid.html',
    directives: [NgFor]
})

export class Grid {

    columns:Array<Column>;
    rows:Array<any>;

    sorter: Sorter;

    constructor(){
        this.columns = new Array<Column>();
        this.rows = new Array<any>();
        this.sorter = new Sorter();
    }

    sort(key){
        this.sorter.sort(key, this.rows);
    }
}