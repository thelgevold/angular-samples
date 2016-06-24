System.register(['@angular/router', './demo-page', './components/about/about', './components/tree-view/tree-view-demo', './components/contact-list/contact-list', './components/bound-textbox/bound-textbox', './components/grid/grid-demo', './components/non-bindable/non-bindable', './components/http/http', './components/spreadsheet/spreadsheet', './components/algorithms/algorithms', './components/react-integration/angular-2-host', './components/jquery-integration/jquery-integration', './components/input-controls/input-controls', './components/dependency-injection/address-book', './components/address-form/address-form', './components/algorithms/graph/graph', './components/pub-sub/pub-sub', './components/text-editor/text-editor', './components/change-detection/comment-demo', './components/access-child-components/parent', './components/survey/survey-demo', './components/log-tail/log-demo', './components/input-output/input-output-demo', './components/lazy-loaded-tree-view/country-demo', './components/rxjs-streams/rxjs-streams', './components/rxjs-caching/caching-demo', './components/rxjs-buffering/rxjs-buffering'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, demo_page_1, about_1, tree_view_demo_1, contact_list_1, bound_textbox_1, grid_demo_1, non_bindable_1, http_1, spreadsheet_1, algorithms_1, angular_2_host_1, jquery_integration_1, input_controls_1, address_book_1, address_form_1, graph_1, pub_sub_1, text_editor_1, comment_demo_1, parent_1, survey_demo_1, log_demo_1, input_output_demo_1, country_demo_1, rxjs_streams_1, caching_demo_1, rxjs_buffering_1;
    var routes, APP_ROUTER_PROVIDERS;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
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
            exports_1("routes", routes = [
                {
                    path: '',
                    redirectTo: '/about',
                    terminal: true
                },
                { path: 'about', component: about_1.About },
                {
                    path: 'demo',
                    component: demo_page_1.DemoPage,
                    children: [
                        { path: 'spreadsheet', component: spreadsheet_1.Spreadsheet },
                        { path: 'jquery', component: jquery_integration_1.JqueryIntegration },
                        { path: 'react', component: angular_2_host_1.Angular2Host },
                        { path: 'algorithms', component: algorithms_1.Algorithms },
                        { path: 'graph', component: graph_1.Graph },
                        { path: 'pub-sub', component: pub_sub_1.PubSub },
                        { path: 'text-editor', component: text_editor_1.TextEditor },
                        { path: 'address', component: address_book_1.AddressBook },
                        { path: 'http', component: http_1.HttpSample },
                        { path: 'treeview', component: tree_view_demo_1.TreeViewDemo },
                        { path: 'grid', component: grid_demo_1.GridDemo },
                        { path: 'input', component: input_controls_1.InputControls },
                        { path: 'contact', component: contact_list_1.ContactList },
                        { path: 'textbox', component: bound_textbox_1.BoundTextbox },
                        { path: 'non-bindable', component: non_bindable_1.IgnoreBindings },
                        { path: 'form', component: address_form_1.AddressForm },
                        { path: 'change', component: comment_demo_1.CommentDemo },
                        { path: 'parent-child', component: parent_1.Parent },
                        { path: 'survey', component: survey_demo_1.SurveyDemo },
                        { path: 'redux', component: log_demo_1.LogDemo },
                        { path: 'iodemo', component: input_output_demo_1.InputOutputDemo },
                        { path: 'rxjs', component: rxjs_streams_1.RxJsStreams },
                        { path: 'friends', component: caching_demo_1.CachingDemo },
                        { path: 'buffering', component: rxjs_buffering_1.RxJsBuffering },
                        { path: 'countries', component: country_demo_1.CountryDemo }
                    ]
                }
            ]);
            exports_1("APP_ROUTER_PROVIDERS", APP_ROUTER_PROVIDERS = [
                router_1.provideRouter(routes)
            ]);
        }
    }
});
//# sourceMappingURL=app.routes.js.map