import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'My first Angular app';
  public counter: number = 10;

  increaseBy( val:number ):void {
    this.counter += val;
  }

  decreaseBy( val:number ): void {
    this.counter -= val;
  }

  resetCounter():void {
    this.counter = 10;
  }

}
