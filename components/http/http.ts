import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';
import {Http} from 'angular2/http'

@Component({
    selector: 'http'
})

@View({
    templateUrl: './components/http/http.html',
    directives: [CORE_DIRECTIVES]
})

export class HttpSample {

    result: Object;
    error: Object;
    http: Http;

    constructor(http: Http) {

        this.http = http;
        this.loadFriendsSuccessFully();
        this.loadFriendsWithError();
    }

    loadFriendsSuccessFully(){
        this.result = {friends:[]};
        this.http.get('./friends.json').map(res => res.json()).subscribe(res => this.result = res);
    }

    loadFriendsWithError(){
        this.result = {friends:[]};
        this.http.get('./friends2.json').map(res => res.json()).subscribe(
                res => this.result = res,
                error => this.error = error);

    }
}
