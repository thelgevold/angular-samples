System.register(['angular2/core', './spreadsheetModel', './header-row-service'], function(exports_1, context_1) {
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
    var core_1, spreadsheetModel_1, header_row_service_1;
    var Spreadsheet;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (spreadsheetModel_1_1) {
                spreadsheetModel_1 = spreadsheetModel_1_1;
            },
            function (header_row_service_1_1) {
                header_row_service_1 = header_row_service_1_1;
            }],
        execute: function() {
            Spreadsheet = (function () {
                function Spreadsheet() {
                    this.header = [];
                    this.visibleRows = [];
                    this.model = new spreadsheetModel_1.SpreadsheetModel(10, 4);
                    this.header = header_row_service_1.HeaderRowService.createHeader(this.model.rows[0].columns.length);
                    this.visibleRows = this.getVisibleRows();
                }
                Spreadsheet.prototype.getHeader = function () {
                    return header_row_service_1.HeaderRowService.createHeader(this.model.rows[0].columns.length);
                };
                Spreadsheet.prototype.navigate = function ($event) {
                    this.model.navigate($event.keyCode);
                    this.visibleRows = this.getVisibleRows();
                };
                Spreadsheet.prototype.ngAfterViewChecked = function () {
                    var cell = document.getElementById(this.model.current.rowIndex + '-' + this.model.current.columnIndex);
                    cell.focus();
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
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], Spreadsheet.prototype, "rows", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], Spreadsheet.prototype, "columns", void 0);
                Spreadsheet = __decorate([
                    core_1.Component({
                        selector: 'spreadsheet',
                        templateUrl: './components/spreadsheet/spreadsheet.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], Spreadsheet);
                return Spreadsheet;
            }());
            exports_1("Spreadsheet", Spreadsheet);
        }
    }
});
