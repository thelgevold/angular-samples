var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
var InputControls = (function () {
    function InputControls() {
        this.javascript = false;
        this.angular = false;
        this.csharp = false;
        this.name = 'Two way bound';
    }
    InputControls.prototype.routerCanReuse = function (next, prev) { return false; };
    InputControls = __decorate([
        core_1.Component({
            selector: 'input-controls',
            templateUrl: './components/input-controls/input-controls.html',
            directives: [common_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], InputControls);
    return InputControls;
})();
exports.InputControls = InputControls;
