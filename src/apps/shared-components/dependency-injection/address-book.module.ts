import {NgModule} from '@angular/core';

import {SharedModule} from '../shared.module';

import {AddressBook} from './address-book';
import {AddressBookTitleService} from './address-book-title-service';

@NgModule({
  imports: [SharedModule],  
  providers: [AddressBookTitleService],  
  declarations: [AddressBook]    
})
export class AddressBookModule {}