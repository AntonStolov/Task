import { TaskService } from './../task.service';
import { PlanetsService } from '../planets.service';
import { Component, OnInit } from '@angular/core';
import {SelectorService} from '../selector.service';
import {ToggleService} from '../toggle.service';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {

  title = 'Number of planets on one page';

  constructor(private planets: PlanetsService,
              private selector: SelectorService,
              private toggle: ToggleService) {
  }

  ngOnInit() {
    this.numberOfItems(this.planets.end - this.planets.start);
  }

  onClick(item) {
    this.selector.getNumberOfItems(item.number);
    return this.toggle.toggleSwitch(item.activ);
  }

  numberOfItems(items) {
    this.selector.getNumberOfItems(items);
    // this.itemsPages = this.selector.itemsPages;
  }

  itemsOnPage() {
    return this.selector.switchItemsOnPage;
  }

  display(flag) {
    if (flag) {
      return '#00a8af';
    }
  }
  // addPlanetsToData(number: number) {
  //   let arrayLength: number = this.planets.getAllData().length;
  //   let numberOfPlanets: number = this.planets.getNumberOfPlanets();
  //
  //   if (this.numberEnd(number) >= arrayLength) {
  //     // Check bitwise operators (better use || or &&)
  //     let currentChain = arrayLength / (10 | 0) + 1;
  //     const lastChain = this.numberEnd(number) / (10 | 0) + 1;
  //
  //     while (lastChain >= currentChain && currentChain <= (numberOfPlanets / 10 | 0) + 1) {
  //       this.taskService
  //           .getData(currentChain)
  //           .subscribe(
  //             (data: any) => {
  //
  //               const parsedData = data.results as Planet[];
  //               this.planets.pushData(parsedData);
  //               arrayLength = this.planets.getAllData().length;
  //               numberOfPlanets = this.planets.getNumberOfPlanets();
  //               this.planets.checkFlag(data.count);
  //               this.numberOfItems(this.planets.end - this.planets.start);
  //             });
  //
  //       currentChain++;
  //     }
  //   }
  // }
}
