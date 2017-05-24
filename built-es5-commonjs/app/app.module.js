"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var forms_2 = require("@angular/forms");
var app_component_1 = require("./app.component");
var demo_component_1 = require("./demo.component");
var app_routes_1 = require("./app.routes");
var http_1 = require("@angular/http");
var common_1 = require("@angular/common");
var tree_view_1 = require("../components/tree-view/tree-view");
var survey_1 = require("../components/survey/survey");
var producer_1 = require("../components/pub-sub/producer");
var consumer_1 = require("../components/pub-sub/consumer");
var input_output_1 = require("../components/input-output/input-output");
var edge_1 = require("../components/algorithms/graph/edge");
var vertex_1 = require("../components/algorithms/graph/vertex");
var insertion_sort_1 = require("../components/insertion-sort/insertion-sort");
var child_1 = require("../components/access-child-components/child");
var demo_page_1 = require("../demo-page");
var tree_view_demo_1 = require("../components/tree-view/tree-view-demo");
var contact_list_1 = require("../components/contact-list/contact-list");
var spreadsheet_1 = require("../components/spreadsheet/spreadsheet");
var algorithms_1 = require("../components/algorithms/algorithms");
var input_controls_1 = require("../components/input-controls/input-controls");
var graph_1 = require("../components/algorithms/graph/graph");
var pub_sub_1 = require("../components/pub-sub/pub-sub");
var text_editor_1 = require("../components/text-editor/text-editor");
var survey_demo_1 = require("../components/survey/survey-demo");
var log_demo_1 = require("../components/log-tail/log-demo");
var input_output_demo_1 = require("../components/input-output/input-output-demo");
var rxjs_streams_1 = require("../components/rxjs-streams/rxjs-streams");
var rxjs_buffering_1 = require("../components/rxjs-buffering/rxjs-buffering");
var country_demo_1 = require("../components/lazy-loaded-tree-view/country-demo");
var tree_view_2 = require("../components/lazy-loaded-tree-view/tree-view");
var cars_component_1 = require("../components/rxjs-error-handling/cars.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.ReactiveFormsModule, app_routes_1.routing, forms_2.FormsModule, http_1.HttpModule],
        declarations: [app_component_1.AppComponent, producer_1.Producer, consumer_1.Consumer, demo_component_1.DemoComponent,
            tree_view_1.TreeView, survey_1.Survey, demo_page_1.DemoPage, input_output_1.InputOutput,
            spreadsheet_1.Spreadsheet, algorithms_1.Algorithms, graph_1.Graph, pub_sub_1.PubSub,
            edge_1.Edge, vertex_1.Vertex, insertion_sort_1.InsertionSort, child_1.Child,
            text_editor_1.TextEditor, tree_view_demo_1.TreeViewDemo, input_controls_1.InputControls,
            contact_list_1.ContactList, country_demo_1.CountryDemo, tree_view_2.LazyTreeView,
            survey_demo_1.SurveyDemo, log_demo_1.LogDemo, input_output_demo_1.InputOutputDemo, rxjs_streams_1.RxJsStreams, rxjs_buffering_1.RxJsBuffering, cars_component_1.CarsComponent
        ],
        entryComponents: [edge_1.Edge],
        providers: [
            { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
