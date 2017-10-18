"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var pub_sub_service_1 = require("./pub-sub-service");
var PubSub = (function () {
    function PubSub() {
    }
    PubSub = __decorate([
        core_1.Component({
            selector: 'pub-sub',
            template: "\n    <h1>Pub Sub Using Observables</h1>\n\n    <producer></producer>\n\n    <br/><br/>\n    <consumer></consumer>\n\n    <h4><a href=\"http://www.syntaxsuccess.com/viewarticle/pub-sub-in-angular-2.0\">Read more here</a></h4>\n    ",
            providers: [pub_sub_service_1.PubSubService]
        })
    ], PubSub);
    return PubSub;
}());
exports.PubSub = PubSub;
