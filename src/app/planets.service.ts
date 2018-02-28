import {Planet} from './item/planet';
import {Injectable} from '@angular/core';

@Injectable()
export class PlanetsService {
  private data: Planet[] = [];
  private numberOfPlanets: number = 61;
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

  pushData(data: Planet[]) {
    this.data = data;
  }

  getNumberOfPlanets() {
    return this.numberOfPlanets;
  }

  planetForInformation(indexForInformation: number) {
    return this.data[indexForInformation];
  }

}
