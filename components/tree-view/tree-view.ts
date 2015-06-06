import {Component, View, For,If} from 'angular2/angular2';
import {Directory} from './directory';

@Component({
    selector: 'tree-view',
    properties: {
        'directories': 'directories'
    }
})

@View({
    templateUrl: './components/tree-view/tree-view.html',
    directives: [For,TreeView,If]
})

export class TreeView {
    directories: Array<Directory>;
}