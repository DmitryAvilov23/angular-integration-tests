import {Component} from "@angular/core";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public counter = 0;

  increment(): void {
    this.counter++
  }

  decrement(): void {
    this.counter--
  }
}
