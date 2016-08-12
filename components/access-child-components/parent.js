System.register(['@angular/core', './child'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, child_1;
    var Parent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (child_1_1) {
                child_1 = child_1_1;
            }],
        execute: function() {
            Parent = (function () {
                function Parent() {
                }
                Parent.prototype.updateViewChildren = function () {
                    this.viewChildren.toArray().forEach(function (child) { return child.setTime(new Date().toTimeString()); });
                };
                __decorate([
                    core_1.ViewChildren(child_1.Child), 
                    __metadata('design:type', core_1.QueryList)
                ], Parent.prototype, "viewChildren", void 0);
                Parent = __decorate([
                    core_1.Component({
                        selector: 'parent',
                        template: "<div>\n                <button (click)=\"updateViewChildren()\">Update Time via ViewChildren</button>\n                <child></child>\n                <child></child>\n              </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], Parent);
                return Parent;
            }());
            exports_1("Parent", Parent);
        }
    }
});
//# sourceMappingURL=parent.js.map