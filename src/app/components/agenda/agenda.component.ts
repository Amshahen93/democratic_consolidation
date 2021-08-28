import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit, AfterViewInit {
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  bigImage = '';
  enlargeImage = 0;
  videoBig = '';
  enlargeVideo = 0;
  videoOrImage = '';
  images = null;
  imgIndex = null;
  isImageList = false;
  lastOrFirst = 'first';
  @ViewChild('allContent', {static: false}) allContent;
  constructor() {}

  ngOnInit() {}
  ngAfterViewInit(): void {
    this.decideWitchAgendaMustShow();
  }
  createDate(string1: string) {
    let translatedDate = '';
    const dateArray = string1.split('/');
    const date = new Date(+dateArray[2], +dateArray[1], +dateArray[0]);
    translatedDate = `${dateArray[2]} ${this.months[+dateArray[1] - 1]} ${dateArray[0]} - ${this.weekDays[date.getDay()]}`;
    return(translatedDate);
  }
  decideWitchAgendaMustShow() {
    let hash = location.hash;
    if (hash) {
      hash = hash.split('#')[1];
      this.allContent.nativeElement.children[+hash].scrollIntoView({block: 'start', inline: 'nearest'});
    }
  }
  showImage(image, images?, index?) {
    if (images) {
      this.images = images;
      this.imgIndex = index;
      this.isImageList = true;
      if (index === images.length - 1) {
        this.lastOrFirst = 'last';
      } else if (!index) {
        this.lastOrFirst = 'first';
      } else {
        this.lastOrFirst = 'middle';
      }
    } else {
      this.imgIndex = null;
      this.images = null;
      this.isImageList = false;
    }
    this.bigImage = image;
    this.videoOrImage = 'image';
    this.enlargeImage++;
  }
  openVideo(video) {
    this.videoBig = video;
    this.videoOrImage = 'video';
    this.enlargeImage++;
  }

  turnImage(event) {
    if (event === 'right' && this.imgIndex < this.images.length - 1) {
      this.imgIndex++;
      this.decideImage();
    } else if (event === 'left' && this.imgIndex > 0) {
      this.imgIndex--;
      this.decideImage();
    }
  }
  decideImage() {
    this.bigImage = this.images[this.imgIndex];
    if (this.imgIndex === this.images.length - 1) {
      this.lastOrFirst = 'last';
    } else if (!this.imgIndex) {
      this.lastOrFirst = 'first';
    } else {
      this.lastOrFirst = 'middle';
    }
  }
}
