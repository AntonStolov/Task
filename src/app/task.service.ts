import {PlanetsService} from './planets.service';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class TaskService {

  constructor(private http: Http,
              private planets: PlanetsService) {
  }

  getData(page: number): Observable<any> {
    return this.http
      .get('https://swapi.co/api/planets/?format=json&page=' + page)
      .map((data: any) => {
        return data.json();
      })
      .catch(error => {
        console.error(error);
        return Observable.throw(error.json());
      });

  }
}
