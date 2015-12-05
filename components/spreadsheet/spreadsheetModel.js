var key_map_1 = require('./key-map');
var row_1 = require('./row');
var SpreadsheetModel = (function () {
    function SpreadsheetModel(rowCount, columnCount) {
        this.rowCount = rowCount;
        this.columnCount = columnCount;
        this.rows = [];
        this.start = 0;
        this.end = rowCount;
        for (var i = 0; i < this.rowCount; i++) {
            this.rows.push(new row_1.Row(i, this.columnCount));
        }
        this.current = this.rows[0].columns[0];
    }
    SpreadsheetModel.prototype.selectColumn = function (col) {
        this.current = col;
    };
    SpreadsheetModel.prototype.navigate = function (keyCode) {
        var navDirection = key_map_1.KeyMap.getNavigationDirection(keyCode);
        if (navDirection.down) {
            this.ensureRow();
            this.current = this.rows[this.current.rowIndex + 1].columns[this.current.columnIndex];
            this.adjustRowRangeDownward();
        }
        if (navDirection.up) {
            if (this.current.rowIndex === 0) {
                return;
            }
            this.current = this.rows[this.current.rowIndex - 1].columns[this.current.columnIndex];
            this.adjustRowRangeUpward();
        }
        if (navDirection.left) {
            if (this.current.columnIndex === 0) {
                return;
            }
            this.current = this.rows[this.current.rowIndex].columns[this.current.columnIndex - 1];
        }
        if (navDirection.right) {
            if (this.current.columnIndex === this.columnCount - 1) {
                return;
            }
            this.current = this.rows[this.current.rowIndex].columns[this.current.columnIndex + 1];
        }
        if (navDirection.tab) {
            if (this.current.columnIndex === this.columnCount - 1) {
                this.ensureRow();
                this.current = this.rows[this.current.rowIndex + 1].columns[0];
                this.adjustRowRangeDownward();
            }
            else {
                this.current = this.rows[this.current.rowIndex].columns[this.current.columnIndex + 1];
            }
        }
    };
    SpreadsheetModel.prototype.adjustRowRangeUpward = function () {
        if (this.current.rowIndex < this.start) {
            this.shiftRowsBy(-1);
        }
    };
    SpreadsheetModel.prototype.adjustRowRangeDownward = function () {
        if (this.current.rowIndex === this.end) {
            this.shiftRowsBy(1);
        }
    };
    SpreadsheetModel.prototype.shiftRowsBy = function (offset) {
        this.start = this.start + offset;
        this.end = this.end + offset;
    };
    SpreadsheetModel.prototype.ensureRow = function () {
        if (this.current.rowIndex + 1 >= this.rows.length) {
            this.rows.push(new row_1.Row(this.current.rowIndex + 1, this.columnCount));
        }
    };
    return SpreadsheetModel;
})();
exports.SpreadsheetModel = SpreadsheetModel;
