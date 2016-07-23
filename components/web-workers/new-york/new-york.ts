import{Clock} from '../clock.ts';
import {Component} from '@angular/core';
import {bootstrapApp} from '@angular/platform-browser';

@Component({
    selector: 'new-york',
    templateUrl: '../clock.html'
})

export class NewYork extends Clock{
    city = 'New York';

    constructor(){
        super(-5);
    }
}

bootstrapApp(NewYork, []).catch(err => console.error(err));

