import { DodCalendarComponent } from './../dod-calendar/dod-calendar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { GithubComponent } from './github.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [GithubComponent,
  DodCalendarComponent],
  exports: [GithubComponent, DodCalendarComponent]
})
export class GithubModule { }
