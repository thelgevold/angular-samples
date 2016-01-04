import {Component, OnInit} from 'angular2/core';
import {Observable} from 'rxjs/Rx';

import {Character} from './character';
import {Document} from './document';
import {KeyMap} from './key-map';

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
        if(keyCode >= KeyMap.upperCaseA && keyCode < KeyMap.upperCaseZ){
            return true;
        }

        if(keyCode === KeyMap.enter || keyCode === KeyMap.spaceBar || KeyMap.backSpace){
            return true;
        }

        return false;
    }

    ngOnInit(){
        let editor = document.getElementById('page');

        //Capture supported printable characters
        this.keyUp = Observable.fromEvent(document,'keyup')
                     .filter((k:any) => this.isSuportedCharacter(k.which))
                     .map((k:any) => {
                        return {operation:'modify',character:new Character(k.which),element:k};
                     });

        //Support document selection
        this.click = Observable.fromEvent(editor,'click').map((e:any) => {
            let index = [].slice.call(editor.children).indexOf(e.target);
            if(index >= 0) {
                return {operation: 'select', character: this.currentDocument.characters[index],element:e};
            }
            return null;
        }).filter(e => e !== null);

        //Prevents page jumping
        this.keyDown = Observable.fromEvent(document,'keydown')
            .filter((k:any) => k.which === KeyMap.spaceBar || k.which === KeyMap.backSpace)
            .map((k:any) => {
                return {element:k};
            });

        this.keyUp.merge(this.click).merge(this.keyDown).subscribe(e =>
        {
            this.currentDocument.processInput(e.character,e.operation);
            e.element.preventDefault();
        });

    }
}