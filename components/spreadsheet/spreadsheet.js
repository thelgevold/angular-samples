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
    function Spreadsheet() {
        this.model = new spreadsheetModel_1.SpreadsheetModel(10, 4);
    }
    Spreadsheet.prototype.getHeader = function () {
        return header_row_service_1.HeaderRowService.createHeader(this.model.rows[0].columns.length);
    };
    Spreadsheet.prototype.navigate = function ($event) {
        this.model.navigate($event.keyCode);
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
            properties: ['rows', 'columns'],
        }),
        angular2_1.View({
            templateUrl: './components/spreadsheet/spreadsheet.html',
            directives: [angular2_1.NgFor, angular2_1.NgModel, angular2_1.CSSClass]
        }), 
        __metadata('design:paramtypes', [])
    ], Spreadsheet);
    return Spreadsheet;
})();
exports.Spreadsheet = Spreadsheet;
