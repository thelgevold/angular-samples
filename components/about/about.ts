import {Component} from 'angular2/core';

import {RouteParams} from 'angular2/router';
import {ROUTER_DIRECTIVES} from 'angular2/router';


@Component({
    selector: 'about',
    directives:[ROUTER_DIRECTIVES],
    templateUrl: './components/about/about.html'
})

export class About {
    id: string;
    constructor(params: RouteParams){
        this.id = params.get('id');
    }
}