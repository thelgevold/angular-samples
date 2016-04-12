System.register(['angular2/core', 'rxjs/Subject', 'angular2/http', './tree-node-reducer'], function(exports_1, context_1) {
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
    var core_1, Subject_1, http_1, tree_node_reducer_1;
    var Store;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (tree_node_reducer_1_1) {
                tree_node_reducer_1 = tree_node_reducer_1_1;
            }],
        execute: function() {
            Store = (function () {
                function Store(_http) {
                    var _this = this;
                    this._http = _http;
                    this.dispatcher = new Subject_1.Subject();
                    this.treeNodes = {};
                    this.nodes = {};
                    this.dispatcher.subscribe(function (action) { return _this.handleAction(action); });
                }
                Store.prototype.handleAction = function (action) {
                    var _this = this;
                    if (action.name === 'LOAD_NODES') {
                        if (this.nodes[action.key]) {
                            this.treeNodes[action.key].next(this.nodes[action.key]);
                        }
                        else {
                            this._http
                                .get(action.url)
                                .map(function (res) { return res.json(); })
                                .subscribe(function (res) {
                                _this.nodes[action.key] = tree_node_reducer_1.treeNodeReducer(res, action);
                                _this.treeNodes[action.key].next(_this.nodes[action.key]);
                            });
                        }
                    }
                };
                Store.prototype.getChildren = function (key) {
                    if (!this.treeNodes.hasOwnProperty(key)) {
                        this.treeNodes[key] = new Subject_1.Subject();
                    }
                    return this.treeNodes[key].asObservable();
                };
                Store.prototype.dispatchAction = function (action) {
                    this.dispatcher.next(action);
                };
                Store = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], Store);
                return Store;
            }());
            exports_1("Store", Store);
        }
    }
});
//# sourceMappingURL=store.js.map