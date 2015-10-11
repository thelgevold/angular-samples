import {Component,ElementRef} from 'angular2/angular2';

declare var jQuery:any;

@Component({
    selector: 'content-body',
    templateUrl: './components/content-container/content-body.html',
    inputs:['article:article']
})

export class ContentBody {

    article:IArticle;
    element:ElementRef;

    constructor(elementRef:ElementRef){
        this.element = elementRef;
    }

    onInit(){
        let body = this.element.nativeElement.querySelector(".article-body");
        body.innerHTML = this.article.body;
    }
}

interface IArticle{
    title:string;
    body:string;
}