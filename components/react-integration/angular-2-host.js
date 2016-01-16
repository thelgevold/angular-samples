System.register(['angular2/core', './react-tree-view'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, react_tree_view_1;
    var Angular2Host;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (react_tree_view_1_1) {
                react_tree_view_1 = react_tree_view_1_1;
            }],
        execute: function() {
            Angular2Host = (function () {
                function Angular2Host() {
                }
                Angular2Host.prototype.ngOnInit = function () {
                    react_tree_view_1.ReactTreeView.initialize('Locations');
                };
                Angular2Host = __decorate([
                    core_1.Component({
                        selector: 'angular-2-host'
                    }),
                    core_1.View({
                        templateUrl: './components/react-integration/angular-2-host.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], Angular2Host);
                return Angular2Host;
            })();
            exports_1("Angular2Host", Angular2Host);
        }
    }
});
