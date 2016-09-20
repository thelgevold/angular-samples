System.register(['@angular/core', '@angular/platform-webworker', '@angular/platform-webworker-dynamic'], function(exports_1, context_1) {
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
    var core_1, core_2, platform_webworker_1, platform_webworker_dynamic_1, platform_webworker_2;
    var FACTORIAL_CHANNEL, Worker, WorkerModule;
    function factorial(num) {
        if (num === 0) {
            return 1;
        }
        else {
            return (num * factorial(num - 1));
        }
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (platform_webworker_1_1) {
                platform_webworker_1 = platform_webworker_1_1;
                platform_webworker_2 = platform_webworker_1_1;
            },
            function (platform_webworker_dynamic_1_1) {
                platform_webworker_dynamic_1 = platform_webworker_dynamic_1_1;
            }],
        execute: function() {
            FACTORIAL_CHANNEL = "FACTORIAL";
            Worker = (function () {
                function Worker(_serviceBrokerFactory) {
                    this._serviceBrokerFactory = _serviceBrokerFactory;
                    var broker = _serviceBrokerFactory.createMessageBroker(FACTORIAL_CHANNEL, false);
                    broker.registerMethod("factorial", [platform_webworker_2.PRIMITIVE], this.calculate, platform_webworker_2.PRIMITIVE);
                }
                Worker.prototype.calculate = function (val) {
                    if (val) {
                        var result = factorial(parseInt(val));
                        return Promise.resolve(result);
                    }
                    return Promise.resolve('');
                };
                Worker = __decorate([
                    core_1.Component({
                        selector: 'app',
                        template: '<div>Web worker loaded</div>'
                    }), 
                    __metadata('design:paramtypes', [platform_webworker_2.ServiceMessageBrokerFactory])
                ], Worker);
                return Worker;
            }());
            WorkerModule = (function () {
                function WorkerModule() {
                }
                WorkerModule = __decorate([
                    core_2.NgModule({ imports: [platform_webworker_1.WorkerAppModule], bootstrap: [Worker], declarations: [Worker] }), 
                    __metadata('design:paramtypes', [])
                ], WorkerModule);
                return WorkerModule;
            }());
            platform_webworker_dynamic_1.platformWorkerAppDynamic().bootstrapModule(WorkerModule);
        }
    }
});
//# sourceMappingURL=web-worker-app.js.map