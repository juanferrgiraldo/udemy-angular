import { Component } from '@angular/core';
import { NumberSymbol } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Directives assignment';
  number = 0;
  numbers = [];
  show = false;

  onClick() {
    this.show = !this.show;
    this.number += 1;
    this.numbers.push(this.number);
  }
}
