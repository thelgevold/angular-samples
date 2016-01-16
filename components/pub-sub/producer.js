System.register(['angular2/core', './pub-sub-service', './customer'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, pub_sub_service_1, customer_1;
    var Producer;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (pub_sub_service_1_1) {
                pub_sub_service_1 = pub_sub_service_1_1;
            },
            function (customer_1_1) {
                customer_1 = customer_1_1;
            }],
        execute: function() {
            Producer = (function () {
                function Producer(pubSubService) {
                    this.pubSubService = pubSubService;
                    this.firstName = '';
                    this.lastName = '';
                }
                Producer.prototype.createCustomer = function () {
                    var customer = new customer_1.Customer();
                    customer.firstName = this.firstName;
                    customer.lastName = this.lastName;
                    this.pubSubService.Stream.emit(customer);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Producer.prototype, "firstName", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Producer.prototype, "lastName", void 0);
                Producer = __decorate([
                    core_1.Component({
                        selector: 'producer',
                        templateUrl: './components/pub-sub/producer.html'
                    }), 
                    __metadata('design:paramtypes', [pub_sub_service_1.PubSubService])
                ], Producer);
                return Producer;
            })();
            exports_1("Producer", Producer);
        }
    }
});
