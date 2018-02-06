import {Planet} from './item/planet';
import {Injectable} from '@angular/core';

@Injectable()
export class PlanetsService {
  private data: Planet[] = [];
  private numberOfPlanets: number = 61;
  private numberOfPlanetsFlag: boolean = false;
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
    this.data.push(...data);
  }

  checkFlag(numberOfPlanets) {
    if (!this.numberOfPlanetsFlag) {
      this.numberOfPlanets = numberOfPlanets;
      this.numberOfPlanetsFlag = true;
    }
  }

  getNumberOfPlanets() {
    return this.numberOfPlanets;
  }

  getNumberOfPlanetFlag() {
    return this.numberOfPlanetsFlag;
  }

  planetForInformation(indexForInformation: number) {
    return this.data[indexForInformation];
  }

}
