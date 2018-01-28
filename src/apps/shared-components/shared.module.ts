import {NgModule} from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {CommonModule} from '@angular/common';

@NgModule({
  exports: [FormsModule, ReactiveFormsModule, HttpModule, CommonModule]
})
export class SharedModule {}