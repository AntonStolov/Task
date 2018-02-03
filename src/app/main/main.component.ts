import { TaskService } from './../task.service';
import { planets } from './../list/Planets';
import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Planet } from "../item/planet";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnChanges  {
  [x: string]: any;
  numbers = [];



  constructor(private route: ActivatedRoute, 
              private planets: planets,
              private taskService: TaskService) { }

  ngOnInit() {
    this.route.params.subscribe(parems => {
      console.log(parems);
      this.numbers = parems.planets.split('+');
      console.log(typeof(Number(this.numbers[1])));
      this.ChangePlanetAnswer(Number(this.numbers[0]), Number(this.numbers[1]))
    })
  }

  ngOnChanges(){
    // this.addPlanetsToData(this.planets.end);
  }

  ChangePlanetAnswer(start,end){
    this.planets.start = start;
    this.planets.end = end;    
  }

  

}
