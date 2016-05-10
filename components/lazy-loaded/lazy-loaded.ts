import {Component} from '@angular/core';
import {LazyMessage} from './lazy-message';

@Component({
    selector: 'lazy-loaded',
    templateUrl: './components/lazy-loaded/lazy-loaded.html',
    directives:[LazyMessage]
})

export class LazyLoaded {
}