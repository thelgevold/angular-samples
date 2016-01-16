System.register(['angular2/core', './edge', './vertex'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, edge_1, vertex_1;
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
            }],
        execute: function() {
            Graph = (function () {
                function Graph(dynamicComponentLoader, elementRef) {
                    this.dynamicComponentLoader = dynamicComponentLoader;
                    this.elementRef = elementRef;
                    this.first = null;
                    this.second = null;
                }
                Graph.prototype.elementClicked = function (e) {
                    var _this = this;
                    if (!e.vertex) {
                        return;
                    }
                    if (this.first === null) {
                        this.first = e.coordinates;
                    }
                    else if (this.second === null) {
                        this.second = e.coordinates;
                        this.dynamicComponentLoader.loadIntoLocation(edge_1.Edge, this.elementRef, this.first.dynamicLocation)
                            .then(function (res) {
                            res.instance.setCoordinates(_this.first.x, _this.first.y, _this.second.x, _this.second.y);
                            _this.first = null;
                            _this.second = null;
                        });
                    }
                };
                Graph = __decorate([
                    core_1.Component({
                        selector: 'graph',
                        directives: [edge_1.Edge, vertex_1.Vertex],
                        templateUrl: './components/algorithms/graph/graph.html'
                    }), 
                    __metadata('design:paramtypes', [core_1.DynamicComponentLoader, core_1.ElementRef])
                ], Graph);
                return Graph;
            })();
            exports_1("Graph", Graph);
        }
    }
});
