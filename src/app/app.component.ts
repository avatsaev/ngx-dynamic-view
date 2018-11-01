import { Component, ViewChild } from '@angular/core';
import { DynamicViewComponent, DynamicViewPlaceholder } from 'ngx-dynamic-view';
import { AccordionComponent } from './components/accordion/accordion.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dynamic-view';

  @ViewChild('dv1') dv1: DynamicViewComponent

  widgetList = [
    {id: 'ACC', title: 'Accordion' },
    {id: 'NS', title: 'Night Sky'}
  ];

  onDetails(title: string){
    //console.log(title)
  }

  onComponentInjectionRequested(id: string) {
    switch(id){
      case 'ACC': {
        const placeholder = new DynamicViewPlaceholder<AccordionComponent>(AccordionComponent, {
          inputs: {
            title: 'My button'
          },
          outputHandlers: {
            details: this.onDetails
          }
        });
        this.dv1.injectComponent(placeholder);
        break;
      }
    
      case 'NS': {
        break;
      }
    }
  }
 }
