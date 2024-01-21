import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-slide-button',
  templateUrl: './slide-button.component.html',
  styleUrls: ['./slide-button.component.scss'],
})
export class SlideButtonComponent implements OnInit, OnDestroy {
  intervalNames : string[] = ['interval1', 'interval2', 'interval3'];
  intervals : number[] = [1000, 1050, 1100];
  intervalSubscriptions: Subscription[] = [];

  constructor() {}

  ngOnInit() {
    this.intervalSubscriptions = this.intervals.map((intervalValue, index) => {
      const subscription = interval(intervalValue).subscribe(() => {
        this.toggleInterval(index );
      });
      return subscription;
    });
  }

  ngOnDestroy() {
    this.intervalSubscriptions.forEach((subscription) => {
      if (subscription) {
        subscription.unsubscribe();
      }
    });
  }

  toggleInterval(intervalNumber: number) {
    if (this.intervalNames[intervalNumber] === 'dark') {
      this.intervalNames[intervalNumber] = 'medium';
    } else {
      this.intervalNames[intervalNumber] = 'dark'
    }
  }
}
