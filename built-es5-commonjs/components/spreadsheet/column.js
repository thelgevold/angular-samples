"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Column = (function () {
    function Column(columnIndex, rowIndex) {
        this.columnIndex = columnIndex;
        this.rowIndex = rowIndex;
        this.cellValue = '';
    }
    return Column;
}());
exports.Column = Column;
