var column_1 = require('./column');
var Row = (function () {
    function Row(rowIndex, columnCount) {
        this.rowIndex = rowIndex;
        this.columns = [];
        for (var j = 0; j < columnCount; j++) {
            this.columns.push(new column_1.Column(j, rowIndex));
        }
    }
    return Row;
})();
exports.Row = Row;
