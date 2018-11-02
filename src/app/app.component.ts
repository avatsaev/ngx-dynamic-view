import { Component, OnInit, OnChanges, ViewChild, SimpleChanges } from '@angular/core';
import { DynamicViewComponent, DynamicViewPlaceholder } from 'ngx-dynamic-view';
import { AccordionComponent } from './components/accordion/accordion.component';
import { NightSkyComponent } from './components/night-sky/night-sky.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  selectedComponentId:string;
  starsAmount:number;
  _starsAmount:number;

  @ViewChild('dv1') dv1: DynamicViewComponent

  widgetList = [
    {id: 'ACC', title: 'Accordion' },
    {id: 'NS', title: 'Night Sky'}
  ];

  ngOnChanges() {
    if (this.selectedComponentId === 'NS') {
      this._starsAmount = this.starsAmount;
      this.createNS();
    }
  }


  ngOnInit() {}

  onDetails(title: string){
    //console.log(title)
  }

  onComponentInjectionRequested(id: string) {
    this.selectedComponentId = id;
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
        this.createNS();
        break;
      }
    }
  }

  private createNS() {
    const placeholder = new DynamicViewPlaceholder<NightSkyComponent>(NightSkyComponent, {
      inputs: {
        starsAmount: this._starsAmount
      }
    });
    this.dv1.injectComponent(placeholder);
    console.log('NS');
  }
 }
