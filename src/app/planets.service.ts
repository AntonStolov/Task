import {Planet} from './item/planet';
import {Injectable} from '@angular/core';

@Injectable()
export class PlanetsService {
  private data: Planet[] = [];
  private numberOfPlanets: number;
  public PlanetsFlag: boolean = true;
  public start: number;
  public end: number;
  public input: string;

  constructor() {
  }

  getAllData() {
    return this.data;
  }

  getData() {
      return this.data.slice(this.start, this.end);
  }

  planetsOnThePage() {
    if (this.end > this.numberOfPlanets) {
      return this.numberOfPlanets - this.start;
    } else {
      return this.end - this.start;
    }
  }

  pushData(data: Planet[]) {
    this.data = data;
  }

  getNumberOfPlanets() {
    return this.numberOfPlanets;
  }

  changeNumberOfPlanets(number) {
    this.numberOfPlanets = number;
  }

  planetForInformation(indexForInformation: number) {
    return this.data[indexForInformation];
  }

}
