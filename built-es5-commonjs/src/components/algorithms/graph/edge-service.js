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
require("rxjs/add/operator/bufferCount");
var EdgeService = (function (_super) {
    __extends(EdgeService, _super);
    function EdgeService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EdgeService.prototype.getCoordinates = function () {
        return this.asObservable().bufferCount(2).map(function (buffer) { return { first: buffer[0], second: buffer[1] }; });
    };
    return EdgeService;
}(Subject_1.Subject));
exports.EdgeService = EdgeService;
