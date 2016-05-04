import {Component} from '@angular/core';
import {Contact} from './contact';

@Component({
    selector: 'contact-list',
    templateUrl: './components/contact-list/contact-list.html'
})

export class ContactList {
    contacts: Array<Contact> = [];

    addContact(name,phone){
        const contact = new Contact(name.value,phone.value);
        this.contacts.push(contact);
        name.value = '';
        phone.value = '';
    }

    removeContact(contact){
        const index = this.contacts.indexOf(contact);
        this.contacts.splice(index,1);
    }
}
