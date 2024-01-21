import {Component, Input } from '@angular/core';
import {ISlideComponent} from "../../Interfaces/IslideComponent";
@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
})
export class SlideComponent {
  @Input() data : ISlideComponent
  @Input() index : number
  notifications: number[] = [1,2,3]
  constructor() {
    this.data = {
      title : "",
      description : ""
    };
    this.index = 0
  }
}
