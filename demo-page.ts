import {Component} from '@angular/core';

import {Location} from '@angular/common';

@Component({
    selector: 'demo-page',
    templateUrl: './demo-page.html'
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


