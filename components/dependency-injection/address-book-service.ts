import {Http, Response} from 'angular2/http'
import {Injectable} from 'angular2/core'

@Injectable()
export class AddressBookService {

    http:Http;
    constructor(http:Http){
        console.log('Creating AddressBookService');
        this.http = http;
    }

    getEntries(){
        return this.http.get('./people.json').map((res: Response) => res.json());
    }

}