/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
import{DemoPage} from './demo-page';

@Component({
   selector: 'demo-app'
})

@View({
    template: '<demo-page></demo-page>',
    directives:[DemoPage]
})

class MyDemoApp {

    constructor() {

    }
}

bootstrap(MyDemoApp);
