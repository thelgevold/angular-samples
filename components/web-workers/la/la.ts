import {Clock} from '../clock.ts';
import {Component} from '@angular/core';
import {bootstrapApp} from '@angular/platform-browser';

@Component({
    selector: 'la',
    templateUrl: '../clock.html'
})

export class La extends Clock{
    city = 'Los Angeles';

    constructor(){
        super(-8);
    }
}

bootstrapApp(La, []).catch(err => console.error(err));

