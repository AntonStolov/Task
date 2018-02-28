import {PlanetsService} from './planets.service';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class TaskService {

  private baseURL = 'https://swapi.co/api/planets/?format=json';

  constructor(private http: Http,
              private planets: PlanetsService) {
  }

  // getPlanets(): Observable<Array<any>> {
  //   let firstPageUrl = this.baseURL + '&page=1';
  //   return this.http.get(firstPageUrl)
  //              .map((response: any) => {
  //                // POPRAVIT
  //                let responseBody = JSON.parse(response._body);
  //                return { planetNumber: responseBody.count, planetsOnPage: responseBody.results };
  //              })
  //              .switchMap((planetNumber: number) => {
  //                console.log('hello');
  //                return this.getPlanetsFromServer(planetNumber, planetsOnPage);
  //              });
  // }

  getPlanetsFromServer(): Observable<any> {
    // POPRAVIT'
    const firstPage = this.baseURL + '&page=1';
    const urls: Array<any> = [
      this.http.get(this.baseURL + '&page=2').map((data: any) => {
        return data.json().results;
      }),
      this.http.get(this.baseURL + '&page=3').map((data: any) => {
        return data.json().results;
      }),
      this.http.get(this.baseURL + '&page=4').map((data: any) => {
        return data.json().results;
      }),
      this.http.get(this.baseURL + '&page=5').map((data: any) => {
        return data.json().results;
      }),
      this.http.get(this.baseURL + '&page=6').map((data: any) => {
        return data.json().results;
      }),
      this.http.get(this.baseURL + '&page=7').map((data: any) => {
        return data.json().results;
      })
    ];

    return this.http.get(firstPage).map((data: any) => {
      return data.json().results;
    })
      .zip(urls[0], urls[1], urls[2], urls[3], urls[4], urls[5]);
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
