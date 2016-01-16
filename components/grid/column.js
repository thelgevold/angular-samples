System.register([], function(exports_1) {
    var Column;
    return {
        setters:[],
        execute: function() {
            Column = (function () {
                function Column(name, descr) {
                    this.name = name;
                    this.descr = descr;
                }
                return Column;
            })();
            exports_1("Column", Column);
        }
    }
});
