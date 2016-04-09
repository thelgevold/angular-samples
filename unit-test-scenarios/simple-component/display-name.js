System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var DisplayName;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DisplayName = (function () {
                function DisplayName() {
                }
                DisplayName.prototype.generateFullName = function () {
                    this.fullName = this.firstName + ' ' + this.lastName;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], DisplayName.prototype, "firstName", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], DisplayName.prototype, "lastName", void 0);
                DisplayName = __decorate([
                    core_1.Component({
                        selector: 'display-name',
                        templateUrl: './my-template.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], DisplayName);
                return DisplayName;
            }());
            exports_1("DisplayName", DisplayName);
        }
    }
});
