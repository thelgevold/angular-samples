/// <reference path="./typings/tsd.d.ts" />
import {Component, View, NgIf, CSSClass} from 'angular2/angular2';
import {TreeView} from './components/tree-view/tree-view';
import {ContactList} from './components/contact-list/contact-list';
import {BoundTextbox} from './components/bound-textbox/bound-textbox';
import {Directory} from './components/tree-view/directory';
import {Grid} from './components/grid/grid';
import {Column} from './components/grid/column';
import {CoreDirectives} from './components/core-directives/core-directives';
import {IgnoreBindings} from './components/non-bindable/non-bindable';
import {Greeting} from './components/greeting/greeting';
import {HttpSample} from './components/http/http';
import {Spreadsheet} from './components/spreadsheet/spreadsheet';

@Component({
    selector: 'demo-page'
})

@View({
    templateUrl: './demo-page.html',
    directives: [Spreadsheet, HttpSample, Greeting, ContactList, TreeView, BoundTextbox, Grid, CoreDirectives, IgnoreBindings, NgIf, CSSClass]
})

export class DemoPage {
    directories: Array<Directory>;
    people: Array<Person>;
    columns: Array<Column>;
    currentComponent: string;

    constructor(){

        this.currentComponent = 'grid';
        this.loadDirectories();
        this.people = this.getPeople();
        this.columns = this.getColumns();
    }

    selectComponent(component){
        this.currentComponent = component;
    }

    isActive(component){
        return component === this.currentComponent;
    }

    getActiveClass(component){
        if(this.isActive(component)){
            return 'active';
        }
    }

    getPeople(): Array<Person> {
        return [
            {firstName:'Joe',lastName:'Jackson',age:20},
            {firstName:'Peter',lastName:'Smith',age:30},
            {firstName:'Jane',lastName:'Doe',age:50},
            {firstName:'Tim',lastName:'Smith',age:80}
        ];
    }

    getColumns(): Array<Column> {
        return [
            new Column('firstName','First Name'),
            new Column('lastName','Last Name'),
            new Column('age','Age')
        ];
    }

    loadDirectories(){

        const fall2014 = new Directory('Fall 2014',[],['image1.jpg','image2.jpg','image3.jpg']);
        const summer2014 = new Directory('Summer 2014',[],['image10.jpg','image20.jpg','image30.jpg']);
        const pics = new Directory('Pictures',[summer2014,fall2014],[]);

        const music = new Directory('Music',[],['song1.mp3','song2.mp3']);

        this.directories = [pics,music];
    }

}

interface Person {
    firstName:string;
    lastName:string;
    age:number;
}
