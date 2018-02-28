import {PlanetsService} from '../planets.service';
import {Component, OnInit} from '@angular/core';
import {SelectorService} from '../selector.service';
import {ToggleService} from '../toggle.service';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {

  h3Title = 'Number of planets on one page';

  constructor(private planets: PlanetsService,
              private selector: SelectorService,
              private toggle: ToggleService) {
  }

  ngOnInit() {
    // this.numberOfItems(this.planets.end - this.planets.start);
  }

  onClick(item) {
    this.selector.getNumberOfItems(item.number);
    this.planetOnThePageh3Title();
    return this.toggle.toggleSwitch(item.activ);
  }

  planetOnThePageh3Title() {
    return this.planets.planetsOnThePage() + ' planets on one page';
  }

  numberOfItems(items) {
    this.selector.getNumberOfItems(items);
  }

  itemsOnPage() {
    return this.selector.switchItemsOnPage;
  }

  display(flag) {
    if (flag) {
      return '#00a8af';
    }
  }
}
