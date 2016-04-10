System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
            }());
            exports_1("ProductService", ProductService);
        }
    }
});
//# sourceMappingURL=product-service.js.map