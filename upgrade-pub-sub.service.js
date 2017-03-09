import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/filter';
var UpgradePubSubService = (function () {
    function UpgradePubSubService() {
        this.messageSubject = new Subject();
        console.log('UpgradePubSubService created');
    }
    UpgradePubSubService.prototype.sendMessage = function (msg, key) {
        this.messageSubject.next({ message: msg, key: key });
    };
    UpgradePubSubService.prototype.getMessages = function () {
        return this.messageSubject.asObservable();
    };
    return UpgradePubSubService;
}());
export { UpgradePubSubService };
