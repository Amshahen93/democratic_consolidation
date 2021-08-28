import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/Services/language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  activeIndex = -1;

  constructor(private router: Router, private languageService: LanguageService) {}

  ngOnInit() {}
  point(index) {
    this.activeIndex = index;
  }
  leave() {
    this.activeIndex = -1;
  }
  clickOnFounder(index) {
    this.router.navigate(['founders'], {fragment: '' + index});
  }
  clickOnProjects(index) {
    this.router.navigate(['projects']);
  }
}
