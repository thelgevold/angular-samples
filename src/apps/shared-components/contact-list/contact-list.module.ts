import {NgModule} from '@angular/core';

import {ContactList} from './contact-list';
import {SharedModule} from '../shared.module';

@NgModule({
  imports: [SharedModule],  
  declarations: [ContactList]    
})
export class ContactListModule {}