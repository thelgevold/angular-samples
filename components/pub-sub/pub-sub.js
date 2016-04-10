System.register(['angular2/core', './producer', './consumer', './pub-sub-service'], function(exports_1, context_1) {
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
    var core_1, producer_1, consumer_1, pub_sub_service_1;
    var PubSub;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (producer_1_1) {
                producer_1 = producer_1_1;
            },
            function (consumer_1_1) {
                consumer_1 = consumer_1_1;
            },
            function (pub_sub_service_1_1) {
                pub_sub_service_1 = pub_sub_service_1_1;
            }],
        execute: function() {
            PubSub = (function () {
                function PubSub() {
                }
                PubSub = __decorate([
                    core_1.Component({
                        selector: 'pub-sub',
                        templateUrl: './components/pub-sub/pub-sub.html',
                        directives: [producer_1.Producer, consumer_1.Consumer],
                        providers: [pub_sub_service_1.PubSubService]
                    }), 
                    __metadata('design:paramtypes', [])
                ], PubSub);
                return PubSub;
            }());
            exports_1("PubSub", PubSub);
        }
    }
});
//# sourceMappingURL=pub-sub.js.map