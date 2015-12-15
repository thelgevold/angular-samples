var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
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
        core_1.Component({
            template: '<h1>Recursive TreeView</h1><tree-view [directories]="directories"></tree-view>' +
                '          <h4><a href="http://www.syntaxsuccess.com/viewarticle/recursive-treeview-in-angular-2.0">Read more here</a></h4>',
            directives: [tree_view_1.TreeView]
        }), 
        __metadata('design:paramtypes', [])
    ], TreeViewDemo);
    return TreeViewDemo;
})();
exports.TreeViewDemo = TreeViewDemo;
