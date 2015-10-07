/// <reference path="../../typings/tsd.d.ts" />
import {Component, View, NgFor} from 'angular2/angular2';
import {Column} from './column';
import {Sorter} from './sorter';

@Component({
    selector: 'grid',
    inputs: ['rows: rows','columns: columns']
})

@View({
    templateUrl: './components/grid/grid.html',
    directives: [NgFor]
})

export class Grid {

    columns:Array<Column>;
    rows:Array<any>;

    sorter = new Sorter();

    sort(key){
        this.sorter.sort(key, this.rows);
    }
}
