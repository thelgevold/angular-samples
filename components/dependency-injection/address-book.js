import { Component } from '@angular/core';
import { AddressBookService } from './address-book-service';
import { AddressBookTitleService } from './address-book-title-service';
var AddressBook = (function () {
    function AddressBook(addressBookService, addressBookTitleService) {
        var _this = this;
        console.log('Creating AddressBook');
        this.result = { people: [] };
        addressBookService.getEntries().subscribe(function (res) { return _this.result = res; });
        this.title = addressBookTitleService.getTitle();
        console.log(addressBookTitleService.callCount);
    }
    return AddressBook;
}());
export { AddressBook };
AddressBook.decorators = [
    { type: Component, args: [{
                selector: 'address-book',
                templateUrl: './address-book.html',
                providers: [AddressBookService]
            },] },
];
AddressBook.ctorParameters = function () { return [
    { type: AddressBookService, },
    { type: AddressBookTitleService, },
]; };
