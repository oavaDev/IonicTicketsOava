import {Component, Input } from '@angular/core';
import {IConcertInterface} from "../../Interfaces/IConcertInterface";
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-concert-card',
  templateUrl: './concert-card.component.html',
  styleUrls: ['./concert-card.component.scss'],
})
export class ConcertCardComponent{
  @Input() concert : IConcertInterface
  constructor(
    private navCtrl: NavController
  ){
      this.concert = {
        _id: '',
        name: '',
        description: '',
        category: '',
        artists: [{ name: '', image: '' }],
        participants: 0,
        date: '',
        city: '',
        country: '',
        location: '',
        price: '',
        image: '',
        user: ''
      }
  }

  handleRedirect(){
    console.log('Redirecting to event detail'+ this.concert._id)
    this.navCtrl.navigateForward(`/event-detail/${this.concert._id}`)
  }
}
