System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1;
    var InputOutput;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            InputOutput = (function () {
                function InputOutput(el, plain) {
                    this.stringChanged = new core_1.EventEmitter();
                    console.log(plain);
                    this.el = el;
                }
                Object.defineProperty(InputOutput.prototype, "growingString", {
                    get: function () {
                        return this._growingString;
                    },
                    set: function (value) {
                        this._growingString = value.toLowerCase();
                        this.stringChanged.next({ value: 'changed to ' + this._growingString });
                    },
                    enumerable: true,
                    configurable: true
                });
                InputOutput.prototype.ngOnInit = function () {
                    console.log(this.fixedValue);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], InputOutput.prototype, "stringChanged", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], InputOutput.prototype, "counter", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], InputOutput.prototype, "fixedValue", void 0);
                __decorate([
                    core_1.Input('mySum'), 
                    __metadata('design:type', Number)
                ], InputOutput.prototype, "sum", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], InputOutput.prototype, "headline", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object), 
                    __metadata('design:paramtypes', [Object])
                ], InputOutput.prototype, "growingString", null);
                InputOutput = __decorate([
                    core_1.Component({
                        template: "<h1>{{headline}}</h1>\n              <div>Counter: {{counter}}</div>\n              <div>Running total of counter values: {{sum}}</div>\n              <div>Growing string: {{growingString}}</div>",
                        selector: 'input-output'
                    }),
                    __param(1, core_1.Attribute('plain')), 
                    __metadata('design:paramtypes', [core_1.ElementRef, Object])
                ], InputOutput);
                return InputOutput;
            })();
            exports_1("InputOutput", InputOutput);
        }
    }
});
