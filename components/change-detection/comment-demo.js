import { Component } from '@angular/core';
export class CommentDemo {
    constructor() {
        this.counter = 0;
    }
    count() {
        this.counter++;
    }
}
CommentDemo.decorators = [
    { type: Component, args: [{
                selector: 'comment-demo',
                templateUrl: './comment-demo.html'
            },] },
];
CommentDemo.ctorParameters = [];
