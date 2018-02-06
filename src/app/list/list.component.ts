import {PlanetsService} from '../planets.service';
import {TaskService} from './../task.service';
import {Component} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  constructor(private taskService: TaskService,
              private planets: PlanetsService) {
  }

  actualPlanets() {
    return this.planets.getData();
  }

  inputForFilter() {
    return this.planets.input;
  }

}
