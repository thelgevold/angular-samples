import {Component} from '@angular/core';

@Component({
    selector:'child',
    template:'<div>{{time}}</div>'
})

export class Child{
    time:string;

    setTime(time){
        this.time = time;
    }
}