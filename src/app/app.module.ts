import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DynamicViewModule} from 'ngx-dynamic-view';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DynamicViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
