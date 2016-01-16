System.register(['angular2/core', 'angular2/testing', '../service-with-dependencies/customer-service', '../service-with-dependencies/product-service'], function(exports_1) {
    var core_1, testing_1, customer_service_1, product_service_1;
    function main() {
        var ProductServiceMock = (function () {
            function ProductServiceMock() {
            }
            ProductServiceMock.prototype.getProductsByCustomerId = function () {
                return ['Hamburger', 'Fries'];
            };
            return ProductServiceMock;
        })();
        testing_1.describe('CustomerService', function () {
            testing_1.beforeEachProviders(function () { return [
                core_1.provide(product_service_1.ProductService, { useClass: ProductServiceMock }),
                customer_service_1.CustomerService
            ]; });
            testing_1.it('should get customer details', testing_1.inject([customer_service_1.CustomerService], function (customerService) {
                var customerDetails = customerService.printCustomerDetails(1);
                testing_1.expect(customerDetails).toBe('Customer purchased: Hamburger,Fries');
            }));
        });
    }
    exports_1("main", main);
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
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
