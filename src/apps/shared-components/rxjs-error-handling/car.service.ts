import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Observable, of, forkJoin} from 'rxjs';
import {map, catchError, flatMap} from 'rxjs/operators';

@Injectable()
export class CarService {
  apiBaseUrl = 'http://localhost:9000/api';

  constructor(private http: Http) {}

  getModels(url) {
    return this.http.get(`${this.apiBaseUrl}/${url}`).pipe(
      map(response => response.json().models),
      catchError(error => of({error: true})),
      flatMap(models =>
        forkJoin(
          models.length
            ? models.map(model =>
                this.http.get(`${this.apiBaseUrl}/${model.url}`).pipe(
                  map(response => response.json()),
                  catchError(e =>
                    of({
                      notLoaded: true,
                      name: `ERROR Loading ${model.name}!`,
                    }),
                  ),
                ),
              )
            : of({error: models.error}),
        ).pipe(
          map((res: any) => {
            return {models: res, error: (res[0] || {}).error};
          }),
        ),
      ),
    );
  }
}
