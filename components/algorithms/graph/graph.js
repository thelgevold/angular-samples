var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var edge_1 = require('./edge');
var vertex_1 = require('./vertex');
var Graph = (function () {
    function Graph(dynamicComponentLoader, elementRef) {
        this.counter = 0;
        this.dynamicComponentLoader = dynamicComponentLoader;
        this.elementRef = elementRef;
    }
    Graph.prototype.elementClicked = function (e) {
        var _this = this;
        this.counter++;
        if (this.counter === 1) {
            this.first = e.coordinates;
        }
        if (this.counter === 2) {
            this.second = e.coordinates;
            this.counter = 0;
            this.dynamicComponentLoader.loadIntoLocation(edge_1.Edge, this.elementRef, this.first.dynamicLocation)
                .then(function (res) {
                res.instance.setCoordinates(_this.first.x, _this.first.y, _this.second.x, _this.second.y);
            });
        }
    };
    Graph = __decorate([
        angular2_1.Component({
            selector: 'graph',
            directives: [edge_1.Edge, vertex_1.Vertex],
            templateUrl: './components/algorithms/graph/graph.html'
        }), 
        __metadata('design:paramtypes', [angular2_1.DynamicComponentLoader, angular2_1.ElementRef])
    ], Graph);
    return Graph;
})();
exports.Graph = Graph;
