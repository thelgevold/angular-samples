import { Component } from '@angular/core';
var CommentDemo = (function () {
    function CommentDemo() {
        this.counter = 0;
    }
    CommentDemo.prototype.count = function () {
        this.counter++;
    };
    return CommentDemo;
}());
export { CommentDemo };
CommentDemo.decorators = [
    { type: Component, args: [{
                selector: 'comment-demo',
                templateUrl: './comment-demo.html'
            },] },
];
CommentDemo.ctorParameters = function () { return []; };
