System.register(['angular2/core', './edge', './vertex', './edge-service'], function(exports_1, context_1) {
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
    var core_1, edge_1, vertex_1, edge_service_1;
    var Graph;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (edge_1_1) {
                edge_1 = edge_1_1;
            },
            function (vertex_1_1) {
                vertex_1 = vertex_1_1;
            },
            function (edge_service_1_1) {
                edge_service_1 = edge_service_1_1;
            }],
        execute: function() {
            Graph = (function () {
                function Graph(dynamicComponentLoader, edgeService) {
                    this.dynamicComponentLoader = dynamicComponentLoader;
                    this.edgeService = edgeService;
                }
                Graph.prototype.ngOnInit = function () {
                    var _this = this;
                    this.edgeService.getCoordinates().subscribe(function (coordinates) {
                        _this.dynamicComponentLoader
                            .loadNextToLocation(edge_1.Edge, coordinates.first.viewContainer)
                            .then(function (res) {
                            res.instance.setCoordinates(coordinates.first, coordinates.second);
                        })
                            .catch(function (e) { return console.log(e); });
                    });
                };
                Graph = __decorate([
                    core_1.Component({
                        selector: 'graph',
                        directives: [edge_1.Edge, vertex_1.Vertex],
                        templateUrl: './components/algorithms/graph/graph.html',
                        providers: [edge_service_1.EdgeService]
                    }), 
                    __metadata('design:paramtypes', [core_1.DynamicComponentLoader, edge_service_1.EdgeService])
                ], Graph);
                return Graph;
            }());
            exports_1("Graph", Graph);
        }
    }
});
//# sourceMappingURL=graph.js.map