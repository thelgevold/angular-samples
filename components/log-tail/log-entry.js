export var LogEntry = (function () {
    function LogEntry(text, severity) {
        this.text = text;
        this.severity = severity;
    }
    return LogEntry;
}());
