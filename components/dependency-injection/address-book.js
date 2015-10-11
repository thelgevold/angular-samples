var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var address_book_service_1 = require('./address-book-service');
var address_book_title_service_1 = require('./address-book-title-service');
var AddressBook = (function () {
    function AddressBook(addressBookService, addressBookTitleService) {
        var _this = this;
        console.log('Creating AddressBook');
        this.result = { people: [] };
        addressBookService.getEntries().subscribe(function (res) { return _this.result = res; });
        this.title = addressBookTitleService.getTitle();
        console.log(addressBookTitleService.callCount);
    }
    AddressBook = __decorate([
        angular2_1.Component({
            selector: 'address-book',
            directives: [angular2_1.CORE_DIRECTIVES],
            templateUrl: './components/dependency-injection/address-book.html',
            bindings: [address_book_service_1.AddressBookService]
        }), 
        __metadata('design:paramtypes', [address_book_service_1.AddressBookService, address_book_title_service_1.AddressBookTitleService])
    ], AddressBook);
    return AddressBook;
})();
exports.AddressBook = AddressBook;
