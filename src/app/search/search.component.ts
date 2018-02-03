import { Subject } from 'rxjs/Subject';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private stream = new Subject<string>();
  constructor() { }
  s
  searchThisString(input: string){
    this.stream.next(input);
  }



  ngOnInit() {
    this.stream
        .subscribe(data => {
          console.log(data);
          
        })
  }

}
