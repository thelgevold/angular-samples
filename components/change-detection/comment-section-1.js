import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BaseComment } from './base-comment';
export class CommentSection1 extends BaseComment {
    constructor() {
        super();
        this.message = 'Using ChangeDetectionStrategy.OnPush';
    }
}
CommentSection1.decorators = [
    { type: Component, args: [{
                templateUrl: './change-detection.html',
                selector: 'comment-section-1',
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
CommentSection1.ctorParameters = () => [];
