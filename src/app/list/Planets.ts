import { Planet } from './../item/planet';
import { Injectable } from '@angular/core';

    @Injectable()

    export class planets {
        private data: Planet[] = [];
        private numberOfPlanets: number;
        private numberOfPlanetsFlag: boolean = false;
        public start: number;
        public end: number;

        getdata() {
            return this.data.slice(this.start, this.end);
          }
        
        pushdata(data: Planet[]){
            this.data.push(...data);
          }

        checkFlag(numberOfPlanets){
            if(!this.numberOfPlanetsFlag){
                this.numberOfPlanets = numberOfPlanets;
                this.numberOfPlanetsFlag = true;
            }        
        }

        getNumberOfPlanets(){
            return this.numberOfPlanets;
        }

    }