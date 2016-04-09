System.register(['angular2/core', '../../algorithms/insertion-sort'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, insertion_sort_1;
    var InsertionSort, ValList, ListItem;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (insertion_sort_1_1) {
                insertion_sort_1 = insertion_sort_1_1;
            }],
        execute: function() {
            InsertionSort = (function () {
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
                    insertion_sort_1.Insertion.sort(this.list);
                };
                InsertionSort = __decorate([
                    core_1.Component({
                        selector: 'insertion-sort',
                        inputs: ['list: list'],
                        templateUrl: './components/insertion-sort/insertion-sort.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], InsertionSort);
                return InsertionSort;
            }());
            exports_1("InsertionSort", InsertionSort);
            ValList = (function () {
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
            ListItem = (function () {
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
        }
    }
});
