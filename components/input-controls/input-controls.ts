import {Component, View, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {
    ComponentInstruction,
    CanReuse
} from 'angular2/router';

@Component({
    selector: 'input-controls',
    templateUrl: './components/input-controls/input-controls.html',
    directives:[CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class InputControls implements CanReuse {

    gender:string;
    javascript = false;
    angular = false;
    csharp = false;
    name = 'Two way bound';

    routerCanReuse(next: ComponentInstruction, prev: ComponentInstruction) { return false; }
}