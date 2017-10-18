"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subject_1 = require("rxjs/Subject");
var CustomerEventEmitter = (function (_super) {
    __extends(CustomerEventEmitter, _super);
    function CustomerEventEmitter() {
        return _super.call(this) || this;
    }
    CustomerEventEmitter.prototype.emit = function (value) { _super.prototype.next.call(this, value); };
    return CustomerEventEmitter;
}(Subject_1.Subject));
exports.CustomerEventEmitter = CustomerEventEmitter;
