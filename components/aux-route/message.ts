import {Component} from '@angular/core';

@Component({
    template:`<div class="alert alert-success" role="alert"><h1>Testing Aux Routes</h1>
                <button (click)="close()">Close</button>
              </div>`
})

export class Message{

    close(){
        window.location.href = '/angular-2-samples/';
    }
}