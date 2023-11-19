import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>Counter Template</h1>
    <h3>Counter: {{ counter }}</h3>
    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="decreaseBy(1)">-1</button>
    <br />
    <button (click)="resetCounter()">Reset</button>
  `,
})
export class CounterComponent {
  constructor() {}

  public counter: number = 10;

  increaseBy(val: number): void {
    this.counter += val;
  }

  decreaseBy(val: number): void {
    this.counter -= val;
  }

  resetCounter(): void {
    this.counter = 10;
  }
}
