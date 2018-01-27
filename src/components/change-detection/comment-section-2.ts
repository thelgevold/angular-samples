import {Component,ChangeDetectionStrategy} from '@angular/core';
import {BaseComment} from './base-comment';

@Component({
    templateUrl:'./change-detection.html',
    selector:'comment-section-2',
    changeDetection:ChangeDetectionStrategy.Default
})

export class CommentSection2 extends BaseComment{
    constructor(){
        super();
        this.message = 'Using ChangeDetectionStrategy.Default';
    }
}