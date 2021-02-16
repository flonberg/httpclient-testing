import { GithubComponent } from './github/github.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './shared/shared.module';
import { GithubModule } from './github/github.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
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
 [],
  bootstrap: [AppComponent]
})
export class AppModule { }
