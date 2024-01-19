import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'app-slide-button',
  templateUrl: './slide-button.component.html',
  styleUrls: ['./slide-button.component.scss'],
})
export class SlideButtonComponent   implements OnInit, OnDestroy  {
  interval1: string = 'dark';
  interval2: string = 'dark';
  interval3: string = 'dark';
  intervalSubscription1!: Subscription;
  intervalSubscription2!: Subscription;
  intervalSubscription3!: Subscription;
  intervals = [1000,1050,1100]
  ngOnInit() {
    this.intervalSubscription1 = interval(this.intervals[0])
      .subscribe(() => {
        if (this.interval1 === 'dark') {
          this.interval1 = 'medium';
        } else {
          this.interval1 = 'dark';
        }
      });

    this.intervalSubscription2 = interval(this.intervals[1])
      .subscribe(() => {
        if (this.interval2 === 'dark') {
          this.interval2 = 'medium';
        } else {
          this.interval2 = 'dark';
        }
      });
    this.intervalSubscription1 = interval(this.intervals[2])
      .subscribe(() => {
        if (this.interval3 === 'dark') {
          this.interval3 = 'medium';
        } else {
          this.interval3 = 'dark';
        }
      });
  }

  ngOnDestroy() {
    if (this.intervalSubscription1) {
      this.intervalSubscription1.unsubscribe();
    }
    if (this.intervalSubscription2) {
      this.intervalSubscription2.unsubscribe();
    }
    if (this.intervalSubscription3) {
      this.intervalSubscription3.unsubscribe();
    }
  }
}
