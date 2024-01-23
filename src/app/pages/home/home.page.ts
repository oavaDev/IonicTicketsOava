import {Component} from '@angular/core';
import {OrbitingSlideComponent} from "../../component/orbiting-slide/orbiting-slide.component";
import {ISlideComponent} from "../../Interfaces/IslideComponent";
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{
  user : string

  constructor() {
    this.user = "Omar"
  }
}
