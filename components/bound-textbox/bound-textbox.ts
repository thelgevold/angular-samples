
import {Component, View} from 'angular2/angular2';

@Component({
    selector: 'bound-textbox'
})

@View({
    template: '<h1>Bound Textbox</h1><input [value]="text" (keyup)="typing($event)" />{{text}}'
})

export class BoundTextbox {

    text = 'hello';

    typing($event){
        this.text = $event.target.value;
    }
}
