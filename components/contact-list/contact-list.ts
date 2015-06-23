import {Component, View, NgFor} from 'angular2/angular2';
import {Contact} from './contact';

@Component({
    selector: 'contact-list'
})

@View({
    templateUrl: './components/contact-list/contact-list.html',
    directives: [NgFor]
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
