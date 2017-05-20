"use strict";
var LogAction = (function () {
    function LogAction(type, data) {
        this.type = type;
        this.data = data;
    }
    return LogAction;
}());
exports.LogAction = LogAction;
