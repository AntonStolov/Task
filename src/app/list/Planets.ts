import { Planet } from './../item/planet';
import { Injectable } from '@angular/core';

    @Injectable()

    export class planets {
        private data: Planet[] = [];

        getdata() {
            return this.data;
          }
        
          pushdata(data: Planet[]){
            this.data.push(...data);
          }
    }