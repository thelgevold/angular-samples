import {Component,Input} from 'angular2/core';

@Component({
    selector:'display-name',
    templateUrl: './my-template.html'
})

export class DisplayName{

    @Input() firstName:string;
    @Input() lastName:string;

    fullName:string;

    generateFullName(){
        this.fullName = this.firstName + ' ' + this.lastName;
    }
}