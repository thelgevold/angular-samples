import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {of, forkJoin} from 'rxjs';
import {map, catchError, flatMap} from 'rxjs/operators';

@Injectable()
export class CarService {
  apiBaseUrl = '/api';

  constructor(private http: HttpClient) {}

  getModels(url): any {
    return this.http.get(`${this.apiBaseUrl}/${url}`).pipe(
      map((response: any) => response.models),
      catchError(error => of({error: true})),
      flatMap(models =>
        forkJoin(
          models.length
            ? models.map(model =>
                this.http.get(`${this.apiBaseUrl}/${model.url}`).pipe(
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
