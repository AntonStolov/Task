import { PlanetsService } from '../planets.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  h1Title = 'List of planets'
  numbers: Array<number> = [];

  constructor(private route: ActivatedRoute,
              private planets: PlanetsService,
              private taskService: TaskService) {

  }

  ngOnInit() {
    this.routeToThePage();
    this.getDataFromServer();
  }

  routeToThePage() {
    this.route.params
      .subscribe(parems => {
        this.numbers = parems.planets.split('+');
        this.changePlanetAnswer(Number(this.numbers[0]), Number(this.numbers[1]));
      });
  }

  getDataFromServer() {
    if (this.planets.PlanetsFlag){
      this.taskService.getPlanetsFromServer()
        .subscribe((planets: any) => {
          const result = [].concat(...planets);
          this.planets.pushData(result);
          this.planets.PlanetsFlag = false;
        });
    }
  }

  changePlanetAnswer(start, end) {
    this.planets.start = start;
    this.planets.end = end;
  }
}
