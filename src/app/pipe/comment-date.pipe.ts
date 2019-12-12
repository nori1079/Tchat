import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
@Pipe({
  name: 'commentDate'
})
export class CommentDatePipe implements PipeTransform {

  transform(date: number): string {
    moment.locale('jp');
    return moment(date).format('LLLL');
  }

}
