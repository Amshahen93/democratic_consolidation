import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivationStart } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  scroll;
  @ViewChild('scrollableContent', {static: false}) scrollableContent;
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(e => {
      if(e instanceof  ActivationStart) {
        this.scrollableContent.nativeElement.scrollTop = 0;
      }
    });
  }
  onScroll(scroll) {
    this.scroll = scroll;
  }
}
