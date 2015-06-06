import {Component, View, NgFor,NgIf} from 'angular2/angular2';
import {Directory} from './directory';

@Component({
    selector: 'tree-view',
    properties: ['directories: directories']
})

@View({
    templateUrl: './components/tree-view/tree-view.html',
    directives: [NgFor,TreeView,NgIf]
})

export class TreeView {
    directories: Array<Directory>;
}