import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { slideInLeft } from 'ng-animate';

@Component({
  selector: 'app-midsection',
  templateUrl: './midsection.component.html',
  styleUrls: ['./midsection.component.css'],
  animations: [trigger('slideInLeft', [transition('* => *', useAnimation(slideInLeft))])
 ]
})
export class MidsectionComponent implements OnInit {
  slideInLeft: any
  constructor() { }

  ngOnInit() {
  }

}
