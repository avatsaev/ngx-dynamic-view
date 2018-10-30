import { NgModule } from '@angular/core';
import { DynamicViewComponent } from './dynamic-view.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DynamicViewComponent],
  exports: [DynamicViewComponent]
})
export class DynamicViewModule { }
