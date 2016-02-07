System.register([], function(exports_1) {
    var LogAction;
    return {
        setters:[],
        execute: function() {
            LogAction = (function () {
                function LogAction(type, data) {
                    this.type = type;
                    this.data = data;
                }
                return LogAction;
            })();
            exports_1("LogAction", LogAction);
        }
    }
});
