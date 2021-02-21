import { Component, OnInit } from '@angular/core';

function populateArray(size: number): number[] {
  const arrayValues: number[] = [];
  for (let i = 1; i <= size; i ++) {
    arrayValues.push(i * 4);
  }
  return arrayValues;
}

const MAX_VALUE = 350;
const values = populateArray(MAX_VALUE);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  arraySize = 50;
  values: number[] = [];

  constructor() { }

  ngOnInit(): void {
    this.values = values.slice(0, this.arraySize);
  }

  printNew(newValue: any): void {
    this.values = values.slice(0, newValue);
  }
}
