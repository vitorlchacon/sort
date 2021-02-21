import { Component, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input()
  arraySize = 0;

  @Input()
  maxValue = 0;

  @Output()
  newValue = new Subject<number>();

  @Output()
  shuffleFlag = new Subject<boolean>();

  @Output()
  sortFlag = new Subject<string>();

  constructor() { }

  updateValue(event: any): void {
    this.arraySize = event.value;
    this.newValue.next(event.value);
  }

  shuffle(): void{
    this.shuffleFlag.next();
  }

  sort(): void{
    this.sortFlag.next('insertion');
  }
}
