import { Injectable } from '@angular/core';
import {PlanetsService} from './planets.service';
import {Planet} from './item/planet';

@Injectable()
export class FilterService {
  public result: Planet[] = [];

  constructor(private planets: PlanetsService) {
  }

  DataFromFilter(filter) {
    const localResult: Planet[] = [];
    this.planets.getAllData().forEach((planet) => {
      if (this.applyFilter(planet, filter)) {
        localResult.push(planet);
      }
    });
    this.result = localResult;
  }

  applyFilter(planet: Planet, filter: string): boolean {
    if (planet.name.toLowerCase().indexOf(filter.toLowerCase()) === -1) {
      return false;
    }
    return true;
  }
}

