System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var LogEntry;
    return {
        setters:[],
        execute: function() {
            LogEntry = (function () {
                function LogEntry(text, severity) {
                    this.text = text;
                    this.severity = severity;
                }
                return LogEntry;
            }());
            exports_1("LogEntry", LogEntry);
        }
    }
});
