import { Component } from '@angular/core';
import { Insertion } from '../../algorithms/insertion-sort';
export var InsertionSort = (function () {
    function InsertionSort() {
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
    InsertionSort.prototype.sortList = function () {
        Insertion.sort(this.list);
    };
    InsertionSort.decorators = [
        { type: Component, args: [{
                    selector: 'insertion-sort',
                    inputs: ['list: list'],
                    templateUrl: './insertion-sort.html'
                },] },
    ];
    InsertionSort.ctorParameters = function () { return []; };
    return InsertionSort;
}());
var ValList = (function () {
    function ValList() {
    }
    ValList.prototype.setCurrent = function (item) {
        this.clearAll();
        item.current = true;
    };
    ValList.prototype.clearAll = function () {
        this.items.forEach(function (i) { return i.current = false; });
    };
    return ValList;
}());
var ListItem = (function () {
    function ListItem(val) {
        this.val = val;
        this.current = false;
    }
    ListItem.prototype.getClass = function () {
        if (this.current) {
            return 'current-item';
        }
        return null;
    };
    return ListItem;
}());
