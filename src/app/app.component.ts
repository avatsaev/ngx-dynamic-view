import { Component, OnInit, ViewChild, ContentChild, ElementRef, ChangeDetectorRef } from '@angular/core';
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

  @ViewChild('dv1') dv1: DynamicViewComponent;
  @ViewChild('starsAmountInput', {read: ElementRef}) starsAmountInput: ElementRef;

  constructor(private cdr:ChangeDetectorRef) {}

  widgetList = [
    {id: 'ACC', title: 'Accordion' },
    {id: 'NS', title: 'Night Sky'}
  ];

  onStarsAmountChange() {
    this.createNS();
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
        this.createNS();
        // Call change detection
        this.cdr.detectChanges();
        this.starsAmountInput.nativeElement.focus();
        break;
      }
    }
  }

  private createNS() {
    const placeholder = new DynamicViewPlaceholder<NightSkyComponent>(NightSkyComponent, {
      inputs: {
        starsAmount: this.starsAmount
      }
    });
    this.dv1.injectComponent(placeholder);
  }
 }
