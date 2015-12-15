import {Component} from 'angular2/core';
import {Http, Response, Headers} from 'angular2/http';


@Component({
    templateUrl: './components/http/http.html'
})

export class HttpSample {

    result: Object;
    error: Object;
    http: Http;
    contract: any;
    customer: any;
    postResponse = new Person();

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

    postData(){

        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.http.post('http://www.syntaxsuccess.com/poc-post/', JSON.stringify({firstName:'Joe',lastName:'Smith'}),{headers:headers})
            .map((res: Response) => res.json())
            .subscribe((res:Person) => this.postResponse = res);
    }
}

class Person{
    firstName:string;
    lastName:string;
}
