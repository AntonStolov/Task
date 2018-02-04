import { planets } from './../list/Planets';
  import { Subject } from 'rxjs/Subject';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public stream = new Subject<string>();
  constructor(private planets:planets) { }
  s
  searchThisString(input: string){
    this.stream.next(input);
  }



  ngOnInit() {
    this.stream
        .subscribe(data => {
          console.log(data);
          this.planets.input = data;     
        })
  }

}
