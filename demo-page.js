if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var tree_view_1 = require('./components/tree-view/tree-view');
var contact_list_1 = require('./components/contact-list/contact-list');
var bound_textbox_1 = require('./components/bound-textbox/bound-textbox');
var directory_1 = require('./components/tree-view/directory');
var DemoPage = (function () {
    function DemoPage() {
        this.loadDirectories();
    }
    DemoPage.prototype.loadDirectories = function () {
        this.directories = [];
        var fall2014 = new directory_1.Directory('Fall 2014', [], ['image1.jpg', 'image2.jpg', 'image3.jpg']);
        var summer2014 = new directory_1.Directory('Summer 2014', [], ['image10.jpg', 'image20.jpg', 'image30.jpg']);
        var pics = new directory_1.Directory('Pictures', [summer2014, fall2014], []);
        var music = new directory_1.Directory('Music', [], ['song1.mp3', 'song2.mp3']);
        this.directories = [pics, music];
    };
    DemoPage = __decorate([
        angular2_1.Component({
            selector: 'demo-page'
        }),
        angular2_1.View({
            templateUrl: './demo-page.html',
            directives: [contact_list_1.ContactList, tree_view_1.TreeView, bound_textbox_1.BoundTextbox]
        }), 
        __metadata('design:paramtypes', [])
    ], DemoPage);
    return DemoPage;
})();
exports.DemoPage = DemoPage;
