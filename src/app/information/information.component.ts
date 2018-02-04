import { planets } from './../list/Planets';
import { Planet } from './../item/planet';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css',
              '../main/main.component.css',
              '../list/list.component.css'
             ]
})
export class InformationComponent implements OnInit {
  private information: Planet;
  private index;

  constructor(private route: ActivatedRoute, private planets: planets, private location: Location) { }

  ngOnInit() {
    this.route.params.subscribe(parems => {
      let num: string = String(parems.num);
      let index = this.planets.getAllData().findIndex(img => img.name.replace(' ','') === num);
      console.log(this.planets.getAllData());
      console.log(parems.num);      
      console.log(index);
      this.information = this.planets.plenetForInformation(index);
      console.log(this.information);
    })
    
  }


  goBack(): void {
    this.location.back();
  }
}
