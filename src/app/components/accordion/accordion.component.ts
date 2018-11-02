import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  public isOpen: boolean = false;
  @Input()  title: string;
  @Output() details = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onClickHeandler() {
    this.details.emit(this.title);
    this.isOpen = !this.isOpen;
  }

}
