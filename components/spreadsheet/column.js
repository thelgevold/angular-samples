var Column = (function () {
    function Column(columnIndex, rowIndex) {
        this.columnIndex = columnIndex;
        this.rowIndex = rowIndex;
        this.cellValue = '';
    }
    return Column;
}());
export { Column };
