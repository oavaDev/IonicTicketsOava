import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {IConcertInterface} from "../../Interfaces/IConcertInterface";
import {ApiService} from "../../api/services/api.service";

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.page.html',
  styleUrls: ['./event-detail.page.scss'],
})
export class EventDetailPage implements OnInit {
  event : IConcertInterface | undefined
  id : string | undefined = window.location.pathname.split('/').pop()
  constructor(
    private ApiService: ApiService,
  private cdr: ChangeDetectorRef
  ) {
  }
  ngOnInit() {
    if (this.id){
      this.ApiService.getEvent(this.id).subscribe((data: IConcertInterface) => {
        this.event = data
        this.cdr.detectChanges()
      })
    }
  }
}
