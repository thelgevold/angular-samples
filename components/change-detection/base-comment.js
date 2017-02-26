import { Comment } from './comment';
var BaseComment = (function () {
    function BaseComment() {
        this.comments = [];
    }
    BaseComment.prototype.addComment = function () {
        var comment = new Comment();
        comment.text = this.text;
        comment.author = this.author;
        this.comments.push(comment);
    };
    BaseComment.prototype.lastUpdated = function () {
        return Date().toString();
    };
    return BaseComment;
}());
export { BaseComment };
