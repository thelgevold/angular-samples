var TreeNode = (function () {
    function TreeNode(key, url, name) {
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
    TreeNode.prototype.expand = function () {
        this.expanded = !this.expanded;
        this.icon = this.getIcon();
    };
    TreeNode.prototype.getIcon = function () {
        if (this.showIcon === true) {
            if (this.expanded) {
                return '- ';
            }
            return '+ ';
        }
        return null;
    };
    return TreeNode;
}());
export { TreeNode };
