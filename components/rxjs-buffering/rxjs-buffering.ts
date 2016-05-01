import {Component} from 'angular2/core';
import {Subject} from 'rxjs/Subject';

@Component({
  template:`
    <h3>Click three numbers to add</h3>
    <div (click)="add(number)" class="box" *ngFor="let number of numbers">{{number}}</div>
    <div class="sum" *ngIf="showSum">SUM: {{calculation.sum}}</div>
  `
})
export class RxJsBuffering{
  numbers = [1,2,3,4,5];
  sum = new Subject<number>();
  series;
  calculation = {};
  showSum = false;

  add(number){
    this.sum.next(number);
  }

  ngOnInit(){
    this.series = this.sum
                  .asObservable()
                  .do(a => this.showSum = false)
                  .bufferCount(3)
                  .subscribe(res => {
                             this.calculation = {sum:res.reduce((a,b) => a + b)};
                             this.showSum = true;
                  });
  }

}