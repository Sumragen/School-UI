import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'dateFormat',
  pure: false
})
export class DateFormatPipe implements PipeTransform {
  transform(value: any) {
    if (value.length === 0) {
      return value;
    }
    return new Date(value).toDateString()
  }
}
