import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BaseComment } from './base-comment';
export class CommentSection2 extends BaseComment {
    constructor() {
        super();
        this.message = 'Using ChangeDetectionStrategy.Default';
    }
}
CommentSection2.decorators = [
    { type: Component, args: [{
                templateUrl: './change-detection.html',
                selector: 'comment-section-2',
                changeDetection: ChangeDetectionStrategy.Default
            },] },
];
CommentSection2.ctorParameters = [];
