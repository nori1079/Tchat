import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ChatComponent } from './chat/chat.component';

import { UserListComponent } from './user-list/user-list.component';
import { TimelineRoutingModule } from '../time/timeline-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TimelineRoutingModule
  ],
  declarations: [
    ChatComponent,
    UserListComponent
  ]
})
export class TimelineModule { }
