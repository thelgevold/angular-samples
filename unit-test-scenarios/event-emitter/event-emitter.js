System.register(['@angular/core'], function(exports_1, context_1) {
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
    var Child, Parent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Child = (function () {
                function Child() {
                    this.greeting = new core_1.EventEmitter();
                }
                Child.prototype.sayHello = function () {
                    this.greeting.emit({ greeting: 'hello' });
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], Child.prototype, "greeting", void 0);
                Child = __decorate([
                    core_1.Component({
                        selector: 'child',
                        template: "<button (click)=\"sayHello()\">Greet</button>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], Child);
                return Child;
            }());
            exports_1("Child", Child);
            Parent = (function () {
                function Parent() {
                }
                Parent.prototype.onGreeting = function (e) {
                    console.log(e);
                };
                Parent = __decorate([
                    core_1.Component({
                        selector: 'parent',
                        template: "<child (greeting)=\"onGreeting($event)\"></child>",
                        directives: [Child]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Parent);
                return Parent;
            }());
            exports_1("Parent", Parent);
        }
    }
});
//# sourceMappingURL=event-emitter.js.map