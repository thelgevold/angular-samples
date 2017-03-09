import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
var LogTailService = (function () {
    function LogTailService(http) {
        this.http = http;
    }
    LogTailService.prototype.getLogEntries = function () {
        return this.http.get('./components/log-tail/log.json').map(function (res) { return res.json(); });
    };
    return LogTailService;
}());
export { LogTailService };
LogTailService.decorators = [
    { type: Injectable },
];
LogTailService.ctorParameters = function () { return [
    { type: Http, },
]; };
