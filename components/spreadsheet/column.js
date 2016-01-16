System.register([], function(exports_1) {
    var Column;
    return {
        setters:[],
        execute: function() {
            Column = (function () {
                function Column(columnIndex, rowIndex) {
                    this.columnIndex = columnIndex;
                    this.rowIndex = rowIndex;
                    this.cellValue = '';
                }
                return Column;
            })();
            exports_1("Column", Column);
        }
    }
});
