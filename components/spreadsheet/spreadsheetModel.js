var key_map_1 = require('./key-map');
var row_1 = require('./row');
var column_1 = require('./column');
var SpreadsheetModel = (function () {
    function SpreadsheetModel(rowCount, columnCount) {
        this.rowCount = rowCount;
        this.columnCount = columnCount;
        this.rows = [];
        this.start = 0;
        this.end = rowCount;
        for (var i = 0; i < this.rowCount; i++) {
            this.rows.push(this.addRow(this.columnCount, i));
        }
        this.current = this.rows[0].columns[0];
    }
    SpreadsheetModel.prototype.addRow = function (columnCount, rowIndex) {
        var row = new row_1.Row(rowIndex);
        for (var j = 0; j < columnCount; j++) {
            row.columns.push(new column_1.Column(j, rowIndex));
        }
        return row;
    };
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
        }
        if (navDirection.left) {
            if (this.current.columnIndex === 0) {
                return;
            }
            this.current = this.rows[this.current.rowIndex].columns[this.current.columnIndex - 1];
        }
        if (navDirection.right) {
            this.ensureColumn();
            this.current = this.rows[this.current.rowIndex].columns[this.current.columnIndex + 1];
        }
    };
    SpreadsheetModel.prototype.ensureColumn = function () {
        if (this.current.columnIndex + 1 >= this.rows[0].columns.length) {
            for (var i = 0; i < this.rows.length; i++) {
                this.rows[i].columns.push(new column_1.Column(this.rows[0].columns.length, i));
            }
        }
    };
    SpreadsheetModel.prototype.adjustRowRangeDownward = function () {
        if (this.current.rowIndex >= this.end) {
            this.start = this.start + 1;
            this.end = this.end + 1;
        }
    };
    SpreadsheetModel.prototype.ensureRow = function () {
        if (this.current.rowIndex + 1 >= this.rows.length) {
            this.rows.push(this.addRow(this.columnCount, this.current.rowIndex + 1));
        }
    };
    SpreadsheetModel.prototype.getActive = function (col) {
        if (col === this.current) {
            return 'active-cell';
        }
    };
    return SpreadsheetModel;
})();
exports.SpreadsheetModel = SpreadsheetModel;
