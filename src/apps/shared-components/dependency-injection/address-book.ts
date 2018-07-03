import {Component, OnInit} from '@angular/core';
import {Injectable} from '@angular/core';
import {AddressBookService} from './address-book-service';
import {AddressBookTitleService} from './address-book-title-service';
import {IPerson} from '../../models';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'address-book',
  templateUrl: './address-book.html',
  providers: [AddressBookService],
})
export class AddressBook implements OnInit {
  title: string;
  res: any;

  constructor(
    private addressBookService: AddressBookService,
    private addressBookTitleService: AddressBookTitleService,
  ) {
    console.log('Creating AddressBook');
  }

  ngOnInit() {
    this.res = this.addressBookService.getEntries().pipe(
      map((persons: Array<IPerson>) => {
        return persons.map((person: IPerson) => ({
          name: person.name,
          address: person.address,
        }));
      }),
    );

    this.title = this.addressBookTitleService.getTitle();

    console.log(this.addressBookTitleService.callCount);
  }
}
