import { PlanetsService } from '../planets.service';
import { Component, Input } from '@angular/core';
import {FilterService} from '../filter.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  constructor(private planets: PlanetsService,
              private filter: FilterService) {
  }

  actualPlanets() {
    if (this.planets.input) {
      return this.filter.result;
    } else {
      return this.planets.getData();
    }
  }
}
