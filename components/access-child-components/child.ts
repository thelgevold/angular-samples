import {Component} from 'angular2/core';

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