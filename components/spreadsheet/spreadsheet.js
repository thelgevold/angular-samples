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
var spreadsheetModel_1 = require('./spreadsheetModel');
var header_row_service_1 = require('./header-row-service');
var Spreadsheet = (function () {
    function Spreadsheet(el) {
        this.model = new spreadsheetModel_1.SpreadsheetModel(10, 4);
        this.element = el;
    }
    Spreadsheet.prototype.getHeader = function () {
        return header_row_service_1.HeaderRowService.createHeader(this.model.rows[0].columns.length);
    };
    Spreadsheet.prototype.navigate = function ($event) {
        this.model.navigate($event.keyCode);
        this.giveElementFocus();
    };
    Spreadsheet.prototype.giveElementFocus = function () {
        var _this = this;
        //TODO: This is a polling hack for giving focus to the current cell when scrolling off the current view
        //Will need to learn more about how to handle this properly with Angular 2.0
        var cell = document.getElementById(this.model.current.rowIndex + '-' + this.model.current.columnIndex);
        if (cell) {
            cell.focus();
        }
        else {
            var interval = setInterval(function () {
                var cell = document.getElementById(_this.model.current.rowIndex + '-' + _this.model.current.columnIndex);
                if (cell) {
                    cell.focus();
                    clearInterval(interval);
                }
            }, 10);
        }
    };
    Spreadsheet.prototype.getVisibleRows = function () {
        var _this = this;
        return this.model.rows.filter(function (row) { return row.rowIndex >= _this.model.start && row.rowIndex < _this.model.end; });
    };
    Spreadsheet.prototype.getActive = function (col) {
        if (col === this.model.current) {
            return 'active-cell';
        }
    };
    Spreadsheet = __decorate([
        angular2_1.Component({
            selector: 'spreadsheet',
            properties: ['rows', 'columns']
        }),
        angular2_1.View({
            templateUrl: './components/spreadsheet/spreadsheet.html',
            directives: [angular2_1.NgFor, angular2_1.NgModel, angular2_1.NgClass]
        }), 
        __metadata('design:paramtypes', [angular2_1.ElementRef])
    ], Spreadsheet);
    return Spreadsheet;
})();
exports.Spreadsheet = Spreadsheet;
