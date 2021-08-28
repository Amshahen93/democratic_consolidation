import { Component, OnInit, Input, Renderer2 } from '@angular/core';
import { Router, ActivationStart } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/Services/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuButtons = [{
    rout: ['home'],
    active: true
  }, {
    rout: ['agenda'],
    active: false
  }, {
    rout: ['projects'],
    active: false
  }, {
    rout: ['founders'],
    active: false
  }, {
    rout: ['about'],
    active: false
  }, {
    rout: ['contact'],
    active: false
  }];
  @Input() background = false;
  backgroundFixed = false;
  headerIsOpen = false;
  changeLanguage = false;
  windowClickEvent = null;
  languages = [{
    name: 'arm'
  }, {
    name: 'eng'
  }];
  selectedLanguage = 'arm';
  constructor(
    private translate: TranslateService,
    private router: Router,
    private renderer: Renderer2,
    private languageService: LanguageService) {
    translate.setDefaultLang('arm');
  }

  ngOnInit() {
    this.router.events.subscribe(e => {
      if (e instanceof  ActivationStart) {
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
      if (this.menuButtons[i].rout[0] === path) {
        this.menuButtons[i].active = true;
      } else {
        this.menuButtons[i].active = false;
      }
    }
    if (path !== 'home') {
      this.backgroundFixed = true;
    } else {
      this.backgroundFixed = false;
    }
  }
  openHeader() {
    this.headerIsOpen = !this.headerIsOpen;
  }
  openChangeLanguage() {
    this.windowClickEvent = this.renderer.listen('window', 'click', () => {
      if (this.changeLanguage) {
        this.changeLanguage = false;
        this.windowClickEvent();
      }
    });
    setTimeout(() => {
      this.changeLanguage = true;
    }, 100);
  }
  stopClick(event) {
    event.stopPropagation();
  }
  selectLanguage(language: string) {
    this.changeLanguage = false;
    this.windowClickEvent();
    this.selectedLanguage = language;
    this.translate.use(language);
    this.languageService.setLanguage(language);
  }
}
