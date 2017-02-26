var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
CommentSection2 = __decorate([
    Component({
        templateUrl: './change-detection.html',
        selector: 'comment-section-2',
        changeDetection: ChangeDetectionStrategy.Default
    }),
    __metadata("design:paramtypes", [])
], CommentSection2);
export { CommentSection2 };
