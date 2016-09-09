import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
export var LogTailService = (function () {
    function LogTailService(http) {
        this.http = http;
    }
    LogTailService.prototype.getLogEntries = function () {
        return this.http.get('./components/log-tail/log.json').map(function (res) { return res.json(); });
    };
    LogTailService.decorators = [
        { type: Injectable },
    ];
    LogTailService.ctorParameters = [
        { type: Http, },
    ];
    return LogTailService;
}());
