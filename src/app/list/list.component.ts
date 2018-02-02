import { planets } from './Planets';
// import { planets } from './planets';
import { browser } from 'protractor';
import { Planet } from './../item/planet';
import { TaskService } from './../task.service';
// import { ItemComponent } from './../item/item.component';
import { Component, OnInit } from '@angular/core';
import {Subject} from "rxjs/Subject";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  private Subject = new Subject<string>();
  data: Planet[];

  constructor(private taskService: TaskService, private planets: planets) { }



  ngOnInit() {
    
    this.taskService.getData()
        .subscribe(
            data => {
              this.data = data.results as Planet[];
              this.planets.pushdata(this.data);
              console.log(data.results);
              this.planets.checkFlag(data.count);                 
            });
    
  }

}