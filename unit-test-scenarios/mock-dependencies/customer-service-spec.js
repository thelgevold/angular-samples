System.register(['@angular/core/testing', '../service-with-dependencies/customer-service', '../service-with-dependencies/product-service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, customer_service_1, product_service_1;
    function main() {
        var ProductServiceMock = (function () {
            function ProductServiceMock() {
            }
            ProductServiceMock.prototype.getProductsByCustomerId = function () {
                return ['Hamburger', 'Fries'];
            };
            return ProductServiceMock;
        }());
        describe('CustomerService', function () {
            beforeEach(function () {
                testing_1.TestBed.configureTestingModule({
                    providers: [{ provide: product_service_1.ProductService, useClass: ProductServiceMock }]
                });
            });
            it('should get customer details', testing_1.inject([customer_service_1.CustomerService], function (customerService) {
                var customerDetails = customerService.printCustomerDetails(1);
                expect(customerDetails).toBe('Customer purchased: Hamburger,Fries');
            }));
        });
    }
    exports_1("main", main);
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (customer_service_1_1) {
                customer_service_1 = customer_service_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=customer-service-spec.js.map