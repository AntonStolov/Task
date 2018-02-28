import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class TaskService {

  private baseURL = 'https://swapi.co/api/planets/?format=json&page=';

  constructor(private http: Http,) {
  }

  getPlanesCount(): Observable<any> {
    return this.http.get(this.baseURL + '1').map((data: any) => {
      return data.json().count;
    });
  }

  getPlanetsFromServer(count): Observable<any> {
    const observables: Array<any> = [];

    let result: number;

    if (count % 10) {
      result = count / 10;
    } else {
      result = (count / 10) + 1;
    }

    for (let i = 0; i < result; i++) {
      observables.push(this.http.get(this.baseURL + (i + 1)).map((data: any) => {
          return data.json().results;
        })
      );
    }

    return Observable.zip(
      ...observables
    );
  }
}
