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

  constructor(private vcRef: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  onComponentSelected(e) {
    this.componentInjectionRequested.emit(e.target.value);
  }

  injectComponent(placeholder: DynamicViewPlaceholder<any>) {
    this.componentHost.clear();
    const compoFactory = this.componentFactoryResolver.resolveComponentFactory(placeholder.component);
    
    if (placeholder.params) {
      const htmlNode = document.createElement('div');
      htmlNode.innerHTML = placeholder.params.message;
      const compRef: ComponentRef<any> = this.componentHost.createComponent(compoFactory, 0, undefined, 
        placeholder.params.message ? [ [htmlNode] ] : []);
      
      if(placeholder.params.inputs) {
        for(const inputKey in placeholder.params.inputs){
          compRef.instance[inputKey] = placeholder.params.inputs[inputKey];
        }
      }
      
      if(placeholder.params.outputHandlers) {
        for(const outputKey in placeholder.params.outputHandlers) {
          compRef.instance[outputKey].subscribe(e => placeholder.params.outputHandlers[outputKey](e));
        }
      }
    } else {
      const compRef: ComponentRef<any> = this.componentHost.createComponent(compoFactory);
    }
  }
}
