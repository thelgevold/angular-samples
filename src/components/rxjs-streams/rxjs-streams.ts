import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/concat';

@Component({
  selector:'rxjs-streams',
  template: `
  <div class="stream1">Stream1</div>
  <div class="stream2">Stream2</div>
  <br/>
  <button (click)="mergeStreams()">Merge Streams</button>
  <button (click)="concatStreams()">Concat Streams</button>
  <button (click)="forkJoinStreams()">ForkJoin Streams</button>
  <button (click)="flatMapStreams()">FlatMap Streams</button>

  <div class="stream-section">
    <h4>Concatenated Streams</h4>
    <div *ngFor="let item of concatStream">
      <div class="floatLeft" [ngClass]="{'stream1':item.source === 1,'stream2':item.source === 2}">{{item.value}}</div>
    </div>
  </div>

  <div class="stream-section">
    <h4>Merged Streams</h4>
    <div *ngFor="let item of mergeStream">
      <div class="floatLeft" [ngClass]="{'stream1':item.source === 1,'stream2':item.source === 2}">{{item.value}}</div>
    </div>
  </div>

  <div class="stream-section">
    <h4>ForkJoined Streams</h4>
    <div *ngFor="let item of forkJoinStream">
      <div [ngClass]="{'stream1':item.source === 1,'stream2':item.source === 2}">{{item.value}}</div>
    </div>
  </div>

  <br/>
  <div>
    <h4>Flatmapped Streams</h4>
    <div>{{flatMappedStreams.msg}}</div>
  </div>
`
})
export class RxJsStreams{

  concatStream = [];
  mergeStream = [];
  forkJoinStream = [];
  flatMappedStreams:any = {};

  flatMapStreams(){
    let first = Observable.of(10);

    first.flatMap((operand1) => {
      return Observable.of(operand1 + 10);
    })
    .subscribe(res => this.flatMappedStreams = {msg: '10 + 10 = ' + res});
  }

  concatStreams(){
    let first = Observable.timer(10,500).map(r => {
      return {source:1,value:r};
    }).take(4);

    let second = Observable.timer(10,500).map(r => {
      return {source:2,value:r};
    }).take(4);

    first.concat(second).subscribe(res => this.concatStream.push(res));
  }

  mergeStreams(){
    let first = Observable.timer(10,500).map(r => {
      return {source:1,value:r};
    }).take(4);

    let second = Observable.timer(10,500).map(r => {
      return {source:2,value:r};
    }).take(4);

    first.merge(second).subscribe(res => this.mergeStream.push(res));
  }

  forkJoinStreams(){
    let first = Observable.of({source:1,value:1});

    let second = Observable.of({source:2,value:1});

    Observable.forkJoin(first,second)
              .subscribe((res:Array<any>) => this.forkJoinStream = res);
  }


}