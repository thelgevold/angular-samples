import { Component } from '@angular/core';
import { AddressBookService } from './address-book-service';
import { AddressBookTitleService } from './address-book-title-service';
export class AddressBook {
    constructor(addressBookService, addressBookTitleService) {
        console.log('Creating AddressBook');
        this.result = { people: [] };
        addressBookService.getEntries().subscribe(res => this.result = res);
        this.title = addressBookTitleService.getTitle();
        console.log(addressBookTitleService.callCount);
    }
}
AddressBook.decorators = [
    { type: Component, args: [{
                selector: 'address-book',
                templateUrl: './address-book.html',
                providers: [AddressBookService]
            },] },
];
AddressBook.ctorParameters = [
    { type: AddressBookService, },
    { type: AddressBookTitleService, },
];
