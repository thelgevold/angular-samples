import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
var AddressBookService = (function () {
    function AddressBookService(http) {
        console.log('Creating AddressBookService');
        this.http = http;
    }
    AddressBookService.prototype.getEntries = function () {
        return this.http.get('./people.json').map(function (res) { return res.json(); });
    };
    return AddressBookService;
}());
export { AddressBookService };
AddressBookService.decorators = [
    { type: Injectable },
];
AddressBookService.ctorParameters = function () { return [
    { type: Http, },
]; };
