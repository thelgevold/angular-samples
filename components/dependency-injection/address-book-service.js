import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
export class AddressBookService {
    constructor(http) {
        console.log('Creating AddressBookService');
        this.http = http;
    }
    getEntries() {
        return this.http.get('./people.json').map((res) => res.json());
    }
}
AddressBookService.decorators = [
    { type: Injectable },
];
AddressBookService.ctorParameters = [
    { type: Http, },
];
