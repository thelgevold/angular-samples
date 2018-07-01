import {Component} from '@angular/core';
import {Observable, timer, forkJoin, of} from 'rxjs';

import {take, merge, concat, flatMap, map} from 'rxjs/operators';

@Component({
  selector: 'rxjs-streams',
  styleUrls: ['rxjs-streams.css'],
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
`,
})
export class RxJsStreams {
  concatStream = [];
  mergeStream = [];
  forkJoinStream = [];
  flatMappedStreams: any = {};

  flatMapStreams() {
    let first = of(10);

    first
      .pipe(
        flatMap(operand1 => {
          return of(operand1 + 10);
        }),
      )
      .subscribe(res => (this.flatMappedStreams = {msg: '10 + 10 = ' + res}));
  }

  concatStreams() {
    let first = timer(10, 500).pipe(
      map(r => {
        return {source: 1, value: r};
      }),
      take(4),
    );

    let second = timer(10, 500).pipe(
      map(r => {
        return {source: 2, value: r};
      }),
      take(4),
    );

    first.pipe(concat(second)).subscribe(res => this.concatStream.push(res));
  }

  mergeStreams() {
    let first = timer(10, 500).pipe(
      map(r => {
        return {source: 1, value: r};
      }),
      take(4),
    );

    let second = timer(10, 500).pipe(
      map(r => {
        return {source: 2, value: r};
      }),
      take(4),
    );

    first.pipe(merge(second)).subscribe(res => this.mergeStream.push(res));
  }

  forkJoinStreams() {
    let first = of({source: 1, value: 1});

    let second = of({source: 2, value: 1});

    forkJoin(first, second).subscribe(
      (res: Array<any>) => (this.forkJoinStream = res),
    );
  }
}
