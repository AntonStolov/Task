import {Planet} from './item/planet';
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'planetfilter',
  pure: false
})
export class PlanetFilterPipe implements PipeTransform {
  transform(items: Planet[], filter: string): Planet[] {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter((item: Planet) => this.applyFilter(item, filter));
  }

  applyFilter(planet: Planet, filter: string): boolean {
    if (planet.name.toLowerCase().indexOf(filter.toLowerCase()) === -1) {
      return false;
    }
    return true;
  }
}
