import { Component, OnInit } from '@angular/core';
import {PlanetsService} from '../planets.service';
import {SelectorService} from '../selector.service';
import {ToggleService} from '../toggle.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['../selector/selector.component.css']
})
export class NavigationComponent implements OnInit {
  h3Title: string = 'pages';

  constructor(private planets: PlanetsService, private selector: SelectorService,
              private toggle: ToggleService) {
  }

  ngOnInit() {
    this.numberOfItems(this.planets.end - this.planets.start);
  }

  numberOfItems(items) {
    this.selector.getNumberOfItems(items)
  }

  itemsPages() {
    return this.selector.itemsPages;
  }

  numberStart(numberStart) {
    return this.selector.numberStart(numberStart);
  }

  numberEnd(numberEnd) {
    return this.selector.numberEnd(numberEnd);
  }

  display(flag) {
    if (flag) {
      return '#00a8af';
    }
  }

  onClick(showItem) {
    return this.toggle.toggleButton(showItem);
  }

}
