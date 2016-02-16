System.register(['angular2/core', './base'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
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
    var core_1, base_1;
    var InputOutput;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (base_1_1) {
                base_1 = base_1_1;
            }],
        execute: function() {
            InputOutput = (function (_super) {
                __extends(InputOutput, _super);
                function InputOutput(plain) {
                    _super.call(this);
                    this.stringChanged = new core_1.EventEmitter();
                    console.log(plain);
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
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], InputOutput.prototype, "stringChanged", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], InputOutput.prototype, "counter", void 0);
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
                    __param(0, core_1.Attribute('plain')), 
                    __metadata('design:paramtypes', [Object])
                ], InputOutput);
                return InputOutput;
            })(base_1.Base);
            exports_1("InputOutput", InputOutput);
        }
    }
});
