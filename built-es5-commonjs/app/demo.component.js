"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var DemoComponent = (function () {
    function DemoComponent(location) {
        this.location = location;
    }
    DemoComponent.prototype.getLinkStyle = function (path) {
        return this.location.path().indexOf(path) > -1;
    };
    return DemoComponent;
}());
DemoComponent = __decorate([
    core_1.Component({
        selector: 'demo-page',
        template: "\n  <div class=\"container\">\n    <div>\n        <div class=\"list-group col-md-3\">\n            <a [class.active]=\"getLinkStyle('/demo/spreadsheet')\" [routerLink]=\"['/demo/spreadsheet']\" class=\"list-group-item\">Virtualized Spreadsheet</a>\n            <a [class.active]=\"getLinkStyle('/demo/countries')\" [routerLink]=\"['/demo/countries']\" class=\"list-group-item\">Lazy Loaded Tree View</a>\n            <a [class.active]=\"getLinkStyle('/demo/rxjs')\" [routerLink]=\"['/demo/rxjs']\" class=\"list-group-item\">RxJs Streams</a>\n            <a [class.active]=\"getLinkStyle('/demo/graph')\" [routerLink]=\"['/demo/graph']\" class=\"list-group-item\">Graph</a>\n            <a [class.active]=\"getLinkStyle('/demo/algorithms')\" [routerLink]=\"['/demo/algorithms']\" class=\"list-group-item\">Insertion Sort</a>\n            <a [class.active]=\"getLinkStyle('/demo/redux')\" [routerLink]=\"['/demo/redux']\" class=\"list-group-item\">Redux</a>\n            <a [class.active]=\"getLinkStyle('/demo/buffering')\" [routerLink]=\"['/demo/buffering']\" class=\"list-group-item\">Buffering in RxJs</a>\n            <a [class.active]=\"getLinkStyle('/demo/survey')\" [routerLink]=\"['/demo/survey']\" class=\"list-group-item\">Dynamic Form</a>\n            <a [class.active]=\"getLinkStyle('/demo/pub-sub')\" [routerLink]=\"['/demo/pub-sub']\" class=\"list-group-item\">Pub Sub</a>\n            <a [class.active]=\"getLinkStyle('/demo/text-editor')\" [routerLink]=\"['/demo/text-editor']\" class=\"list-group-item\">Text Editor</a>\n            <a [class.active]=\"getLinkStyle('/demo/input')\" [routerLink]=\"['/demo/input']\" class=\"list-group-item\">Input Controls</a>\n            <a [class.active]=\"getLinkStyle('/demo/treeview')\" [routerLink]=\"['/demo/treeview']\" class=\"list-group-item\">Recursive tree view</a>\n            <a [class.active]=\"getLinkStyle('/demo/contact')\" [routerLink]=\"['/demo/contact']\" class=\"list-group-item\">Interactive contact list</a>\n            <a [class.active]=\"getLinkStyle('/demo/iodemo')\" [routerLink]=\"['/demo/iodemo']\" class=\"list-group-item\">Input/Output</a>\n       </div>\n\n        <div class=\"col-md-9\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n\n  </div>"
    }),
    __metadata("design:paramtypes", [common_1.Location])
], DemoComponent);
exports.DemoComponent = DemoComponent;
