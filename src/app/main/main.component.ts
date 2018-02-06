import {PlanetsService} from '../planets.service';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  // [x: string]: any;
  numbers: Array<number> = [];

  constructor(private route: ActivatedRoute,
              private planets: PlanetsService) {
  }

  ngOnInit() {
    this.route.params.subscribe(parems => {
      this.numbers = parems.planets.split('+');
      this.changePlanetAnswer(Number(this.numbers[0]), Number(this.numbers[1]));
    });
  }

  changePlanetAnswer(start, end) {
    this.planets.start = start;
    this.planets.end = end;
  }
}
