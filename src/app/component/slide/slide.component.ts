import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
})
export class SlideComponent {
  @Input() title : string;
  @Input() description : string
  @Input() flags : string
  @Input() index : number

  constructor() {
    this.title = ""
    this.description = ""
    this.flags = ""
    this.index = NaN
  }
}
