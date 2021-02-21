import { Component, OnInit } from '@angular/core';
import { SORT_METHODS } from './sort-method.model';

function populateArray(size: number): number[] {
  const arrayValues: number[] = [];
  for (let i = 1; i <= size; i ++) {
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
    console.log(newValue);
    this.values = values.slice(0, newValue);
  }

  shuffle(): void {
    this.values.sort(() => Math.random() - 0.5);
  }

  sort(method: string): void {
    this.insertion(this.values);
  }

  private async insertion(inputArr: number[]): Promise<number[]> {
    const n = inputArr.length;
    for (let i = 1; i < n; i++) {
        // Choosing the first element in our unsorted subarray
        const current = inputArr[i];
        // The last element of our sorted subarray
        let j = i - 1;
        while ((j > -1) && (current < inputArr[j])) {
            inputArr[j + 1] = inputArr[j];
            j--;
            await this.sleep(1);
        }

        inputArr[j + 1] = current;
        await this.sleep(1);
    }
    return inputArr;
}

private sleep(ms: number): any {
  return new Promise(resolve => setTimeout(resolve, ms));
}
}
