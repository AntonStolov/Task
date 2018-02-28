import { Injectable } from '@angular/core';
import {PlanetsService} from './planets.service';

@Injectable()
export class SelectorService {
  items = 0;
  public itemsPages = [];

  public switchItemsOnPage = [
          {number: 5, activ: false},
          {number: 10, activ: false},
          {number: 50, activ: false},
          {number: 100, activ: false}
        ];

  constructor(private planets: PlanetsService) { }

  getNumberOfItems(items) {
    // const itemsPages: number[] = [];
    if (items !== this.items) {
      this.items = items;
      items = (this.planets.getNumberOfPlanets() / items) + 1;
      this.itemsPages = Array.apply(null, { length: items }).map((x, number) => {
        return {number: number, activ: false};
      });
      this.itemsPages[0].activ = true;
      console.log(this.itemsPages);
    }
  }



  numberStart(numberStart) {
    return numberStart * this.items;
  }

  numberEnd(numberEnd) {
    return (numberEnd + 1) * this.items;
  }
}
