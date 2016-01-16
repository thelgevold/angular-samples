System.register(['angular2/testing', './customer-service', './product-service'], function(exports_1) {
    var testing_1, customer_service_1, product_service_1;
    function main() {
        testing_1.describe('CustomerService', function () {
            testing_1.beforeEachProviders(function () { return [
                product_service_1.ProductService,
                customer_service_1.CustomerService
            ]; });
            testing_1.it('should get customer details', testing_1.inject([customer_service_1.CustomerService], function (customerService) {
                var customerDetails = customerService.printCustomerDetails(1);
                testing_1.expect(customerDetails).toBe('Customer purchased: Milk,Soda,Bread');
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
