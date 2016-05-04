System.register(['@angular/core', './comment-section-1', './comment-section-2'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, comment_section_1_1, comment_section_2_1;
    var CommentDemo;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (comment_section_1_1_1) {
                comment_section_1_1 = comment_section_1_1_1;
            },
            function (comment_section_2_1_1) {
                comment_section_2_1 = comment_section_2_1_1;
            }],
        execute: function() {
            CommentDemo = (function () {
                function CommentDemo() {
                    this.counter = 0;
                }
                CommentDemo.prototype.count = function () {
                    this.counter++;
                };
                CommentDemo = __decorate([
                    core_1.Component({
                        directives: [comment_section_1_1.CommentSection1, comment_section_2_1.CommentSection2],
                        selector: 'comment-demo',
                        templateUrl: './components/change-detection/comment-demo.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], CommentDemo);
                return CommentDemo;
            }());
            exports_1("CommentDemo", CommentDemo);
        }
    }
});
//# sourceMappingURL=comment-demo.js.map