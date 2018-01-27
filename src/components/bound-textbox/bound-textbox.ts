import {Component} from '@angular/core';

@Component({
    selector: 'bound-textbox',
    template: '<h1>Bound Textbox</h1><input [value]="text" (keyup)="typing($event)" /><span>{{text}}</span>'
})

export class BoundTextbox {

    text = 'hello';

    typing($event){
        this.text = $event.target.value;
    }
}
