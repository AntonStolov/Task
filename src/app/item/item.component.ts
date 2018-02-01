// import { planets } from './../list/planets';
import { Planet } from './planet';
import { planets } from './../list/Planets';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(private planets: planets) { console.log(this.planets.getdata());
   }
  
   actualPlanets() {
     return this.planets.getdata();
   }
  

  ngOnInit() {
  }

}
