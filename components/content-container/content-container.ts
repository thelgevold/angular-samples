import {Component,CORE_DIRECTIVES} from 'angular2/angular2';
import {ContentBody} from './content-body';
import {Http} from 'angular2/http'

@Component({
    selector: 'content-container',
    templateUrl: './components/content-container/content-container.html',
    directives:[ContentBody,CORE_DIRECTIVES],
    inputs:['source:source']
})

export class ContentContainer {

    source:string;
    result = {articles:[]};
    http:Http;

    constructor(http:Http){
        this.http = http;
    }

    onInit() {
        this.http.get(this.source).map(res => res.json()).subscribe(res => this.result = res);
    }
}

