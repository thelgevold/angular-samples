import {Component, View, NgFor, Http} from 'angular2/angular2';

@Component({
    selector: 'http'
})

@View({
    templateUrl: './components/http/http.html',
    directives: [NgFor]
})

export class HttpSample {

    result: Object;
    error: Object;

    constructor(http: Http) {
        this.result = {friends:[]};
 
        http.get('./friends.json').toRx().subscribe(res => this.result = res.json());
    }

}