import {Component, View} from 'angular2/core';
import {Column} from './column';
import {Sorter} from './sorter';

@Component({
    selector: 'grid',
    inputs: ['rows: rows','columns: columns']
})

@View({
    templateUrl: './components/grid/grid.html'
})

export class Grid {

    columns:Array<Column>;
    rows:Array<any>;

    sorter = new Sorter();

    sort(key){
        this.sorter.sort(key, this.rows);
    }
}
