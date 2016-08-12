System.register(['@angular/platform-browser', '@angular/forms', '@angular/core', './app.component', './app.routes', '@angular/http', '@angular/common', './components/dependency-injection/address-book-title-service', './components/tree-view/tree-view', './components/lazy-loaded-tree-view/tree-view', './components/survey/survey', './demo-page', './components/about/about', './components/tree-view/tree-view-demo', './components/contact-list/contact-list', './components/bound-textbox/bound-textbox', './components/grid/grid-demo', './components/non-bindable/non-bindable', './components/http/http', './components/spreadsheet/spreadsheet', './components/algorithms/algorithms', './components/react-integration/angular-2-host', './components/jquery-integration/jquery-integration', './components/input-controls/input-controls', './components/dependency-injection/address-book', './components/address-form/address-form', './components/algorithms/graph/graph', './components/pub-sub/pub-sub', './components/text-editor/text-editor', './components/change-detection/comment-demo', './components/access-child-components/parent', './components/survey/survey-demo', './components/log-tail/log-demo', './components/input-output/input-output-demo', './components/lazy-loaded-tree-view/country-demo', './components/rxjs-streams/rxjs-streams', './components/rxjs-caching/caching-demo', './components/rxjs-buffering/rxjs-buffering'], function(exports_1, context_1) {
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
    var platform_browser_1, forms_1, core_1, forms_2, app_component_1, app_routes_1, http_1, common_1, address_book_title_service_1, tree_view_1, tree_view_2, survey_1, demo_page_1, about_1, tree_view_demo_1, contact_list_1, bound_textbox_1, grid_demo_1, non_bindable_1, http_2, spreadsheet_1, algorithms_1, angular_2_host_1, jquery_integration_1, input_controls_1, address_book_1, address_form_1, graph_1, pub_sub_1, text_editor_1, comment_demo_1, parent_1, survey_demo_1, log_demo_1, input_output_demo_1, country_demo_1, rxjs_streams_1, caching_demo_1, rxjs_buffering_1;
    var AppModule;
    return {
        setters:[
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
                forms_2 = forms_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (app_routes_1_1) {
                app_routes_1 = app_routes_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (address_book_title_service_1_1) {
                address_book_title_service_1 = address_book_title_service_1_1;
            },
            function (tree_view_1_1) {
                tree_view_1 = tree_view_1_1;
            },
            function (tree_view_2_1) {
                tree_view_2 = tree_view_2_1;
            },
            function (survey_1_1) {
                survey_1 = survey_1_1;
            },
            function (demo_page_1_1) {
                demo_page_1 = demo_page_1_1;
            },
            function (about_1_1) {
                about_1 = about_1_1;
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
            function (http_2_1) {
                http_2 = http_2_1;
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
            function (comment_demo_1_1) {
                comment_demo_1 = comment_demo_1_1;
            },
            function (parent_1_1) {
                parent_1 = parent_1_1;
            },
            function (survey_demo_1_1) {
                survey_demo_1 = survey_demo_1_1;
            },
            function (log_demo_1_1) {
                log_demo_1 = log_demo_1_1;
            },
            function (input_output_demo_1_1) {
                input_output_demo_1 = input_output_demo_1_1;
            },
            function (country_demo_1_1) {
                country_demo_1 = country_demo_1_1;
            },
            function (rxjs_streams_1_1) {
                rxjs_streams_1 = rxjs_streams_1_1;
            },
            function (caching_demo_1_1) {
                caching_demo_1 = caching_demo_1_1;
            },
            function (rxjs_buffering_1_1) {
                rxjs_buffering_1 = rxjs_buffering_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [platform_browser_1.BrowserModule, forms_1.ReactiveFormsModule, app_routes_1.routing, forms_2.FormsModule, http_1.HttpModule],
                        declarations: [app_component_1.AppComponent, tree_view_1.TreeView, tree_view_2.LazyTreeView, survey_1.Survey, about_1.About, demo_page_1.DemoPage,
                            spreadsheet_1.Spreadsheet, jquery_integration_1.JqueryIntegration, angular_2_host_1.Angular2Host, algorithms_1.Algorithms, graph_1.Graph, pub_sub_1.PubSub,
                            text_editor_1.TextEditor, address_book_1.AddressBook, http_2.HttpSample, tree_view_demo_1.TreeViewDemo, grid_demo_1.GridDemo, input_controls_1.InputControls,
                            contact_list_1.ContactList, bound_textbox_1.BoundTextbox, non_bindable_1.IgnoreBindings, address_form_1.AddressForm, comment_demo_1.CommentDemo, parent_1.Parent,
                            survey_demo_1.SurveyDemo, log_demo_1.LogDemo, input_output_demo_1.InputOutputDemo, rxjs_streams_1.RxJsStreams, caching_demo_1.CachingDemo, rxjs_buffering_1.RxJsBuffering, country_demo_1.CountryDemo
                        ],
                        providers: [
                            address_book_title_service_1.AddressBookTitleService,
                            { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
                        ],
                        bootstrap: [app_component_1.AppComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});
//# sourceMappingURL=app.module.js.map