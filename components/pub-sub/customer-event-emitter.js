System.register(['rxjs/Subject'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subject_1;
    var CustomerEventEmitter;
    return {
        setters:[
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            }],
        execute: function() {
            CustomerEventEmitter = (function (_super) {
                __extends(CustomerEventEmitter, _super);
                function CustomerEventEmitter() {
                    _super.call(this);
                }
                CustomerEventEmitter.prototype.emit = function (value) { _super.prototype.next.call(this, value); };
                return CustomerEventEmitter;
            }(Subject_1.Subject));
            exports_1("CustomerEventEmitter", CustomerEventEmitter);
        }
    }
});
//# sourceMappingURL=customer-event-emitter.js.map