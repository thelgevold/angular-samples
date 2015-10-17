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
var grid_1 = require('./grid');
var column_1 = require('./column');
var GridDemo = (function () {
    function GridDemo() {
        this.people = this.getPeople();
        this.columns = this.getColumns();
    }
    GridDemo.prototype.getPeople = function () {
        return [
            { firstName: 'Joe', lastName: 'Jackson', age: 20 },
            { firstName: 'Peter', lastName: 'Smith', age: 30 },
            { firstName: 'Jane', lastName: 'Doe', age: 50 },
            { firstName: 'Tim', lastName: 'Smith', age: 80 }
        ];
    };
    GridDemo.prototype.getColumns = function () {
        return [
            new column_1.Column('firstName', 'First Name'),
            new column_1.Column('lastName', 'Last Name'),
            new column_1.Column('age', 'Age')
        ];
    };
    GridDemo = __decorate([
        angular2_1.Component({
            directives: [grid_1.Grid],
            template: '<grid [rows]="people" [columns]="columns"></grid>'
        }), 
        __metadata('design:paramtypes', [])
    ], GridDemo);
    return GridDemo;
})();
exports.GridDemo = GridDemo;
