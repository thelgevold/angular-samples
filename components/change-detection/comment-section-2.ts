import {Component,ChangeDetectionStrategy} from 'angular2/core';
import {BaseComment} from './base-comment';

@Component({
    templateUrl:'./components/change-detection/change-detection.html',
    selector:'comment-section-2',
    changeDetection:ChangeDetectionStrategy.Default
})

export class CommentSection2 extends BaseComment{
    constructor(){
        super();
        this.message = 'Using ChangeDetectionStrategy.Default';
    }
}