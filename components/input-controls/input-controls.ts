import {Component, View, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';

@Component({
    selector: 'input-controls',
    templateUrl: './components/input-controls/input-controls.html',
    directives:[CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class InputControls {

    gender:string;
    javascript = false;
    angular = false;
    csharp = false;
    name = 'Two way bound';
}