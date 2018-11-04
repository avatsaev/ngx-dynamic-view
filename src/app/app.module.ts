import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {DynamicViewModule} from 'ngx-dynamic-view';
import { AccordionComponent } from './components/accordion/accordion.component';
import { NightSkyComponent } from './components/night-sky/night-sky.component';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    NightSkyComponent
  ],
  imports: [
    BrowserModule,
    DynamicViewModule,
    FormsModule
  ],
  entryComponents: [
    AccordionComponent,
    NightSkyComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
