import {PlanetsService} from '../planets.service';
import {Planet} from './../item/planet';
import {ActivatedRoute} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';

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

  constructor(private route: ActivatedRoute, private planets: PlanetsService, private location: Location) {
  }

  ngOnInit() {
    this.route.params.subscribe(parems => {
      const num: string = String(parems.num);
      const index = this.planets.getAllData().findIndex(img => img.name.replace(' ', '') === num);
      this.information = this.planets.planetForInformation(index);
    });
  }

  goBack(): void {
    this.location.back();
  }
}
