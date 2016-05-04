import {Component, Input, OnInit} from '@angular/core';
import {Column} from './column';
import {Sorter} from './sorter';

@Component({
    selector: 'grid',
    inputs: ['rows: rows','columns: columns'],
    templateUrl: './components/grid/grid.html'
})

export class Grid implements OnInit{

    columns:Array<Column>;
    rows:Array<any>;

    @Input() name:string;

    sorter = new Sorter();

    sort(key){
        this.sorter.sort(key, this.rows);
    }

    ngOnInit(){
        console.log(this.name);
    }
}
