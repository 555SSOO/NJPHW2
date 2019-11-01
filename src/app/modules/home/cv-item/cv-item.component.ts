import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cv-item',
  templateUrl: './cv-item.component.html'
})
export class CvItemComponent implements OnInit {

  @Input()
  headline: String;

  @Input()
  text: String;

  constructor() {}

  ngOnInit() {
  }

}
