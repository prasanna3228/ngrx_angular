import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test-for-ngrx',
  templateUrl: './test-for-ngrx.component.html',
  styleUrls: ['./test-for-ngrx.component.css'],
})
export class TestForNgrxComponent {
  @Output() increaceCountNgrx = new EventEmitter();
  @Output() decreaceCountNgrx = new EventEmitter();

  countNgrx = 0;

  IncNgrx() {
    this.increaceCountNgrx.emit();
  }

  DecNgrx() {
    this.decreaceCountNgrx.emit();
  }
}
