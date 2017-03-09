var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BaseComment } from './base-comment';
var CommentSection2 = (function (_super) {
    __extends(CommentSection2, _super);
    function CommentSection2() {
        var _this = _super.call(this) || this;
        _this.message = 'Using ChangeDetectionStrategy.Default';
        return _this;
    }
    return CommentSection2;
}(BaseComment));
export { CommentSection2 };
CommentSection2.decorators = [
    { type: Component, args: [{
                templateUrl: './change-detection.html',
                selector: 'comment-section-2',
                changeDetection: ChangeDetectionStrategy.Default
            },] },
];
CommentSection2.ctorParameters = function () { return []; };
