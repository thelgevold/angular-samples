import {Component,ViewChildren,QueryList,ContentChildren} from '@angular/core';
import {Child} from './child';

@Component({
    selector:'parent',
    directives:[Child],
    template:`<div>
                <button (click)="updateViewChildren()">Update Time via ViewChildren</button>
                <child></child>
                <child></child>
              </div>`
})

export class Parent{
    
    @ViewChildren(Child)
    viewChildren: QueryList<Child>;

    updateViewChildren(){
        this.viewChildren.toArray().forEach((child) => child.setTime(new Date().toTimeString()));
    }

}