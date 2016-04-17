import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Observable';

@Component({
  selector:'rxjs-streams',
  templateUrl:'./components/rxjs-streams/rxjs-streams.html'
})
export class RxJsStreams{

  concatStream = [];
  mergeStream = [];
  forkJoinStream = [];

  concatStreams(){
    let first = Observable.timer(10,500).map(r => {
      return {source:1,value:r};
    }).take(5);

    let second = Observable.timer(10,500).map(r => {
      return {source:2,value:r};
    }).take(5);

    first.concat(second).subscribe(res => this.concatStream.push(res));
  }

  mergeStreams(){
    let first = Observable.timer(10,500).map(r => {
      return {source:1,value:r};
    }).take(5);

    let second = Observable.timer(10,500).map(r => {
      return {source:2,value:r};
    }).take(5);

    first.merge(second).subscribe(res => this.mergeStream.push(res));
  }

  forkJoinStreams(){
    let first = Observable.of({source:1,value:1});

    let second = Observable.of({source:2,value:1});

    Observable.forkJoin(first,second)
              .subscribe((res:Array<any>) => this.forkJoinStream = res);
  }


}