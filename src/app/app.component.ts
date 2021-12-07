import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App';
  Balance = 0;
  val = -1;
  images: string[] = [];
  currentImage = "";
  slide: boolean = false;
  isvalid: boolean = false;

  flagj: string = "japanese.png";
  flagc: string = "chinese.png";
  flagk: string = "korean.png";
  flagt: string = "thai.png";

  constructor() {
    this.initializeImages();
    this.next();

  }
  ngOninit() {
  }
  next() {
    this.val += 1;
    this.isvalid = true;
    if (this.val > 9) {
      return;
    }

    this.slideDown();

  }

  selection(val: string) {

    if (this.val < 10) {
      if (this.slide) {
        if (this.currentImage.includes(val)) {

          this.Balance += 5;
          this.checkImage(val);
        }
        else {
          this.Balance -= 5;
        }
      }
      setTimeout(() => {

        this.next();
      }, 2000);
    }
  }
  slideDown() {
    if (!this.slide) {

      this.currentImage = this.images[this.val];
      this.isvalid = false;
    }
    this.slide = true;
    setTimeout(() => {
      if (this.slide) {
        this.slide = false;
        setTimeout(() => {
          if (this.isvalid && this.val<10) {
            this.slideDown();
          }
        }, 100);
      }
    }, 3000);
  }
  initializeImages() {

    this.images.push("chinese1.jpg");
    this.images.push("chinese2.jpg");
    this.images.push("japanese1.jpg");
    this.images.push("japanese2.jpg");
    this.images.push("japanese3.jpg");
    this.images.push("korean1.jpg");
    this.images.push("korean2.jpg");
    this.images.push("korean3.jpg");
    this.images.push("thai1.jpg");
    this.images.push("thai2.jpg");
  }
  checkImage(val: string) {

    if (this.flagc.includes(val)) {
      let value=this.flagc;
      this.flagc = this.currentImage;
      setTimeout(() => {
        this.flagc=value;
      }, 2000);
    } else if (this.flagj.includes(val)) {
      let value=this.flagj;
      this.flagj = this.currentImage;
      setTimeout(() => {
        this.flagj=value;
      }, 2000);
    }
    else if (this.flagk.includes(val)) {
      let value=this.flagk;
      this.flagk = this.currentImage;
      setTimeout(() => {
        this.flagk=value;
      }, 2000);
    }
    else if (this.flagt.includes(val)) {
      let value=this.flagt;
      this.flagt = this.currentImage;
      setTimeout(() => {
        this.flagt=value;
      }, 2000);
    }
  }
}
