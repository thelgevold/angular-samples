var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var producer_1 = require('./producer');
var consumer_1 = require('./consumer');
var pub_sub_service_1 = require('./pub-sub-service');
var PubSub = (function () {
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
})();
exports.PubSub = PubSub;
