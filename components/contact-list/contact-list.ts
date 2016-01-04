import {Component, Input} from 'angular2/core';
import {Contact} from './contact';

@Component({
    selector: 'contact-list',
    templateUrl: './components/contact-list/contact-list.html'
})

export class ContactList {
    contacts: Array<Contact> = [];

    @Input() name = '';
    @Input() phone = '';

    addContact(){
        const contact = new Contact(this.name,this.phone);
        this.contacts.push(contact);
        this.name = '';
        this.phone = '';
    }

    removeContact(contact){
        const index = this.contacts.indexOf(contact);
        this.contacts.splice(index,1);
    }
}
