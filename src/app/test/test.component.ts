import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent {
  // count = 0;

  @Output() increasecountEmit = new EventEmitter();
  @Output() decreasecountEmit = new EventEmitter();

  onIncrease() {
    this.increasecountEmit.emit();
  }
  onDecrease() {
    this.decreasecountEmit.emit();
  }
}
