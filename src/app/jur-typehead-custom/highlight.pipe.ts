import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  transform(value: any, partial: any): any {

    const indexPartial = value.toUpperCase().search(partial.toUpperCase());
    const partialResult = value.substring(indexPartial, indexPartial + partial.length);
    const result = value.replace(partialResult, `<mark>${partialResult}</mark>`);
    return result;
  }

}
