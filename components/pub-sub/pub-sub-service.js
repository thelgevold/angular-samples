var core_1 = require('angular2/core');
var PubSubService = (function () {
    function PubSubService() {
        this.Stream = new core_1.EventEmitter();
    }
    return PubSubService;
})();
exports.PubSubService = PubSubService;
