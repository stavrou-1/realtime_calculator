import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(calcs: any, term: any): any {
    if (term === undefined) return calcs;    
    const lngs = calcs.filter(calc => calc.value.toUpperCase().includes(term.toUpperCase()));
    return lngs.length > 0 ? lngs : calcs;
  }
}
