import {Component, View, NgFor} from 'angular2/angular2';
import {ObservableWrapper} from 'angular2/src/facade/async';
import {Http} from 'angular2/http';

@Component({
    selector: 'http'
})

@View({
    templateUrl: './components/http/http.html',
    directives: [NgFor]
})

export class HttpSample {

    result: Object;

    constructor(http: Http) {
        this.result = {friends:[]};
        ObservableWrapper.subscribe(http.get('./friends.json'), res => this.result = res.json());
    }

}