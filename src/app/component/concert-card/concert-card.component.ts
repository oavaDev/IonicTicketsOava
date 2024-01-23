import { Component } from '@angular/core';
import {IConcertInterface} from "../../Interfaces/IConcertInterface";

@Component({
  selector: 'app-concert-card',
  templateUrl: './concert-card.component.html',
  styleUrls: ['./concert-card.component.scss'],
})
export class ConcertCardComponent {
  data : IConcertInterface = {
    participants : 0,
    title : "",
    date : "",
    image : "",
    artist : "",
    artistImage : "",
  }
  constructor() {
    this.data = {
      participants : 0,
      title : "Artistics Museum 2024",
      date : "Feb 12 2022",
      image : "https://th.bing.com/th/id/R.602e1abdfd2e657f8564ec50de0b36bd?rik=txPfD2SiK%2bfaPw&pid=ImgRaw&r=0",
      artist : "Alt-J",
      artistImage : "https://th.bing.com/th/id/OIP.xgAyMS2qCpeNj15r7MfoyQHaFj?w=640&h=480&rs=1&pid=ImgDetMain",
    }
  }


}
