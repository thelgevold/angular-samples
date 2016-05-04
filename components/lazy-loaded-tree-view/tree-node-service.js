System.register(['@angular/core', './redux/store'], function(exports_1, context_1) {
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
    var core_1, store_1;
    var TreeNodeService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (store_1_1) {
                store_1 = store_1_1;
            }],
        execute: function() {
            TreeNodeService = (function () {
                function TreeNodeService(_store) {
                    this._store = _store;
                }
                TreeNodeService.prototype.loadTreeNodes = function (root) {
                    if (root.url) {
                        this._store.dispatchAction({ key: root.key, url: root.url, name: 'LOAD_NODES' });
                    }
                };
                TreeNodeService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [store_1.Store])
                ], TreeNodeService);
                return TreeNodeService;
            }());
            exports_1("TreeNodeService", TreeNodeService);
        }
    }
});
//# sourceMappingURL=tree-node-service.js.map