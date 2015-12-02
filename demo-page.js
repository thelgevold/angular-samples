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
/// <reference path="./typings/tsd.d.ts" />
var angular2_1 = require('angular2/angular2');
var tree_view_demo_1 = require('./components/tree-view/tree-view-demo');
var contact_list_1 = require('./components/contact-list/contact-list');
var bound_textbox_1 = require('./components/bound-textbox/bound-textbox');
var grid_demo_1 = require('./components/grid/grid-demo');
var core_directives_1 = require('./components/core-directives/core-directives');
var non_bindable_1 = require('./components/non-bindable/non-bindable');
var greeting_component_1 = require('./components/greeting/greeting-component');
var http_1 = require('./components/http/http');
var spreadsheet_1 = require('./components/spreadsheet/spreadsheet');
var algorithms_1 = require('./components/algorithms/algorithms');
var angular_2_host_1 = require('./components/react-integration/angular-2-host');
var jquery_integration_1 = require('./components/jquery-integration/jquery-integration');
var input_controls_1 = require('./components/input-controls/input-controls');
var address_book_1 = require('./components/dependency-injection/address-book');
var address_form_1 = require('./components/address-form/address-form');
var graph_1 = require('./components/algorithms/graph/graph');
var router_1 = require('angular2/router');
var router_2 = require('angular2/router');
var DemoPage = (function () {
    function DemoPage(location) {
        this.location = location;
    }
    DemoPage.prototype.getLinkStyle = function (path) {
        return this.location.path().indexOf(path) > -1;
    };
    DemoPage.prototype.routerCanReuse = function (next, prev) { return false; };
    DemoPage = __decorate([
        angular2_1.Component({
            selector: 'demo-page',
            templateUrl: './demo-page.html',
            directives: [router_1.ROUTER_DIRECTIVES, spreadsheet_1.Spreadsheet, angular2_1.CORE_DIRECTIVES, http_1.HttpSample, grid_demo_1.GridDemo, contact_list_1.ContactList,
                jquery_integration_1.JqueryIntegration, angular_2_host_1.Angular2Host, algorithms_1.Algorithms, address_book_1.AddressBook, input_controls_1.InputControls, tree_view_demo_1.TreeViewDemo]
        }),
        router_1.RouteConfig([
            new router_1.Route({ path: '/spreadsheet', component: spreadsheet_1.Spreadsheet, name: 'Spreadsheet' }),
            new router_1.Route({ path: '/jquery', component: jquery_integration_1.JqueryIntegration, name: 'JqueryIntegration' }),
            new router_1.Route({ path: '/react', component: angular_2_host_1.Angular2Host, name: 'React' }),
            new router_1.Route({ path: '/algorithms', component: algorithms_1.Algorithms, name: 'Algorithms' }),
            new router_1.Route({ path: '/graph', component: graph_1.Graph, name: 'Graph' }),
            new router_1.Route({ path: '/address', component: address_book_1.AddressBook, name: 'AddressBook' }),
            new router_1.Route({ path: '/http', component: http_1.HttpSample, name: 'Http' }),
            new router_1.Route({ path: '/treeview', component: tree_view_demo_1.TreeViewDemo, name: 'TreeView' }),
            new router_1.Route({ path: '/grid', component: grid_demo_1.GridDemo, name: 'Grid' }),
            new router_1.Route({ path: '/input', component: input_controls_1.InputControls, name: 'Input' }),
            new router_1.Route({ path: '/contact', component: contact_list_1.ContactList, name: 'Contact' }),
            new router_1.Route({ path: '/textbox', component: bound_textbox_1.BoundTextbox, name: 'Textbox' }),
            new router_1.Route({ path: '/core', component: core_directives_1.CoreDirectives, name: 'Core' }),
            new router_1.Route({ path: '/non-bindable', component: non_bindable_1.IgnoreBindings, name: 'IgnoreBindings' }),
            new router_1.Route({ path: '/greeting', component: greeting_component_1.GreetingComponent, name: 'Greeting' }),
            new router_1.Route({ path: '/form', component: address_form_1.AddressForm, name: 'AddressForm' }),
        ]), 
        __metadata('design:paramtypes', [router_2.Location])
    ], DemoPage);
    return DemoPage;
})();
exports.DemoPage = DemoPage;
