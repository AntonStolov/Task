import { Planet } from './item/planet';
// import { planets } from './list/planets';
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';


@Injectable()
export class TaskService {



  constructor(private http: Http) { }


  getData(): Observable<any> {
    return this.http.get('https://swapi.co/api/planets/?format=json&page=2')
        .map(response => response.json())
        .catch(error => {
            console.error(error);
            return Observable.throw(error.json())
        });

  }

}
