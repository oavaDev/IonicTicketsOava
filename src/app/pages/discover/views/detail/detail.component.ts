import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ApiService} from "../../../../api/services/api.service";
import {IConcertInterface} from "../../../../Interfaces/IConcertInterface";
import {NavController} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent  implements OnInit {
  concertData: IConcertInterface[] = [];
  constructor(
    private dataService : ApiService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    ) { }

  ngOnInit() {
    let id   = window.location.href.split('/').pop();
    if (id){
    this.dataService.getEventsByCategory(id).subscribe((data) => {
      this.concertData = data;
      this.cdr.detectChanges();
    });
    }
  }
  handleRedirect(_id : string){
    this.router.navigateByUrl(`/event-detail/${_id}`)
  }
}
