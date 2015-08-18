var column_1 = require('./column');
var Row = (function () {
    function Row(rowIndex, columnCount) {
        this.rowIndex = rowIndex;
        this.columnCount = columnCount;
        this.columns = [];
        for (var j = 0; j < this.columnCount; j++) {
            this.columns.push(new column_1.Column(j, this.rowIndex));
        }
    }
    return Row;
})();
exports.Row = Row;
