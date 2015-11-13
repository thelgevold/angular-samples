import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';
import {Http, Response} from 'angular2/http'

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
    contract: any;
    customer: any;

    constructor(http: Http) {

        this.http = http;
        this.loadFriendsSuccessFully();
        this.loadFriendsWithError();
        this.loadContractByCustomer();
    }

    loadFriendsSuccessFully(){
        this.result = {friends:[]};
        this.http.get('./friends.json').map((res: Response) => res.json()).subscribe(res => this.result = res);
    }

    loadContractByCustomer(){
        this.contract = {};
        this.customer = {};
        this.http.get('./customer.json').map((res: Response) => {
               this.customer = res.json();
               return this.customer;
            })
            .flatMap((customer) => this.http.get(customer.contractUrl)).map((res: Response) => res.json())
            .subscribe(res => this.contract = res);
    }

    loadFriendsWithError(){
        this.result = {friends:[]};
        this.http.get('./friends2.json').map((res: Response) => res.json()).subscribe(
                res => this.result = res,
                error => this.error = error);

    }
}
