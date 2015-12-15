import {Component, View} from 'angular2/core';
import {Directory} from './directory';

@Component({
    selector: 'tree-view',
    inputs: ['directories: directories']
})

@View({
    templateUrl: './components/tree-view/tree-view.html',
    directives: [TreeView]
})

export class TreeView {
    directories: Array<Directory>;
}