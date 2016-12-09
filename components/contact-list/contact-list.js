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
import { Contact } from './contact';
export let ContactList = class ContactList {
    constructor() {
        this.contacts = [];
    }
    addContact(name, phone) {
        const contact = new Contact(name.value, phone.value);
        this.contacts.push(contact);
        name.value = '';
        phone.value = '';
    }
    removeContact(contact) {
        const index = this.contacts.indexOf(contact);
        this.contacts.splice(index, 1);
    }
};
ContactList = __decorate([
    Component({
        selector: 'contact-list',
        templateUrl: './contact-list.html'
    }), 
    __metadata('design:paramtypes', [])
], ContactList);
