import {Clock} from '../clock.ts';
import {Component} from '@angular/core';
import {bootstrapApp} from '@angular/platform-browser';

@Component({
    selector: 'london',
    templateUrl: '../clock.html'
})

export class London extends Clock{
    city = 'London';

    constructor(){
        super(0);
    }
}

bootstrapApp(London, []).catch(err => console.error(err));

