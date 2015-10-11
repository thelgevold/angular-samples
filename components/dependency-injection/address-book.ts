import {Component,CORE_DIRECTIVES} from 'angular2/angular2';
import {Injectable} from 'angular2/angular2'
import {AddressBookService} from './address-book-service';
import {AddressBookTitleService} from './address-book-title-service';

@Component({
    selector: 'address-book',
    directives:[CORE_DIRECTIVES],
    templateUrl: './components/dependency-injection/address-book.html',
    bindings:[AddressBookService]
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