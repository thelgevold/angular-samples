import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable } from 'rxjs/Observable';
 
@Injectable() 
export class CarService { 
   
  constructor(private http: Http) {}
   
  getModels(url) {
    return this.http   
        .get(url)
        .map(response => response.json().models)
        .catch(error => Observable.of({error: true}))
        .flatMap(models => Observable
                           .forkJoin(models.length ? models.map(url => this.http.get(url)
                                                           .map(response => response.json())
                                                           .catch(e => Observable.of({notLoaded: true, name: `ERROR Loading ${url}!`})))
                                                   : Observable.of({error: models.error})));       
  }
}