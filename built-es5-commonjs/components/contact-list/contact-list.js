"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var contact_1 = require("./contact");
var ContactList = (function () {
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
    return ContactList;
}());
ContactList = __decorate([
    core_1.Component({
        selector: 'contact-list',
        template: "\n    <div>\n    <h1>Contact List</h1>\n    <table class=\"table\">\n        <thead>\n            <tr>\n                <td>Name and phone number</td>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let contact of contacts\" style=\"margin-bottom: 10px;\">\n                <td>{{contact.descr}}</td> <td><button class=\"btn btn-primary btn-xs\" (click)=\"removeContact(contact)\">Delete</button></td>\n            </tr>\n        </tbody>\n    </table>\n\n    <div class=\"addContactControls\">\n        <input #name placeholder=\"name\" />\n        <input #phone placeholder=\"phone\" />\n        <button class=\"btn btn-primary btn-xs\" (click)=\"addContact(name,phone)\">Add Contact</button>\n    </div>\n    </div>"
    })
], ContactList);
exports.ContactList = ContactList;
