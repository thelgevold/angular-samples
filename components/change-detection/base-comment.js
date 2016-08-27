import { Comment } from './comment';
export class BaseComment {
    constructor() {
        this.comments = [];
    }
    addComment() {
        let comment = new Comment();
        comment.text = this.text;
        comment.author = this.author;
        this.comments.push(comment);
    }
    lastUpdated() {
        return Date().toString();
    }
}
