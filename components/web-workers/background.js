System.register(['@angular/platform-browser-dynamic', '@angular/core'], function(exports_1, context_1) {
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
    var platform_browser_dynamic_1, core_1;
    var App;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            App = (function () {
                function App() {
                    var _this = this;
                    setInterval(function () {
                        _this.time = _this.formatTime(new Date());
                    }, 500);
                }
                App.prototype.formatTime = function (now) {
                    var h = this.padZero(now.getHours());
                    var m = this.padZero(now.getMinutes());
                    var s = this.padZero(now.getSeconds());
                    return h + ":" + m + ":" + s;
                };
                App.prototype.padZero = function (part) {
                    return part >= 10 ? part : "0" + part;
                };
                App = __decorate([
                    core_1.Component({
                        selector: 'app',
                        template: "\n    <div>\n      <div>{{time}}</div>\n      <button (click)=\"null\"></button>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            }());
            platform_browser_dynamic_1.bootstrapWorkerApp(App).catch(function (err) { return console.error(err); });
        }
    }
});
//# sourceMappingURL=background.js.map