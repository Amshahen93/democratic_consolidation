import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  testimonialData = [{
    title: 'Lorem ipsum dolor sit',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quasi perferendis sapiente officiis exercitationem deserunt? perferendis sapiente officiis exercitationem deserunt',
    image: 'assets/images/testimonial/p1.png'
  }, {
    title: 'Lorem ipsum dolor sit',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quasi perferendis sapiente officiis exercitationem deserunt?',
    image: 'assets/images/testimonial/p1.png'
  }, {
    title: 'Lorem ipsum dolor sit',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quasi perferendis sapiente officiis exercitationem deserunt?',
    image: 'assets/images/testimonial/p1.png'
  }, {
    title: 'Lorem ipsum dolor sit',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quasi perferendis sapiente officiis exercitationem deserunt?',
    image: 'assets/images/testimonial/p1.png'
  }, {
    title: 'Lorem ipsum dolor sit',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quasi perferendis sapiente officiis exercitationem deserunt?',
    image: 'assets/images/testimonial/p1.png'
  }, {
    title: 'Lorem ipsum dolor sit',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quasi perferendis sapiente officiis exercitationem deserunt?',
    image: 'assets/images/testimonial/p1.png'
  }, {
    title: 'Lorem ipsum dolor sit',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quasi perferendis sapiente officiis exercitationem deserunt?',
    image: 'assets/images/testimonial/p1.png'
  }];
  projects = [{
    img: 'assets/images/p2.png',
    title: 'Edn Parc Singapore',
    subTitle: 'Architecture, Modern Design',
    routerLink: ['projects'],
    imageType: 'large',
  }, {
    img: 'assets/images/p4.png',
    title: 'Edn Parc Singapore',
    subTitle: 'Architecture, Modern Design',
    routerLink: ['projects'],
    imageType: 'tall'
  }, {
    img: 'assets/images/p1.png',
    title: 'Edn Parc Singapore',
    subTitle: 'Architecture, Modern Design',
    routerLink: ['projects'],
    imageType: 'tall'
  }, {
    img: 'assets/images/p3.png',
    title: 'Edn Parc Singapore',
    subTitle: 'Architecture, Modern Design',
    routerLink: ['projects'],
    imageType: 'large'
  }];
  founders = [{
    image: 'assets/images/default.png',
    name: 'User',
    surname: 'Useryan',
    someText: 'Hac facilisi ac vitae consec tetu commodo vel magna suspendisse on senectus pharetra magnfauc',
    rout: ['founders'],
    active: false
  }, {
    image: 'assets/images/default.png',
    name: 'User',
    surname: 'Useryan',
    someText: 'Hac facilisi ac vitae consec tetu commodo vel magna suspendisse on senectus pharetra magnfauc',
    rout: ['founders'],
    active: false
  }, {
    image: 'assets/images/default.png',
    name: 'User',
    surname: 'Useryan',
    someText: 'Hac facilisi ac vitae consec tetu commodo vel magna suspendisse on senectus pharetra magnfauc',
    rout: ['founders'],
    active: false
  }, {
    image: 'assets/images/default.png',
    name: 'User',
    surname: 'Useryan',
    someText: 'Hac facilisi ac vitae consec tetu commodo vel magna suspendisse on senectus pharetra magnfauc',
    rout: ['founders'],
    active: false
  }]
  constructor(private router: Router) { }

  ngOnInit() {
  }
  point(index) {
    this.founders[index].active = true;
  }
  leave(index) {
    this.founders[index].active = false;
  }
  clickOnFounder(index) {
    this.router.navigate(this.founders[index].rout)
  }
}
