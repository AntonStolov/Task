import { PlanetsService } from '../planets.service';
import { TaskService } from './../task.service';
import { Component, Input } from '@angular/core';
import {FilterService} from "../filter.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  displayedPlanets: Array<any> = [];

  constructor(private planets: PlanetsService,
              private filter: FilterService) {
  }

  actualPlanets() {
    if (this.planets.input) {
      return this.filter.result;
    }
    else {
      return this.planets.getData();
    }
  }

  inputForFilter() {
    return this.planets.input;
  }

}
