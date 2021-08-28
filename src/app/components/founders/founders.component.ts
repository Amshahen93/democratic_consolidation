import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-founders',
  templateUrl: './founders.component.html',
  styleUrls: ['./founders.component.scss']
})
export class FoundersComponent implements OnInit, AfterViewInit {
  @ViewChild('allContent', {static: false}) allContent;

  constructor() { }
  ngOnInit() {}

  ngAfterViewInit(): void {
    this.decideWitchAgendaMustShow();
  }
  decideWitchAgendaMustShow() {
    let hash = location.hash;
    if (hash) {
      hash = hash.split('#')[1];
      console.log(this.allContent.nativeElement.children);
      this.allContent.nativeElement.children[+hash].scrollIntoView({block: 'start', inline: 'nearest'});
    }
  }
}
