import {Component} from '@angular/core';

import {ROUTER_DIRECTIVES} from '@angular/router';


@Component({
    selector: 'about',
    directives:[ROUTER_DIRECTIVES],
    templateUrl: './components/about/about.html'
})

export class About {
    id: string;
    //constructor(params: RouteParams, data: RouteData){
    //    this.id = params.get('id');
    //    console.log(data.get('project'));
    //}
}