System.register(['angular2/core', './components/tree-view/tree-view-demo', './components/contact-list/contact-list', './components/bound-textbox/bound-textbox', './components/grid/grid-demo', './components/non-bindable/non-bindable', './components/greeting/greeting-component', './components/http/http', './components/spreadsheet/spreadsheet', './components/algorithms/algorithms', './components/react-integration/angular-2-host', './components/jquery-integration/jquery-integration', './components/input-controls/input-controls', './components/dependency-injection/address-book', './components/address-form/address-form', './components/algorithms/graph/graph', './components/pub-sub/pub-sub', './components/text-editor/text-editor', 'angular2/router', './components/change-detection/comment-demo'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, tree_view_demo_1, contact_list_1, bound_textbox_1, grid_demo_1, non_bindable_1, greeting_component_1, http_1, spreadsheet_1, algorithms_1, angular_2_host_1, jquery_integration_1, input_controls_1, address_book_1, address_form_1, graph_1, pub_sub_1, text_editor_1, router_1, comment_demo_1, router_2;
    var DemoPage;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tree_view_demo_1_1) {
                tree_view_demo_1 = tree_view_demo_1_1;
            },
            function (contact_list_1_1) {
                contact_list_1 = contact_list_1_1;
            },
            function (bound_textbox_1_1) {
                bound_textbox_1 = bound_textbox_1_1;
            },
            function (grid_demo_1_1) {
                grid_demo_1 = grid_demo_1_1;
            },
            function (non_bindable_1_1) {
                non_bindable_1 = non_bindable_1_1;
            },
            function (greeting_component_1_1) {
                greeting_component_1 = greeting_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (spreadsheet_1_1) {
                spreadsheet_1 = spreadsheet_1_1;
            },
            function (algorithms_1_1) {
                algorithms_1 = algorithms_1_1;
            },
            function (angular_2_host_1_1) {
                angular_2_host_1 = angular_2_host_1_1;
            },
            function (jquery_integration_1_1) {
                jquery_integration_1 = jquery_integration_1_1;
            },
            function (input_controls_1_1) {
                input_controls_1 = input_controls_1_1;
            },
            function (address_book_1_1) {
                address_book_1 = address_book_1_1;
            },
            function (address_form_1_1) {
                address_form_1 = address_form_1_1;
            },
            function (graph_1_1) {
                graph_1 = graph_1_1;
            },
            function (pub_sub_1_1) {
                pub_sub_1 = pub_sub_1_1;
            },
            function (text_editor_1_1) {
                text_editor_1 = text_editor_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (comment_demo_1_1) {
                comment_demo_1 = comment_demo_1_1;
            }],
        execute: function() {
            DemoPage = (function () {
                function DemoPage(location) {
                    this.location = location;
                }
                DemoPage.prototype.getLinkStyle = function (path) {
                    return this.location.path().indexOf(path) > -1;
                };
                DemoPage = __decorate([
                    core_1.Component({
                        selector: 'demo-page',
                        templateUrl: './demo-page.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        new router_1.Route({ path: '/spreadsheet', component: spreadsheet_1.Spreadsheet, name: 'Spreadsheet' }),
                        new router_1.Route({ path: '/jquery', component: jquery_integration_1.JqueryIntegration, name: 'JqueryIntegration' }),
                        new router_1.Route({ path: '/react', component: angular_2_host_1.Angular2Host, name: 'React' }),
                        new router_1.Route({ path: '/algorithms', component: algorithms_1.Algorithms, name: 'Algorithms' }),
                        new router_1.Route({ path: '/graph', component: graph_1.Graph, name: 'Graph' }),
                        new router_1.Route({ path: '/pub-sub', component: pub_sub_1.PubSub, name: 'PubSub' }),
                        new router_1.Route({ path: '/text-editor', component: text_editor_1.TextEditor, name: 'TextEditor' }),
                        new router_1.Route({ path: '/address', component: address_book_1.AddressBook, name: 'AddressBook' }),
                        new router_1.Route({ path: '/http', component: http_1.HttpSample, name: 'Http' }),
                        new router_1.Route({ path: '/treeview', component: tree_view_demo_1.TreeViewDemo, name: 'TreeView' }),
                        new router_1.Route({ path: '/grid', component: grid_demo_1.GridDemo, name: 'Grid' }),
                        new router_1.Route({ path: '/input', component: input_controls_1.InputControls, name: 'Input' }),
                        new router_1.Route({ path: '/contact', component: contact_list_1.ContactList, name: 'Contact' }),
                        new router_1.Route({ path: '/textbox', component: bound_textbox_1.BoundTextbox, name: 'Textbox' }),
                        new router_1.Route({ path: '/non-bindable', component: non_bindable_1.IgnoreBindings, name: 'IgnoreBindings' }),
                        new router_1.Route({ path: '/greeting', component: greeting_component_1.GreetingComponent, name: 'Greeting' }),
                        new router_1.Route({ path: '/form', component: address_form_1.AddressForm, name: 'AddressForm' }),
                        new router_1.Route({ path: '/change', component: comment_demo_1.CommentDemo, name: 'Change' }),
                    ]), 
                    __metadata('design:paramtypes', [router_2.Location])
                ], DemoPage);
                return DemoPage;
            })();
            exports_1("DemoPage", DemoPage);
        }
    }
});
