System.register([], function(exports_1) {
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
            })();
            exports_1("LogEntry", LogEntry);
        }
    }
});
