import {Component} from '@angular/core';
import {IConcertInterface} from "../../Interfaces/IConcertInterface";

@Component({
  selector: 'app-concert-card-swiper',
  templateUrl: './concert-card-swiper.component.html',
  styleUrls: ['./concert-card-swiper.component.scss'],
})
export class ConcertCardSwiperComponent  {
  concertData : IConcertInterface[]
  constructor() {
    this.concertData = [{
      participants : 2345398,
      title : "Radiohead Live 2024",
      date : "Jul 14 2024",
      image : "https://th.bing.com/th/id/R.f13654454ac0770d7ea0c889074b08cf?rik=1pgaEohUuqt5YA&riu=http%3a%2f%2fksassets.timeincuk.net%2fwp%2fuploads%2fsites%2f55%2f2015%2f05%2fStanleyDonwood11PR210211.jpg&ehk=%2fz1bg5WVDP6lx2LpSRukRKFirNBHXKp23QoV2KJGvjk%3d&risl=&pid=ImgRaw&r=0",
      artist : "Radiohead",
      artistImage : "https://th.bing.com/th/id/OIP.GLCJYplNPd40xxp3tUbdNwHaHa?rs=1&pid=ImgDetMain",
    },{
      participants : 4756,
      title : "Artistics Museum 2024",
      date : "Jul 11 2024",
      image : "https://th.bing.com/th/id/OIP.nSw8wuY-luvWR4NmXvNdlwHaE8?rs=1&pid=ImgDetMain",
      artist : "Alt-J",
      artistImage : "https://th.bing.com/th/id/OIP.xgAyMS2qCpeNj15r7MfoyQHaFj?w=640&h=480&rs=1&pid=ImgDetMain",
    },{
      participants : 300,
      title : "Alley Fest 2024",
      date : "Apr 16 2024",
      image : "https://images.genius.com/7751a53a16c7e503576b0c546fc14e16.1000x1000x1.jpg",
      artist : "A Beacon School",
      artistImage : "https://northerntransmissions.com/wp-content/uploads/2022/04/unnamed-2022-04-08T065936.562.jpg",
    }]
  }

}
