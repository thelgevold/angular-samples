import { Component, Input } from '@angular/core';
import { Sorter } from './sorter';
var Grid = (function () {
    function Grid() {
        this.sorter = new Sorter();
    }
    Grid.prototype.sort = function (key) {
        this.sorter.sort(key, this.rows);
    };
    Grid.prototype.ngOnInit = function () {
        console.log(this.name);
    };
    return Grid;
}());
export { Grid };
Grid.decorators = [
    { type: Component, args: [{
                selector: 'grid',
                templateUrl: './grid.html'
            },] },
];
Grid.ctorParameters = function () { return []; };
Grid.propDecorators = {
    'columns': [{ type: Input },],
    'rows': [{ type: Input },],
    'name': [{ type: Input },],
};
