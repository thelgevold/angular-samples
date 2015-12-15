import {Component, View} from 'angular2/core';
import {Contact} from './contact';

@Component({
    selector: 'contact-list'
})

@View({
    templateUrl: './components/contact-list/contact-list.html'
})

export class ContactList {
    contacts: Array<Contact> = [];

    addContact(name:string,phone:string){
        const contact = new Contact(name,phone);
        this.contacts.push(contact);
    }

    removeContact(contact){
        const index = this.contacts.indexOf(contact);
        this.contacts.splice(index,1);
    }
}
