import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'convertToSpaces'
})

export class ConvertToSpacesPipe implements PipeTransform {
  // Interface methods implementation
  transform(value: string, character: string): string {
    return value.replace(character, ' ');
  }

}
