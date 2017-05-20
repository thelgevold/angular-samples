"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var edge_service_1 = require("./edge-service");
var edge_1 = require("./edge");
var Graph = (function () {
    function Graph(componentResolver, edgeService) {
        this.componentResolver = componentResolver;
        this.edgeService = edgeService;
    }
    Graph.prototype.ngOnInit = function () {
        var _this = this;
        this.edgeService.getCoordinates().subscribe(function (coordinates) {
            var factory = _this.componentResolver.resolveComponentFactory(edge_1.Edge);
            var res = coordinates.first.viewContainer.createComponent(factory);
            res.instance.setCoordinates(coordinates.first, coordinates.second);
        });
    };
    return Graph;
}());
Graph = __decorate([
    core_1.Component({
        selector: 'graph',
        template: "\n    <div>\n    <h1>Create a Graph</h1>\n\n    <div class=\"alert alert-info\" role=\"alert\">\n        Click any pair of nodes to connect them with an edge\n    </div>\n\n    <vertex [value]=\"'A'\"></vertex>\n\n    <table class=\"graph-table\">\n        <tr>\n            <td><vertex [value]=\"'B'\"></vertex><td><vertex [value]=\"'C'\" ></vertex></td>\n        <tr>\n            <td><vertex [value]=\"'E'\" ></vertex></td><td><vertex [value]=\"'F'\" ></vertex></td>\n        </tr>\n        <tr>\n            <td><vertex [value]=\"'G'\" ></vertex></td><td><vertex [value]=\"'H'\" ></vertex></td><td><vertex [value]=\"'I'\" ></vertex></td>\n        </tr>\n    </table>\n    </div>\n    <h4><a href=\"http://www.syntaxsuccess.com/viewarticle/loading-components-dynamically-in-angular-2.0\">Read more here</a></h4>\n    ",
        providers: [edge_service_1.EdgeService]
    }),
    __metadata("design:paramtypes", [core_1.ComponentFactoryResolver, edge_service_1.EdgeService])
], Graph);
exports.Graph = Graph;
