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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var DemoPage = (function () {
    function DemoPage(location) {
        this.location = location;
    }
    DemoPage.prototype.getLinkStyle = function (path) {
        return this.location.path().indexOf(path) > -1;
    };
    DemoPage = __decorate([
        core_1.Component({
            selector: 'demo-page',
            template: "<div class=\"container\">\n\n    <div class=\"jumbotron\">\n        <h1>Angular sample components</h1>\n        <p>\n            More documentation about each specific component can be found\n            <a href=\"http://www.syntaxsuccess.com/angular-2-articles\">here</a>.\n        </p>\n        <p>Current version: Angular 6.0.0 - Beta 1</p>\n    </div>\n\n    <div>\n        <div class=\"list-group col-md-3\">\n            <a [class.active]=\"getLinkStyle('/demo/spreadsheet')\" [routerLink]=\"['/demo/spreadsheet']\" class=\"list-group-item\">Virtualized Spreadsheet</a>\n            <a [class.active]=\"getLinkStyle('/demo/countries')\" [routerLink]=\"['/demo/countries']\" class=\"list-group-item\">Lazy Loaded Tree View</a>\n            <a [class.active]=\"getLinkStyle('/demo/rxjs')\" [routerLink]=\"['/demo/rxjs']\" class=\"list-group-item\">RxJs Streams</a>\n            <a [class.active]=\"getLinkStyle('/demo/friends')\" [routerLink]=\"['/demo/friends']\" class=\"list-group-item\">RxJs Caching</a>\n            <a [class.active]=\"getLinkStyle('/demo/react')\" [routerLink]=\"['/demo/react']\" class=\"list-group-item\">React Integration</a>\n            <a [class.active]=\"getLinkStyle('/demo/graph')\" [routerLink]=\"['/demo/graph']\" class=\"list-group-item\">Graph</a>\n            <a [class.active]=\"getLinkStyle('/demo/algorithms')\" [routerLink]=\"['/demo/algorithms']\" class=\"list-group-item\">Insertion Sort</a>\n            <a [class.active]=\"getLinkStyle('/demo/redux')\" [routerLink]=\"['/demo/redux']\" class=\"list-group-item\">Redux</a>\n            <a [class.active]=\"getLinkStyle('/demo/cars')\" [routerLink]=\"['/demo/cars']\" class=\"list-group-item\">Error Handling in RxJs</a>\n            <a [class.active]=\"getLinkStyle('/demo/buffering')\" [routerLink]=\"['/demo/buffering']\" class=\"list-group-item\">Buffering in RxJs</a>\n            <a [class.active]=\"getLinkStyle('/demo/survey')\" [routerLink]=\"['/demo/survey']\" class=\"list-group-item\">Dynamic Form</a>\n            <a [class.active]=\"getLinkStyle('/demo/pub-sub')\" [routerLink]=\"['/demo/pub-sub']\" class=\"list-group-item\">Pub Sub</a>\n            <a [class.active]=\"getLinkStyle('/demo/text-editor')\" [routerLink]=\"['/demo/text-editor']\" class=\"list-group-item\">Text Editor</a>\n            <a [class.active]=\"getLinkStyle('/demo/form')\" [routerLink]=\"['/demo/form']\" class=\"list-group-item\">Form</a>\n            <a [class.active]=\"getLinkStyle('/demo/change')\" [routerLink]=\"['/demo/change']\" class=\"list-group-item\">Change Detection</a>\n            <a [class.active]=\"getLinkStyle('/demo/http')\" [routerLink]=\"['/demo/http']\" class=\"list-group-item\">Http</a>\n            <a [class.active]=\"getLinkStyle('/demo/input')\" [routerLink]=\"['/demo/input']\" class=\"list-group-item\">Input Controls</a>\n            <a [class.active]=\"getLinkStyle('/demo/treeview')\" [routerLink]=\"['/demo/treeview']\" class=\"list-group-item\">Recursive tree view</a>\n            <a [class.active]=\"getLinkStyle('/demo/grid')\" [routerLink]=\"['/demo/grid']\" class=\"list-group-item\">Data Grid</a>\n            <a [class.active]=\"getLinkStyle('/demo/address')\" [routerLink]=\"['/demo/address']\" class=\"list-group-item\">Address Book</a>\n            <a [class.active]=\"getLinkStyle('/demo/jquery')\" [routerLink]=\"['/demo/jquery']\" class=\"list-group-item\">JQuery Integration</a>\n            <a [class.active]=\"getLinkStyle('/demo/parent-child')\" [routerLink]=\"['/demo/parent-child']\" class=\"list-group-item\">Access Child Component</a>\n            <a [class.active]=\"getLinkStyle('/demo/contact')\" [routerLink]=\"['/demo/contact']\" class=\"list-group-item\">Interactive contact list</a>\n            <a [class.active]=\"getLinkStyle('/demo/textbox')\" [routerLink]=\"['/demo/textbox']\" class=\"list-group-item\">Bound Textbox</a>\n            <a [class.active]=\"getLinkStyle('/demo/iodemo')\" [routerLink]=\"['/demo/iodemo']\" class=\"list-group-item\">Input/Output</a>\n            <a [class.active]=\"getLinkStyle('/demo/non-bindable')\" [routerLink]=\"['/demo/non-bindable']\" class=\"list-group-item\">Non Bindable</a>\n       </div>\n\n        <div class=\"col-md-9\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n\n</div>"
        }),
        __metadata("design:paramtypes", [common_1.Location])
    ], DemoPage);
    return DemoPage;
}());
exports.DemoPage = DemoPage;
