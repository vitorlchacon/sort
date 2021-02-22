import { Component, OnInit } from '@angular/core';
import { SORT_METHODS } from './sort-method.model';

function populateArray(size: number): number[] {
  const arrayValues: number[] = [];
  for (let i = 1; i <= size; i++) {
    arrayValues.push(i * 4);
  }
  return arrayValues;
}

const MAX_VALUE = 200;
const values = populateArray(MAX_VALUE);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  arraySize = 50;
  values: number[] = [];

  get maxValue(): number {
    return MAX_VALUE;
  }

  constructor() { }

  ngOnInit(): void {
    this.values = values.slice(0, this.arraySize);
  }

  printNew(newValue: number): void {
    this.values = values.slice(0, newValue);
  }

  shuffle(): void {
    this.values.sort(() => Math.random() - 0.5);
  }

  async sort(method: string): Promise<any> {
    const initDate = performance.now();
    switch (method) {
      case 'insertion':
        await this.insertionSort(this.values);
        break;
      case 'merge':
        await this.mergeSort(this.values);
        break;
      case 'bubble':
        await this.bubbleSort(this.values);
        break;
      case 'selection':
        await this.selectionSort(this.values);
        break;
    }
    const endDate = performance.now();
    console.log((endDate - initDate) / 1000);
  }

  private async insertionSort(inputArr: number[]): Promise<number[]> {
    // TODO
    
    return [];
  }

  private async bubbleSort(inputArr: number[]): Promise<number[]> {
    // TODO
    return [];
  }

  private async selectionSort(inputArr: number[]): Promise<number[]> {
    // TODO
    return [];
  }

  private async mergeSort(inputArr: number[]): Promise<number[]> {
    // TODO
    return [];
  }

  private sleep(ms: number): any {
  return new Promise(resolve => setTimeout(resolve, ms));
}
}
