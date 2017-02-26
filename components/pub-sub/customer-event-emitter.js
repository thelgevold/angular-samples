var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Subject } from 'rxjs/Subject';
var CustomerEventEmitter = (function (_super) {
    __extends(CustomerEventEmitter, _super);
    function CustomerEventEmitter() {
        return _super.call(this) || this;
    }
    CustomerEventEmitter.prototype.emit = function (value) { _super.prototype.next.call(this, value); };
    return CustomerEventEmitter;
}(Subject));
export { CustomerEventEmitter };
