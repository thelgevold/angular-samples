import {Component, View, NgNonBindable} from 'angular2/angular2';

@Component({
    selector: 'ignore-bindings'
})

@View({
    templateUrl: './components/non-bindable/non-bindable.html',
    directives: [NgNonBindable]
})

export class IgnoreBindings {

}