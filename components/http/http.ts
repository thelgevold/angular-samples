import {Component} from 'angular2/core';
import {Http, Response, Headers} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

@Component({
    templateUrl: './components/http/http.html'
})

export class HttpSample {

    result: Object;
    combined: any;
    error: Object;
    http: Http;
    contract: any;
    customer: any;
    postResponse = new Person();
    friendsAsPromise: any;
    pendingRequest: any;
    capitol: any;
    activeCountry: string;

    constructor(http: Http) {

        this.http = http;
        this.loadFriendsSuccessFully();
        this.loadFriendsWithError();
        this.loadContractByCustomer();
        this.loadFriendsAndCustomers();
        this.loadFriendsAsPromise();

    }

    getCapitol(country){

        if(this.pendingRequest){
            this.pendingRequest.unsubscribe();
            console.log('cancelled observable');
        }

        this.activeCountry = country;

        this.pendingRequest = this.http.get('./country-info/' + country + '.json')
                              .map((res: Response) => res.json())
                              .subscribe(res => this.capitol = res.capitol);
    }

    isActive(country){
        return this.activeCountry === country;
    }

    loadFriendsAsPromise(){
        this.friendsAsPromise = {};
        this.http.get('./friends.json').toPromise()
        .then((res: Response) => {
            this.friendsAsPromise.friends = res.json().friends;
        });
    }

    loadFriendsAndCustomers(){
        this.combined = {friends:[],customer:{}};
        Observable.forkJoin(
            this.http.get('./friends.json').map((res: Response) => res.json()),
            this.http.get('./customer.json').map((res: Response) => res.json())
        ).subscribe(res => this.combined = {friends:res[0].friends, customer:res[1]});
    }

    loadFriendsSuccessFully(){
        this.result = {friends:[]};
        this.http.get('./friends.json').map((res: Response) => res.json()).subscribe(res => this.result = res);
    }

    loadContractByCustomer(){
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
