import {Component, View} from 'angular2/angular2';
import {Insertion} from '../../algorithms/insertion-sort';

@Component({
    selector: 'insertion-sort',
    inputs: ['list: list']
})

@View({
    templateUrl: './components/insertion-sort/insertion-sort.html'
})

export class InsertionSort {

    list:ValList;

    constructor(){
        this.list = new ValList();
        this.list.items = [
            new ListItem(5),
            new ListItem(33),
            new ListItem(5),
            new ListItem(5),
            new ListItem(2),
            new ListItem(-2),
            new ListItem(4),
            new ListItem(88),
            new ListItem(6),
            new ListItem(400),
            new ListItem(1),
            new ListItem(58),
            new ListItem(30)
        ];

    }

    sortList(){
        Insertion.sort(this.list)
    }
}

class ValList{
    items:Array<ListItem>;

    setCurrent(item){
        this.clearAll();
        item.current = true;
    }

    clearAll(){
        this.items.forEach(i => i.current = false);
    }
}

class ListItem{
    val:Number;
    current:Boolean;

    constructor(val){
        this.val = val;
        this.current = false;
    }

    getClass(){
        if(this.current){
            return 'current-item';
        }
        return null;
    }
}