System.register(['@angular/core', './sorter'], function(exports_1, context_1) {
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
    var core_1, sorter_1;
    var Grid;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (sorter_1_1) {
                sorter_1 = sorter_1_1;
            }],
        execute: function() {
            Grid = (function () {
                function Grid() {
                    this.sorter = new sorter_1.Sorter();
                }
                Grid.prototype.sort = function (key) {
                    this.sorter.sort(key, this.rows);
                };
                Grid.prototype.ngOnInit = function () {
                    console.log(this.name);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Grid.prototype, "name", void 0);
                Grid = __decorate([
                    core_1.Component({
                        selector: 'grid',
                        inputs: ['rows: rows', 'columns: columns'],
                        templateUrl: './components/grid/grid.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], Grid);
                return Grid;
            }());
            exports_1("Grid", Grid);
        }
    }
});
//# sourceMappingURL=grid.js.map