import {Component} from '@angular/core';

@Component({
  selector:'comment-demo',
  templateUrl:'./comment-demo.html'
})

export class CommentDemo{

  counter = 0;

  count(){
    this.counter++;
  }

}