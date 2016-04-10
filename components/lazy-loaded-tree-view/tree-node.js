System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TreeNode;
    return {
        setters:[],
        execute: function() {
            TreeNode = (function () {
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
            exports_1("TreeNode", TreeNode);
        }
    }
});
//# sourceMappingURL=tree-node.js.map