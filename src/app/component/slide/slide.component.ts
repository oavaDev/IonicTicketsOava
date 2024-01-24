import {Component, Input } from '@angular/core';
import {IslideInterface} from "../../Interfaces/IslideInterface";
@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
})
export class SlideComponent {
  @Input() data : IslideInterface
  @Input() index : number
  notifications : number[] = [...new Array(3)].map(() => 0);
  constructor() {
    this.data = {
      title : "",
      description : ""
    };
    this.index = 0
  }
}
