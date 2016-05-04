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
    var BoundTextbox;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            BoundTextbox = (function () {
                function BoundTextbox() {
                    this.text = 'hello';
                }
                BoundTextbox.prototype.typing = function ($event) {
                    this.text = $event.target.value;
                };
                BoundTextbox = __decorate([
                    core_1.Component({
                        selector: 'bound-textbox',
                        template: '<h1>Bound Textbox</h1><input [value]="text" (keyup)="typing($event)" /><span>{{text}}</span>'
                    }), 
                    __metadata('design:paramtypes', [])
                ], BoundTextbox);
                return BoundTextbox;
            }());
            exports_1("BoundTextbox", BoundTextbox);
        }
    }
});
//# sourceMappingURL=bound-textbox.js.map