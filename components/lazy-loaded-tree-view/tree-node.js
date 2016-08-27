export class TreeNode {
    constructor(key, url, name) {
        this.key = key;
        this.url = url;
        this.name = name;
        this.showIcon = false;
        this.expanded = false;
        this.icon = null;
        if (url) {
            this.showIcon = true;
            this.icon = this.getIcon();
        }
    }
    expand() {
        this.expanded = !this.expanded;
        this.icon = this.getIcon();
    }
    getIcon() {
        if (this.showIcon === true) {
            if (this.expanded) {
                return '- ';
            }
            return '+ ';
        }
        return null;
    }
}
