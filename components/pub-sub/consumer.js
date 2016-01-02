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
var pub_sub_service_1 = require('./pub-sub-service');
var Consumer = (function () {
    function Consumer(pubSubService) {
        this.pubSubService = pubSubService;
        this.processed = [];
    }
    Consumer.prototype.ngOnInit = function () {
        var _this = this;
        this.pubSubService.Stream.subscribe(function (customer) { return _this.processCustomer(customer); });
    };
    Consumer.prototype.processCustomer = function (customer) {
        this.processed.push(customer);
    };
    Consumer.prototype.stopProcessing = function () {
        this.pubSubService.Stream.unsubscribe();
    };
    Consumer = __decorate([
        core_1.Component({
            selector: 'consumer',
            templateUrl: './components/pub-sub/consumer.html'
        }), 
        __metadata('design:paramtypes', [pub_sub_service_1.PubSubService])
    ], Consumer);
    return Consumer;
})();
exports.Consumer = Consumer;
