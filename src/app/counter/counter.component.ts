import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h2>Counter: {{ start }}</h2>
    <p><button (click)="increment()">Increment</button></p>
  `,
})
export class CounterComponent {
  @Input() start?: number;
  @Input() step?: number;

  increment() {
    this.start = (this.start ?? 0) + (this.step ?? 1);
  }
}
