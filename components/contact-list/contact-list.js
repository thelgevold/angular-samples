var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { Contact } from './contact';
var ContactList = (function () {
    function ContactList() {
        this.contacts = [];
    }
    ContactList.prototype.addContact = function (name, phone) {
        var contact = new Contact(name.value, phone.value);
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
    Component({
        selector: 'contact-list',
        templateUrl: './contact-list.html'
    })
], ContactList);
export { ContactList };
