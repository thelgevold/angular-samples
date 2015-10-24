var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var tree_view_1 = require('./tree-view');
var directory_1 = require('./directory');
var TreeViewDemo = (function () {
    function TreeViewDemo() {
        this.loadDirectories();
    }
    TreeViewDemo.prototype.loadDirectories = function () {
        var fall2014 = new directory_1.Directory('Fall 2014', [], ['image1.jpg', 'image2.jpg', 'image3.jpg']);
        var summer2014 = new directory_1.Directory('Summer 2014', [], ['image10.jpg', 'image20.jpg', 'image30.jpg']);
        var pics = new directory_1.Directory('Pictures', [summer2014, fall2014], []);
        var music = new directory_1.Directory('Music', [], ['song1.mp3', 'song2.mp3']);
        this.directories = [pics, music];
    };
    TreeViewDemo = __decorate([
        angular2_1.Component({
            template: '<h1>Recursive TreeView</h1><tree-view [directories]="directories"></tree-view>',
            directives: [angular2_1.NgFor, tree_view_1.TreeView, angular2_1.NgIf]
        }), 
        __metadata('design:paramtypes', [])
    ], TreeViewDemo);
    return TreeViewDemo;
})();
exports.TreeViewDemo = TreeViewDemo;
