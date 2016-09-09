import { Component } from '@angular/core';
export var CommentDemo = (function () {
    function CommentDemo() {
        this.counter = 0;
    }
    CommentDemo.prototype.count = function () {
        this.counter++;
    };
    CommentDemo.decorators = [
        { type: Component, args: [{
                    selector: 'comment-demo',
                    templateUrl: './comment-demo.html'
                },] },
    ];
    CommentDemo.ctorParameters = [];
    return CommentDemo;
}());
