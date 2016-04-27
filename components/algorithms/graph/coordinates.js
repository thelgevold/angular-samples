System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Coordinates;
    return {
        setters:[],
        execute: function() {
            Coordinates = (function () {
                function Coordinates(x, y, viewContainer) {
                    this.x = x;
                    this.y = y;
                    this.viewContainer = viewContainer;
                }
                return Coordinates;
            }());
            exports_1("Coordinates", Coordinates);
        }
    }
});
//# sourceMappingURL=coordinates.js.map