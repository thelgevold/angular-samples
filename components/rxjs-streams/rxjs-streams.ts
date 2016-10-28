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
  templateUrl:'./rxjs-streams.html'
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