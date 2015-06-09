
import {Component, View} from 'angular2/angular2';

@Component({
    selector: 'bound-textbox'
})

@View({
    template: '<input [value]="text" (keyup)="typing($event)" />{{text}}'
})

export class BoundTextbox {

    text:string;

    constructor(){
        this.text = 'hello';
    }

    typing($event){
        this.text = $event.target.value;
    }
}