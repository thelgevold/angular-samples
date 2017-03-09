var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BaseComment } from './base-comment';
var CommentSection1 = (function (_super) {
    __extends(CommentSection1, _super);
    function CommentSection1() {
        var _this = _super.call(this) || this;
        _this.message = 'Using ChangeDetectionStrategy.OnPush';
        return _this;
    }
    return CommentSection1;
}(BaseComment));
export { CommentSection1 };
CommentSection1.decorators = [
    { type: Component, args: [{
                templateUrl: './change-detection.html',
                selector: 'comment-section-1',
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
CommentSection1.ctorParameters = function () { return []; };
