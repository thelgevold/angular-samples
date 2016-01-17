System.register([], function(exports_1) {
    var ProductService;
    return {
        setters:[],
        execute: function() {
            ProductService = (function () {
                function ProductService() {
                }
                ProductService.prototype.getProductsByCustomerId = function (customerId) {
                    return ['Milk', 'Soda', 'Bread'];
                };
                return ProductService;
            })();
            exports_1("ProductService", ProductService);
        }
    }
});
