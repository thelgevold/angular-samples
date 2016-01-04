var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var contact_1 = require('./contact');
var ContactList = (function () {
    function ContactList() {
        this.contacts = [];
        this.name = '';
        this.phone = '';
    }
    ContactList.prototype.addContact = function () {
        var contact = new contact_1.Contact(this.name, this.phone);
        this.contacts.push(contact);
        this.name = '';
        this.phone = '';
    };
    ContactList.prototype.removeContact = function (contact) {
        var index = this.contacts.indexOf(contact);
        this.contacts.splice(index, 1);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ContactList.prototype, "name", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ContactList.prototype, "phone", void 0);
    ContactList = __decorate([
        core_1.Component({
            selector: 'contact-list',
            templateUrl: './components/contact-list/contact-list.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ContactList);
    return ContactList;
})();
exports.ContactList = ContactList;
