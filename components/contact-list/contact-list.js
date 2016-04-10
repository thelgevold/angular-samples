System.register(['angular2/core', './contact'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, contact_1;
    var ContactList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contact_1_1) {
                contact_1 = contact_1_1;
            }],
        execute: function() {
            ContactList = (function () {
                function ContactList() {
                    this.contacts = [];
                }
                ContactList.prototype.addContact = function (name, phone) {
                    var contact = new contact_1.Contact(name.value, phone.value);
                    this.contacts.push(contact);
                    name.value = '';
                    phone.value = '';
                };
                ContactList.prototype.removeContact = function (contact) {
                    var index = this.contacts.indexOf(contact);
                    this.contacts.splice(index, 1);
                };
                ContactList = __decorate([
                    core_1.Component({
                        selector: 'contact-list',
                        templateUrl: './components/contact-list/contact-list.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ContactList);
                return ContactList;
            }());
            exports_1("ContactList", ContactList);
        }
    }
});
//# sourceMappingURL=contact-list.js.map