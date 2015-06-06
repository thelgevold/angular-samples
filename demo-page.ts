import {Component, View} from 'angular2/angular2';
import {TreeView} from './components/tree-view/tree-view';
import {ContactList} from './components/contact-list/contact-list';
import {Directory} from './components/tree-view/directory';

@Component({
    selector: 'demo-page'
})

@View({
    templateUrl: './demo-page.html',
    directives: [ContactList,TreeView]
})

export class DemoPage {
    directories: Array<Directory>;

    constructor(){

        this.loadDirectories();
    }

    loadDirectories(){

        this.directories = [];

        let fall2014 = new Directory('Fall 2014',[],['image1.jpg','image2.jpg','image3.jpg']);
        let summer2014 = new Directory('Summer 2014',[],['image10.jpg','image20.jpg','image30.jpg']);
        let pics = new Directory('Pictures',[summer2014,fall2014],[]);

        let music = new Directory('Music',[],['song1.mp3','song2.mp3']);

        this.directories = [pics,music]
    }

}