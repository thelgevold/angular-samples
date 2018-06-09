import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {CommonModule} from '@angular/common';

@NgModule({
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CommonModule,
    RouterModule,
  ],
})
export class SharedModule {}
