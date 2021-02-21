import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input()
  arraySize = 0;

  @Output()
  newValue = new Subject<number>();

  constructor() { }

  updateValue(event: any): void {
    this.arraySize = event.value;
    this.newValue.next(event.value);
  }
}
