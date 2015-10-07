var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var insertion_sort_1 = require('../../algorithms/insertion-sort');
var InsertionSort = (function () {
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
        angular2_1.Component({
            selector: 'insertion-sort',
            inputs: ['list: list']
        }),
        angular2_1.View({
            templateUrl: './components/insertion-sort/insertion-sort.html',
            directives: [angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], InsertionSort);
    return InsertionSort;
})();
exports.InsertionSort = InsertionSort;
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
})();
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
})();
