System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
            }());
            exports_1("LogAction", LogAction);
        }
    }
});
//# sourceMappingURL=log-action.js.map