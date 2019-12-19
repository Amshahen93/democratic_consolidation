import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivationStart } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuButtons = [{
    name: 'Home',
    rout: ['home'],
    active: true
  }, {
    name: 'Agenda',
    rout: ['agenda'],
    active: false
  }, {
    name: 'Projects',
    rout: ['blogs'],
    active: false
  }, {
    name: 'Founders',
    rout: ['founders'],
    active: false
  }, {
    name: 'About',
    rout: ['about'],
    active: false
  }, {
    name: 'Contact',
    rout: ['contact'],
    active: false
  }]; 
  @Input() background = false;
  backgroundFixed = false;
  headerIsOpen = false;
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(e => {
      if(e instanceof  ActivationStart) {
        this.checkActiveRout(e.snapshot.url[0].path);
        this.headerIsOpen = false;
      }
    });
    
  }

  clickNavbarButton(index: number) {
    this.router.navigate(this.menuButtons[index].rout);
  }
  checkActiveRout(path) {
    for(let i = 0; i < this.menuButtons.length; i++){
      if(this.menuButtons[i].rout[0] === path) {
        this.menuButtons[i].active = true;
      } else {
        this.menuButtons[i].active = false;
      }
    }
    if(path !== 'home') {
      this.backgroundFixed = true;
    } else {
      this.backgroundFixed = false;
    }
  }
  openHeader(){
    this.headerIsOpen = !this.headerIsOpen;
  }
}
