System.register(['angular2/core', 'angular2/common'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1;
    var Survey;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            Survey = (function () {
                function Survey(fb) {
                    this.payLoad = null;
                    this.fb = fb;
                }
                Survey.prototype.ngOnInit = function () {
                    this.form = this.fb.group(this.model.toGroup());
                };
                Survey.prototype.onSubmit = function () {
                    this.payLoad = JSON.stringify(this.form.value);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Survey.prototype, "model", void 0);
                Survey = __decorate([
                    core_1.Component({
                        selector: 'survey',
                        templateUrl: './components/survey/survey.html',
                        providers: [common_1.FormBuilder]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], Survey);
                return Survey;
            }());
            exports_1("Survey", Survey);
        }
    }
});
//# sourceMappingURL=survey.js.map