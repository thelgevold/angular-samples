import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';

import {CarService} from './car.service';
import {CarsComponent} from './cars.component';

@NgModule({
  imports: [SharedModule],
  providers: [CarService],
  declarations: [CarsComponent],
})
export class RxJsErrorHandlingModule {}
