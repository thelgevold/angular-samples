import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
export class LogTailService {
    constructor(http) {
        this.http = http;
    }
    getLogEntries() {
        return this.http.get('./components/log-tail/log.json').map((res) => res.json());
    }
}
LogTailService.decorators = [
    { type: Injectable },
];
LogTailService.ctorParameters = () => [
    { type: Http, },
];
