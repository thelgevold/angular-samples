/// <reference path="./typings/tsd.d.ts" />
import {Component} from 'angular2/core';
import {TreeViewDemo} from './components/tree-view/tree-view-demo';
import {ContactList} from './components/contact-list/contact-list';
import {BoundTextbox} from './components/bound-textbox/bound-textbox';
import {Directory} from './components/tree-view/directory';
import {GridDemo} from './components/grid/grid-demo';
import {Column} from './components/grid/column';
import {IgnoreBindings} from './components/non-bindable/non-bindable';
import {GreetingComponent} from './components/greeting/greeting-component';
import {HttpSample} from './components/http/http';
import {Spreadsheet} from './components/spreadsheet/spreadsheet';
import {Algorithms} from './components/algorithms/algorithms';
import {Angular2Host} from './components/react-integration/angular-2-host';
import {JqueryIntegration} from './components/jquery-integration/jquery-integration';
import {InputControls} from './components/input-controls/input-controls';
import {AddressBook} from './components/dependency-injection/address-book';
import {AddressForm} from './components/address-form/address-form';
import {Graph} from './components/algorithms/graph/graph';
import {PubSub} from './components/pub-sub/pub-sub';
import {TextEditor} from './components/text-editor/text-editor';
import {ROUTER_DIRECTIVES, RouteConfig, Route} from 'angular2/router';
import {CommentDemo} from './components/change-detection/comment-demo';

import {
    ComponentInstruction,
    Location
} from 'angular2/router';

@Component({
    selector: 'demo-page',
    templateUrl: './demo-page.html',
    directives: [ROUTER_DIRECTIVES, Spreadsheet, HttpSample, GridDemo, ContactList, CommentDemo,
                 JqueryIntegration, Angular2Host, Algorithms, AddressBook, InputControls, TreeViewDemo, PubSub, TextEditor]
})

@RouteConfig([
    new Route({ path: '/spreadsheet', component: Spreadsheet, name: 'Spreadsheet' }),
    new Route({ path: '/jquery', component: JqueryIntegration, name: 'JqueryIntegration' }),
    new Route({ path: '/react', component:Angular2Host, name: 'React'}),
    new Route({ path: '/algorithms', component:Algorithms, name: 'Algorithms'}),
    new Route({ path: '/graph', component:Graph, name: 'Graph'}),
    new Route({ path: '/pub-sub', component:PubSub, name: 'PubSub'}),
    new Route({ path: '/text-editor', component:TextEditor, name: 'TextEditor'}),
    new Route({ path: '/address', component:AddressBook, name: 'AddressBook'}),
    new Route({ path: '/http', component:HttpSample, name: 'Http'}),
    new Route({ path: '/treeview', component:TreeViewDemo, name: 'TreeView'}),
    new Route({ path: '/grid', component:GridDemo, name: 'Grid'}),
    new Route({ path: '/input', component:InputControls, name: 'Input'}),
    new Route({ path: '/contact', component:ContactList, name: 'Contact'}),
    new Route({ path: '/textbox', component:BoundTextbox, name: 'Textbox'}),
    new Route({ path: '/non-bindable', component:IgnoreBindings, name: 'IgnoreBindings'}),
    new Route({ path: '/greeting', component:GreetingComponent, name: 'Greeting'}),
    new Route({ path: '/form', component:AddressForm, name: 'AddressForm'}),
    new Route({ path: '/change', component:CommentDemo, name: 'Change'}),
])

export class DemoPage {

    location:Location;

    constructor(location:Location) {
        this.location = location;
    }

    getLinkStyle(path) {
        return this.location.path().indexOf(path) > -1;
    }
}


