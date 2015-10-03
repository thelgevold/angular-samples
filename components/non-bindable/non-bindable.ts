import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
    selector: 'ignore-bindings'
})

@View({
    templateUrl: './components/non-bindable/non-bindable.html',
    directives: [CORE_DIRECTIVES]
})

export class IgnoreBindings {

}