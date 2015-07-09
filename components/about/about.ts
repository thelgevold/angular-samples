import {Component, View} from 'angular2/angular2';

import {RouteParams} from 'angular2/router';

@Component({
    selector: 'about'
})

@View({
    templateUrl: './components/about/about.html'
})

export class About {
    id: string;
    constructor(params: RouteParams){
        this.id = params.get('id');
    }
}