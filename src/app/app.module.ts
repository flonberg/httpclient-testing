import { GithubComponent } from './github/github.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './shared/shared.module';
import { GithubModule } from './github/github.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DodCalendarComponent } from './dod-calendar/dod-calendar.component';
import { DatePipe} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    DodCalendarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    GithubModule,
    RouterModule.forRoot([
      { path: '**', component: GithubComponent },
    ])
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
