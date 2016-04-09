System.register(['./column'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var column_1;
    var Row;
    return {
        setters:[
            function (column_1_1) {
                column_1 = column_1_1;
            }],
        execute: function() {
            Row = (function () {
                function Row(rowIndex, columnCount) {
                    this.rowIndex = rowIndex;
                    this.columnCount = columnCount;
                    this.columns = [];
                    for (var j = 0; j < this.columnCount; j++) {
                        this.columns.push(new column_1.Column(j, this.rowIndex));
                    }
                }
                return Row;
            }());
            exports_1("Row", Row);
        }
    }
});
