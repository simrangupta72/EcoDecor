import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
// public imagesUrl;
  constructor() { }

  ngOnInit() {
    // this.imagesUrl = [
    //   'assets/slideshow1.jpg',
    //   'assets/slideshow2.jpg',
    //   'assets/slideshow3.jpg'
    // ];
  }

}
