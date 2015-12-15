var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
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
        core_1.Component({
            directives: [grid_1.Grid],
            template: '<grid [rows]="people" [columns]="columns"></grid>'
        }), 
        __metadata('design:paramtypes', [])
    ], GridDemo);
    return GridDemo;
})();
exports.GridDemo = GridDemo;
