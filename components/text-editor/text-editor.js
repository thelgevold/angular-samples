var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Character } from './character';
import { Document } from './document';
import { KeyMap } from './key-map';
export let TextEditor = class TextEditor {
    constructor() {
        this.currentDocument = new Document();
    }
    isSuportedCharacter(keyCode) {
        if (keyCode >= KeyMap.a && keyCode < KeyMap.z) {
            return true;
        }
        if (keyCode === KeyMap.enter || keyCode === KeyMap.spaceBar || keyCode === KeyMap.backSpace) {
            return true;
        }
        if (keyCode >= KeyMap.zero && keyCode <= KeyMap.nine) {
            return true;
        }
        return false;
    }
    getCharacterFromElement(e, operation) {
        let index = [].slice.call(this.editor.children).indexOf(e.target);
        if (index >= 0) {
            return { operation: operation, character: this.currentDocument.characters[index], element: e };
        }
        return null;
    }
    ngOnInit() {
        this.editor = document.getElementById('page');
        this.keyUp = Observable.fromEvent(document, 'keyup')
            .filter((k) => this.isSuportedCharacter(k.which))
            .map((k) => {
            return { operation: 'modify', character: new Character(k.which), element: k };
        });
        this.mouseDown = Observable.fromEvent(this.editor, 'mousedown')
            .do(e => this.currentDocument.clearSelection(this.getCharacterFromElement(e, 'range')))
            .flatMap((m) => Observable.fromEvent(this.editor, 'mousemove'))
            .map((e) => this.getCharacterFromElement(e, 'range'))
            .filter(e => e !== null)
            .takeUntil(Observable.fromEvent(this.editor, 'mouseup')).repeat();
        this.click = Observable.fromEvent(this.editor, 'click')
            .map((e) => this.getCharacterFromElement(e, 'select'))
            .filter(e => e !== null);
        this.keyDown = Observable.fromEvent(document, 'keydown')
            .filter((k) => k.which === KeyMap.spaceBar || k.which === KeyMap.backSpace)
            .map((k) => {
            return { element: k };
        });
        this.keyUp
            .merge(this.click)
            .merge(this.mouseDown)
            .merge(this.keyDown).subscribe(e => {
            this.currentDocument.processInput(e.character, e.operation);
            e.element.preventDefault();
        });
    }
};
TextEditor = __decorate([
    Component({
        selector: 'editor',
        templateUrl: './components/text-editor/text-editor.html'
    }), 
    __metadata('design:paramtypes', [])
], TextEditor);
