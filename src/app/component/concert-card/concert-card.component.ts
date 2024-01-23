import {Component, Input} from '@angular/core';
import {IConcertInterface} from "../../Interfaces/IConcertInterface";

@Component({
  selector: 'app-concert-card',
  templateUrl: './concert-card.component.html',
  styleUrls: ['./concert-card.component.scss'],
})
export class ConcertCardComponent {
  @Input() concert : IConcertInterface
  constructor() {
    this.concert = {
      participants : 0,
      title : "",
      date : "",
      image : "",
      artist : "",
      artistImage : "",
    }
  }


}
