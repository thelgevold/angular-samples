System.register(['./comment'], function(exports_1) {
    var comment_1;
    var BaseComment;
    return {
        setters:[
            function (comment_1_1) {
                comment_1 = comment_1_1;
            }],
        execute: function() {
            BaseComment = (function () {
                function BaseComment() {
                    this.comments = [];
                }
                BaseComment.prototype.addComment = function () {
                    var comment = new comment_1.Comment();
                    comment.text = this.text;
                    comment.author = this.author;
                    this.comments.push(comment);
                };
                BaseComment.prototype.lastUpdated = function () {
                    return Date().toString();
                };
                return BaseComment;
            })();
            exports_1("BaseComment", BaseComment);
        }
    }
});
