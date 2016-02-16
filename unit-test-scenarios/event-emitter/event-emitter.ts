import {Component, Output, EventEmitter} from 'angular2/core';

@Component({
    selector:'child',
    template:`<button (click)="sayHello()">Greet</button>`
})

export class Child{

    @Output() greeting = new EventEmitter();

    sayHello(){
        this.greeting.emit({greeting:'hello'});
    }
}

@Component({
    selector:'parent',
    template:`<child (greeting)="onGreeting($event)"></child>`,
    directives:[Child]
})

export class Parent{

    onGreeting(e){
        console.log(e);
    }

}