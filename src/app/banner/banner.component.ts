import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce } from 'ng-animate';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [
   trigger('bounce', [transition('* => *', useAnimation(bounce))])
 ]
})
export class BannerComponent implements OnInit {
  bounce: any
  constructor() { }

  ngOnInit() {
  }

}
