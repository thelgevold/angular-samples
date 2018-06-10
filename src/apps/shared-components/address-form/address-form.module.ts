import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';

import {AddressForm} from './address-form';

@NgModule({
  imports: [SharedModule],
  declarations: [AddressForm],
})
export class AddressFormModule {}
