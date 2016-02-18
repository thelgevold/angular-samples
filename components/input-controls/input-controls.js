System.register(['angular2/core', 'angular2/common'], function(exports_1) {
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
    var InputControls;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            InputControls = (function () {
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
                        template: "\n            <h1>Input Controls</h1>\n            <div class=\"input-controls\">\n                <h4>\"Two way bindings\"</h4>\n\n                <input id=\"name\" [(ngModel)]=\"name\" />\n\n                <div>Current Value: {{name}}</div>\n            </div>\n\n            <div class=\"input-controls\">\n                <h4>Select a gender</h4>\n                <div>\n                    <label>\n                        <input #male name=\"gender\" type=\"radio\" value=\"Male\" (click)=\"gender = male.value\" />\n                        Male\n                    </label>\n                </div>\n                <div>\n                    <label>\n                        <input #female name=\"gender\" type=\"radio\"  value=\"Female\" (click)=\"gender = female.value\" />\n                        Female\n                    </label>\n                </div>\n                <div>\n                    Selected gender is <strong>{{gender}}</strong>\n                </div>\n            </div>\n\n            <div class=\"input-controls\">\n                <h4>Select your programming skills</h4>\n                <div>\n                    <label>\n                        <input #angularcb type=\"checkbox\" (change)=\"angular = angularcb.checked\" />\n                        Angular\n                    </label>\n                </div>\n                <div>\n                    <label>\n                        <input #javascriptcb type=\"checkbox\" (change)=\"javascript = javascriptcb.checked\" />\n                        JavaScript\n                    </label>\n                </div>\n                <div>\n                    <label>\n                        <input #csharpcb type=\"checkbox\" (change)=\"csharp = csharpcb.checked\" />\n                        C#\n                    </label>\n                </div>\n            </div>\n\n            <div>\n                Selected Skills:\n                <ul>\n                    <li *ngIf=\"angular\">Angular</li>\n                    <li *ngIf=\"javascript\">JavaScript</li>\n                    <li *ngIf=\"csharp\">C#</li>\n                </ul>\n            </div>\n\n            <h4><a href=\"http://www.syntaxsuccess.com/viewarticle/input-controls-in-angular-2.0\">Read more here</a></h4>",
                        directives: [common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], InputControls);
                return InputControls;
            })();
            exports_1("InputControls", InputControls);
        }
    }
});
