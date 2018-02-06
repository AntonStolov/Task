import {TaskService} from './../task.service';
import {PlanetsService} from '../planets.service';
import {Component, OnInit} from '@angular/core';
import {Planet} from '../item/planet';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {
  items = 0;
  itemsPages: number[] = [];

  constructor(private planets: PlanetsService,
              private taskService: TaskService) {
  }

  ngOnInit() {
    this.numberOfItems(this.planets.end - this.planets.start);
    // console.log(this.planets.end - this.planets.start);
    this.addPlanetsToData(0);
  }

  numberOfItems(items) {
    if (items !== this.items) {
      this.items = items;
      items = (this.planets.getNumberOfPlanets() / items) + 1;
      this.itemsPages = Array.apply(null, {length: items}).map(Number.call, Number);
    }
  }

  numberStart(numberStart) {
    return numberStart * this.items;
  }

  numberEnd(numberEnd) {
    return (numberEnd + 1) * this.items;
  }

  addPlanetsToData(number: number) {
    let arrayLength: number = this.planets.getAllData().length;
    let numberOfPlanets: number = this.planets.getNumberOfPlanets();

    if (this.numberEnd(number) >= arrayLength) {
      let currentChain = arrayLength / (10 | 0) + 1;
      const lastChain = this.numberEnd(number) / (10 | 0) + 1;

      while (lastChain >= currentChain && currentChain <= (numberOfPlanets / 10 | 0) + 1) {
        this.taskService
          .getData(currentChain)
          .subscribe(
            (data: any) => {

              const parsedData = data.results as Planet[];
              this.planets.pushData(parsedData);
              arrayLength = this.planets.getAllData().length;
              numberOfPlanets = this.planets.getNumberOfPlanets();
              this.planets.checkFlag(data.count);
              this.numberOfItems(this.planets.end - this.planets.start);
            });

        currentChain++;
      }
    }
  }
}
