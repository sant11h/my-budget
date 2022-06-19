import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';

@Pipe({
  name: 'beautifyDate',
})
export class BeautifyDatePipe implements PipeTransform {
  transform(date: Date): string {
    return moment(date).fromNow();
  }
}
