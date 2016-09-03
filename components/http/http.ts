import {Component} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Subject } from 'rxjs/Subject';

@Component({
    templateUrl: './http.html'
})

export class HttpSample {

    result: any;
    combined: any;
    error: any;
    http: Http;
    contract: any;
    customer: any;
    postResponse = new Person();
    friendsAsPromise: any;
    pendingRequest: any;
    capitol: any;
    activeCountry: string;
    country = new Subject();

    constructor(http: Http) {

        this.http = http;
        this.loadFriendsSuccessFully();
        this.loadFriendsWithError();
        this.loadContractByCustomer();
        this.loadFriendsAndCustomers();
        this.loadFriendsAsPromise();

        this.getCapitol()

    }

    getCapitol(){

        this.country.switchMap((country) => this.http.get('./country-info/' + country + '.json'))
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

        this.http.post('http://www.syntaxsuccess.com/poc-post/', {firstName:'Joe',lastName:'Smith'}, {headers:headers})
            .map((res: Response) => res.json())
            .subscribe((res:Person) => this.postResponse = res);
    }
}

class Person{
    firstName:string;
    lastName:string;
}
