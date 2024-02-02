import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {IConcertInterface} from "../../Interfaces/IConcertInterface";
import {ApiService} from "../../api/services/api.service";
@Component({
  selector: 'app-concert-card-swiper',
  templateUrl: './concert-card-swiper.component.html',
  styleUrls: ['./concert-card-swiper.component.scss'],
})
export class ConcertCardSwiperComponent implements OnInit{
  concertData: IConcertInterface[] = [];
  constructor(
    private dataService: ApiService,
    private cdr: ChangeDetectorRef
  ){}
  ngOnInit() {
      this.dataService.getEvents().subscribe((data) => {
        this.concertData = data || []
        this.cdr.detectChanges();
      })
  }
}
