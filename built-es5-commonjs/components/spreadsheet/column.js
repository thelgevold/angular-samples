"use strict";
var Column = (function () {
    function Column(columnIndex, rowIndex) {
        this.columnIndex = columnIndex;
        this.rowIndex = rowIndex;
        this.cellValue = '';
    }
    return Column;
}());
exports.Column = Column;
