import { Component, OnInit, ViewChild, Output, EventEmitter, Input, ComponentFactoryResolver, ViewContainerRef, ComponentRef } from '@angular/core';
import { DynamicViewPlaceholder } from './models/dynamic-view-placeholder';

@Component({
  selector: 'dynamic-view',
  templateUrl: 'dynamic-view.component.html',
  styleUrls: ['dynamic-view.component.scss']
})
export class DynamicViewComponent implements OnInit {

  @ViewChild('componentHost', {read: ViewContainerRef}) componentHost: ViewContainerRef; 
  @Input() widgetList: Array<{id: string, title: string}> = [];
  @Output() componentInjectionRequested = new EventEmitter<string>();

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }


  onComponentSelected(e) {
    this.componentInjectionRequested.emit(e.target.value);
  }


  injectComponent(placeholder: DynamicViewPlaceholder<any>) {
    const compoFactory = this.componentFactoryResolver.resolveComponentFactory(placeholder.component);
    const compRef: ComponentRef<any> = this.componentHost.createComponent(compoFactory);
    for(const inputKey in placeholder.params.inputs){
      compRef.instance[inputKey] = placeholder.params.inputs[inputKey]
    }

    for(const outputKey in placeholder.params.outputHandlers) {
      compRef.instance[outputKey].subscribe(e => placeholder.params.outputHandlers[outputKey](e))
    }

    
  }




}
