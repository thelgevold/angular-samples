import { Component } from '@angular/core';
import { Subject }  from 'rxjs/Subject';

import { CarService } from './car.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'cars',
  providers: [CarService],
  styles: [`.selected {background-color: gray;color:white;} 
            .error {color: red; font-weight:bold;}
  `],
  template: `
  <div>
      <h1>Cars</h1>
      <div *ngFor="let car of cars">
        <a [ngClass]="{'selected': car === currentCar}" (click)="getDetails(car)">{{car.name}}</a>
      </div>
      
      <h4>Models</h4>
      <div [ngClass]="{'error': model.notLoaded}" *ngFor="let model of models">
        {{model.name}}
      </div>
      
      <div class="error" *ngIf="error">Error Loading Models</div>
      <div *ngIf="loading">Loading.....</div>
    </div> 
  `
})
export class CarsComponent {

  name:string;
  cars = [{name: 'Lamborghini', url: '/api/lamborghini.json'},
          {name: 'Ferrari', url: '/api/ferrari.json'}];
  models = [];
  error = false;
  loading;
  currentCar = {};
  carSubject = new Subject<string>();

  constructor(private carService: CarService) {}

  ngOnInit() {
   
    this.carSubject
       .distinctUntilChanged()  
       .do(() => {this.models = []; this.loading = true; this.error = false;})
       .switchMap(url => this.carService.getModels(url))
       .subscribe((data: any) => {
         this.error = data.error;
         this.models = data.models;
         this.loading = false;
       });
  }
    
  getDetails(car) {
    this.currentCar = car;
    this.carSubject.next(car.url);
  }
}