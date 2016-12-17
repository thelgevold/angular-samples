import { Component } from '@angular/core';
import { Contact } from './contact';
export class ContactList {
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
}
ContactList.decorators = [
    { type: Component, args: [{
                selector: 'contact-list',
                templateUrl: './contact-list.html'
            },] },
];
ContactList.ctorParameters = () => [];
