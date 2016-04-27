System.register(['rxjs/Subject'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subject_1;
    var EdgeService;
    return {
        setters:[
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            }],
        execute: function() {
            EdgeService = (function (_super) {
                __extends(EdgeService, _super);
                function EdgeService() {
                    _super.apply(this, arguments);
                }
                EdgeService.prototype.getCoordinates = function () {
                    return this.asObservable().bufferCount(2).map(function (buffer) { return { first: buffer[0], second: buffer[1] }; });
                };
                return EdgeService;
            }(Subject_1.Subject));
            exports_1("EdgeService", EdgeService);
        }
    }
});
//# sourceMappingURL=edge-service.js.map