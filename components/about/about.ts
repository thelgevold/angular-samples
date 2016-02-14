import {Component} from 'angular2/core';

import {RouteParams,RouteData} from 'angular2/router';
import {ROUTER_DIRECTIVES} from 'angular2/router';


@Component({
    selector: 'about',
    directives:[ROUTER_DIRECTIVES],
    templateUrl: './components/about/about.html'
})

export class About {
    id: string;
    constructor(params: RouteParams, data: RouteData){
        this.id = params.get('id');
        console.log(data.get('project'));

        console.log('aa');
    }
}