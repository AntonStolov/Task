import { Injectable } from '@angular/core';
import {SelectorService} from './selector.service';

@Injectable()
export class ToggleService {

  constructor(private selector: SelectorService) { }

  toggleButton(showItem) {
    console.log(showItem)
    if (!showItem) {
      this.selector.itemsPages.forEach((item) => {
        item.activ = false;
      });
      return true;
    }
    else {
      return true;
    }
  }

  toggleSwitch(showItem) {
    console.log(showItem)
    if (!showItem) {
      this.selector.switchItemsOnPage.forEach((item) => {
        item.activ = false;
      });
      return true;
    }
    else {
      return true;
    }
  }
}
