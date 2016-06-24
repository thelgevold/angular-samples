import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {Location} from '@angular/common';

@Component({
    selector: 'demo-page',
    templateUrl: './demo-page.html',
    directives: [ROUTER_DIRECTIVES]
})

export class DemoPage {

    location:Location;

    constructor(location:Location) {
        this.location = location;
    }

    getLinkStyle(path) {
        return this.location.path().indexOf(path) > -1;
    }
}


