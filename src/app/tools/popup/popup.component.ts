import { Component, OnInit, Input, SimpleChanges, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit, OnChanges {
  @Input() open;
  @Input() imagesList;
  @Input() lastOrFirst;
  @Output() turn = new EventEmitter <string> ();
  showPopup = 0;
  constructor() { }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.open) {
      this.showPopup = changes.open.currentValue;
    }
  }

  closePopup() {
    this.showPopup = 0;
  }
  
  turnImage(event, status: string) {
    event.stopPropagation();
    this.turn.next(status);
  }
}
