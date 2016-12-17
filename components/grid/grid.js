import { Component, Input } from '@angular/core';
import { Sorter } from './sorter';
export class Grid {
    constructor() {
        this.sorter = new Sorter();
    }
    sort(key) {
        this.sorter.sort(key, this.rows);
    }
    ngOnInit() {
        console.log(this.name);
    }
}
Grid.decorators = [
    { type: Component, args: [{
                selector: 'grid',
                templateUrl: './grid.html'
            },] },
];
Grid.ctorParameters = () => [];
Grid.propDecorators = {
    'columns': [{ type: Input },],
    'rows': [{ type: Input },],
    'name': [{ type: Input },],
};
