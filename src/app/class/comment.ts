import { User } from './user';
import * as moment from 'moment';


export class Comment {
  user: User;
  initial: string;
  message: string;
  date: string;
  key?: string;
  isEdit?: boolean;

  constructor(values: any) {
    this.user = values.user;
    this.initial = values.initial || values.user.displayName.slice(0, 1);
    this.message = values.message;
    this.date = values.date || +moment();
    if (values.key) { this.key = values.key; }
    this.isEdit = false;
  }
}
