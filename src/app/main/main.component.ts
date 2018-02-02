import { planets } from './../list/Planets';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  numbers = [];



  constructor(private route: ActivatedRoute, private planets: planets) { }

  ngOnInit() {
    this.route.params.subscribe(parems => {
      console.log(parems);
      this.numbers = parems.planets.split('+');
      console.log(typeof(Number(this.numbers[1])));
      this.ChangePlanetAnswer(Number(this.numbers[0]), Number(this.numbers[1]))
    })
  }

  ChangePlanetAnswer(start,end){
    this.planets.start = start;
    this.planets.end = end;    
  }

}
