System.register(['../clock.ts', '@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var clock_ts_1, core_1;
    var La;
    return {
        setters:[
            function (clock_ts_1_1) {
                clock_ts_1 = clock_ts_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            La = (function (_super) {
                __extends(La, _super);
                function La() {
                    _super.call(this, -8);
                    this.city = 'Los Angeles';
                }
                La = __decorate([
                    core_1.Component({
                        selector: 'la',
                        templateUrl: './clock.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], La);
                return La;
            }(clock_ts_1.Clock));
            exports_1("La", La);
        }
    }
});
//# sourceMappingURL=la.js.map