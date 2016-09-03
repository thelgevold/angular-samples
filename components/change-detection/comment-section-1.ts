import {Component,ChangeDetectionStrategy} from '@angular/core';
import {BaseComment} from './base-comment';

@Component({
    templateUrl:'./change-detection.html',
    selector:'comment-section-1',
    changeDetection:ChangeDetectionStrategy.OnPush
})

export class CommentSection1 extends BaseComment{
    constructor(){
        super();
        this.message = 'Using ChangeDetectionStrategy.OnPush';
    }
}