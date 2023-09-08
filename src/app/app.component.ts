import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { of, from, merge, take, distinct, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  count = 0;
  countNgrx = 0;
  countNgrxNew = 0;

  constructor(private realStore: Store<any>) {
    this.realStore.subscribe((val) => {
      console.log(val);
      this.countNgrxNew = val.count.c;
    });
    this.realStore.select('c');
  }

  onIncrease() {
    this.count = this.count + 1;
    console.log('increase');
  }
  onDecrease() {
    this.count = this.count - 1;
    console.log('decrease');
  }

  inc() {
    this.countNgrx = this.countNgrx + 1;
  }
  dec() {
    this.countNgrx = this.countNgrx - 1;
  }
}
