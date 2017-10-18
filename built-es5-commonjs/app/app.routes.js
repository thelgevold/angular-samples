"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var demo_component_1 = require("./demo.component");
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
var routes = [
    {
        path: '',
        redirectTo: '/demo/spreadsheet',
        pathMatch: 'full'
    },
    {
        path: 'demo',
        component: demo_component_1.DemoComponent,
        children: [
            { path: 'spreadsheet', component: spreadsheet_1.Spreadsheet },
            { path: 'algorithms', component: algorithms_1.Algorithms },
            { path: 'graph', component: graph_1.Graph },
            { path: 'pub-sub', component: pub_sub_1.PubSub },
            { path: 'text-editor', component: text_editor_1.TextEditor },
            { path: 'treeview', component: tree_view_demo_1.TreeViewDemo },
            { path: 'input', component: input_controls_1.InputControls },
            { path: 'contact', component: contact_list_1.ContactList },
            { path: 'survey', component: survey_demo_1.SurveyDemo },
            { path: 'redux', component: log_demo_1.LogDemo },
            { path: 'iodemo', component: input_output_demo_1.InputOutputDemo },
            { path: 'rxjs', component: rxjs_streams_1.RxJsStreams },
            { path: 'buffering', component: rxjs_buffering_1.RxJsBuffering },
            { path: 'countries', component: country_demo_1.CountryDemo }
        ]
    }
];
exports.routing = router_1.RouterModule.forRoot(routes);
