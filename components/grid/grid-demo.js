import { Component } from '@angular/core';
import { Column } from './column';
export class GridDemo {
    constructor() {
        this.people = this.getPeople();
        this.columns = this.getColumns();
    }
    getPeople() {
        return [
            { firstName: 'Joe', lastName: 'Jackson', age: 20 },
            { firstName: 'Peter', lastName: 'Smith', age: 30 },
            { firstName: 'Jane', lastName: 'Doe', age: 50 },
            { firstName: 'Tim', lastName: 'Smith', age: 80 }
        ];
    }
    getColumns() {
        return [
            new Column('firstName', 'First Name'),
            new Column('lastName', 'Last Name'),
            new Column('age', 'Age')
        ];
    }
}
GridDemo.decorators = [
    { type: Component, args: [{
                template: '<grid name="person grid" [rows]="people" [columns]="columns"></grid>'
            },] },
];
GridDemo.ctorParameters = [];
