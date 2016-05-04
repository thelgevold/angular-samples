import {Component} from '@angular/core';
import {Injectable} from '@angular/core'
import {AddressBookService} from './address-book-service';
import {AddressBookTitleService} from './address-book-title-service';

@Component({
    selector: 'address-book',
    templateUrl: './components/dependency-injection/address-book.html',
    providers:[AddressBookService]
})

export class AddressBook {

    result:Object;
    title:String;

    constructor(addressBookService:AddressBookService,addressBookTitleService:AddressBookTitleService){
        console.log('Creating AddressBook');
        this.result = {people:[]};
        addressBookService.getEntries().subscribe(res => this.result = res);

        this.title = addressBookTitleService.getTitle();

        console.log(addressBookTitleService.callCount);

    }
}