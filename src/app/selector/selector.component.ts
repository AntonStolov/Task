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
  data: Planet[];

  constructor( private planets: planets, private taskService: TaskService ) { }

  ngOnInit() {
    setTimeout(() => {this.numberOfItems(5)}, 2000);
    this.addPlanetsToData(0);
    console.log(this.planets.end);
    
    }





  numberOfItems(items){
    if (items != this.items){
        this.items = items;
        console.log(this.items);
        items = (this.planets.getNumberOfPlanets()/items) + 1;
        this.itemsPages = Array.apply(null, {length: items}).map(Number.call, Number);
        console.log(this.itemsPages);
    }
  }

  numberStart(numberStart){
    return numberStart*this.items;
  }

  numberEnd(numberEnd){
    return (numberEnd + 1) * this.items;
  }



  addPlanetsToData(number: number){
    let arrayLength: number = this.planets.getAllData().length;
    let NumberOfPlanets: number = this.planets.getNumberOfPlanets();
    console.log("TEST");
    console.log(this.numberEnd(number));
    
    console.log(arrayLength);    
      if (this.numberEnd(number) >= arrayLength ){
        
        
        let currentChain = arrayLength/(10|0)+1;
        let lastChain = this.numberEnd(number)/(10|0)+1;
        console.log(this.numberEnd(number) > arrayLength);
        console.log("Last",lastChain, "Current",currentChain);
        
        
        
        while (lastChain >= currentChain && currentChain <= (NumberOfPlanets/10|0)+1){              
          console.log(currentChain);
          this.taskService.getData(currentChain)
          .subscribe(
              data => {
                this.data = data.results as Planet[];
                this.planets.pushdata(this.data);
                arrayLength = this.planets.getAllData().length;
                NumberOfPlanets = this.planets.getNumberOfPlanets();
                console.log(data.results);
                this.planets.checkFlag(data.count);
                                 
              });
          
          currentChain++;
        }
        
        

      }

  }

  
}
