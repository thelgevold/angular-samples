import {Component, OnInit} from 'angular2/core';
import {Observable} from 'rxjs/Rx';

import {Character} from './character';
import {Document} from './document';

@Component({
    selector: 'editor',
    templateUrl: './components/text-editor/text-editor.html'
})

export class TextEditor implements OnInit {

    keyUp:any;
    click:any;
    keyDown:any;

    currentDocument = new Document();

    isSuportedCharacter(keyCode){
        if(keyCode >= 65 && keyCode < 90){
            return true;
        }

        if(keyCode === 13 || keyCode === 32){
            return true;
        }

        return false;
    }

    ngOnInit(){
        let editor = document.getElementById('page');

        this.keyDown = Observable.fromEvent(document,'keydown')
            .filter((k:any) => k.which === 32)
            .map((k:any) => {
                return {element:k};
            });

        this.keyUp = Observable.fromEvent(document,'keyup')
                     .filter((k:any) => this.isSuportedCharacter(k.which))
                     .map((k:any) => {
                        return {operation:'add',character:new Character(k.which),element:k};
                     });

        this.click = Observable.fromEvent(editor,'click').map((e:any) => {
            let index = [].slice.call(editor.children).indexOf(e.target);
            if(index >= 0) {
                return {operation: 'select', character: this.currentDocument.characters[index],element:e};
            }
            return null;
        }).filter(e => e !== null);

        this.keyUp.merge(this.click).merge(this.keyDown).subscribe(e =>
        {
            if(e.operation === 'add'){
                this.currentDocument.addCharacter(e.character);
            }
            if(e.operation === 'select'){
                this.currentDocument.selectCharacter(e.character);
            }

            e.element.preventDefault();

        });

    }
}