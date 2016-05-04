import {Http,Response} from '@angular/http';
import {Injectable} from '@angular/core'

@Injectable()
export class LogTailService{

    http:Http;

    constructor(http:Http){
        this.http = http;
    }

    getLogEntries(){
        return this.http.get('./components/log-tail/log.json').map((res: Response) => res.json());
    }
}