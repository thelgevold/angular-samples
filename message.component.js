import { Component } from '@angular/core';
import { UpgradePubSubService } from './upgrade-pub-sub.service';
var MessageComponent = (function () {
    function MessageComponent(service) {
        this.service = service;
    }
    MessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getMessages()
            .filter(function (m) { return m.key === 'old'; })
            .subscribe(function (data) {
            _this.message = data.message;
        });
    };
    MessageComponent.prototype.sendMessage = function () {
        this.service.sendMessage('Hello old Angular! This is new Angular', 'new');
    };
    return MessageComponent;
}());
export { MessageComponent };
MessageComponent.decorators = [
    { type: Component, args: [{
                template: "<div>{{message}}</div>\n             <button (click)=\"sendMessage()\">Send Message From New Angular</button> \n             "
            },] },
];
MessageComponent.ctorParameters = function () { return [
    { type: UpgradePubSubService, },
]; };
