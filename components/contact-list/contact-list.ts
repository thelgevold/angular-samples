import {Component} from '@angular/core';
import {Contact} from './contact';

@Component({
    selector: 'contact-list',
    template: `
    <div>
    <h1>Contact List</h1>
    <table class="table">
        <thead>
            <tr>
                <td>Name and phone number</td>
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="let contact of contacts" style="margin-bottom: 10px;">
                <td>{{contact.descr}}</td> <td><button class="btn btn-primary btn-xs" (click)="removeContact(contact)">Delete</button></td>
            </tr>
        </tbody>
    </table>

    <div class="addContactControls">
        <input #name placeholder="name" />
        <input #phone placeholder="phone" />
        <button class="btn btn-primary btn-xs" (click)="addContact(name,phone)">Add Contact</button>
    </div>
    </div>`
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
