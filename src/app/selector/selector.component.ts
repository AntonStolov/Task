import { TaskService } from './../task.service';
import { Planet } from './../item/planet';
import { planets } from './../list/Planets';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {
  items: number = 4;
  itemsPages: number[] = [];
  constructor( private planets: planets, private taskService: TaskService ) { }

  NumberOfItems(items){
    if (items != this.items){
        this.items = items;
        console.log(this.items);
        items = (this.planets.getNumberOfPlanets()/items) + 1;
        this.itemsPages = Array.apply(null, {length: items}).map(Number.call, Number);
        console.log(this.itemsPages);
        

    }
        
  }

  ngOnInit() {
  //setTimeout(() => {this.NumberOfItems(5)}, 3000);

  //this.taskService.getData().subscribe(() => this.NumberOfItems(5)) 
  }
  
}
