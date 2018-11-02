import { Component, ViewChild } from '@angular/core';
import { DynamicViewComponent, DynamicViewPlaceholder } from 'ngx-dynamic-view';
import { AccordionComponent } from './components/accordion/accordion.component';
import { NightSkyComponent } from './components/night-sky/night-sky.component';


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
            title: 'Click here'
          },
          outputHandlers: {
            details: this.onDetails
          },
          message: '<b>Pandas</b> spend most of their time eating (over 12 hours a day) and is the most expensive animal to have in a zoo: 5 times costlier than elephant, which comes second.'
        });
        this.dv1.injectComponent(placeholder);
        break;
      }
    
      case 'NS': {
        const placeholder = new DynamicViewPlaceholder<NightSkyComponent>(NightSkyComponent);
        this.dv1.injectComponent(placeholder);
        break;
      }
    }
  }
 }
