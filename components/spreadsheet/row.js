import { Column } from './column';
export var Row = (function () {
    function Row(rowIndex, columnCount) {
        this.rowIndex = rowIndex;
        this.columnCount = columnCount;
        this.columns = [];
        for (var j = 0; j < this.columnCount; j++) {
            this.columns.push(new Column(j, this.rowIndex));
        }
    }
    return Row;
}());
