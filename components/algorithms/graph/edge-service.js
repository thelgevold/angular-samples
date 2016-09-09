var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Subject } from 'rxjs/Subject';
export var EdgeService = (function (_super) {
    __extends(EdgeService, _super);
    function EdgeService() {
        _super.apply(this, arguments);
    }
    EdgeService.prototype.getCoordinates = function () {
        return this.asObservable().bufferCount(2).map(function (buffer) { return { first: buffer[0], second: buffer[1] }; });
    };
    return EdgeService;
}(Subject));
