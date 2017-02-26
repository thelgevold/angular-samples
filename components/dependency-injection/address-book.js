var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
AddressBook = __decorate([
    Component({
        selector: 'address-book',
        templateUrl: './address-book.html',
        providers: [AddressBookService]
    }),
    __metadata("design:paramtypes", [AddressBookService, AddressBookTitleService])
], AddressBook);
export { AddressBook };
