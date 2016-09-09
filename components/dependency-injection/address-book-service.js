import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
export var AddressBookService = (function () {
    function AddressBookService(http) {
        console.log('Creating AddressBookService');
        this.http = http;
    }
    AddressBookService.prototype.getEntries = function () {
        return this.http.get('./people.json').map(function (res) { return res.json(); });
    };
    AddressBookService.decorators = [
        { type: Injectable },
    ];
    AddressBookService.ctorParameters = [
        { type: Http, },
    ];
    return AddressBookService;
}());
