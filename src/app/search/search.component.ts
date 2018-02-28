import { PlanetsService } from '../planets.service';
import { Subject } from 'rxjs/Subject';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Planet } from '../item/planet';
import {FilterService} from '../filter.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output()
  filteredChanged: EventEmitter<string> = new EventEmitter();

  public stream = new Subject<string>();

  constructor(private planets: PlanetsService, private filter: FilterService) {
  }

  ngOnInit() {
    this.stream
      .debounceTime(500)
        .subscribe(data => {
          console.log(data);
          this.planets.input = data;
          this.filter.DataFromFilter(data);
        });
  }

  filterPlanets(input: string) {
    this.stream.next(input);
  }
}
