import {Component} from '@angular/core';
import {CommentSection1} from './comment-section-1';
import {CommentSection2} from './comment-section-2';

@Component({
  directives:[CommentSection1,CommentSection2],
  selector:'comment-demo',
  templateUrl:'./components/change-detection/comment-demo.html'
})

export class CommentDemo{

  counter = 0;

  count(){
    this.counter++;
  }

}