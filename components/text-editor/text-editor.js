import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/repeat';
import 'rxjs/add/operator/merge';
import { Character } from './character';
import { Document } from './document';
import { KeyMap } from './key-map';
var TextEditor = (function () {
    function TextEditor() {
        this.currentDocument = new Document();
    }
    TextEditor.prototype.isSuportedCharacter = function (keyCode) {
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
    };
    TextEditor.prototype.getCharacterFromElement = function (e, operation) {
        var index = [].slice.call(this.editor.children).indexOf(e.target);
        if (index >= 0) {
            return { operation: operation, character: this.currentDocument.characters[index], element: e };
        }
        return null;
    };
    TextEditor.prototype.ngOnInit = function () {
        var _this = this;
        this.editor = document.getElementById('page');
        this.keyUp = Observable.fromEvent(document, 'keyup')
            .filter(function (k) { return _this.isSuportedCharacter(k.which); })
            .map(function (k) {
            return { operation: 'modify', character: new Character(k.which), element: k };
        });
        this.mouseDown = Observable.fromEvent(this.editor, 'mousedown')
            .do(function (e) { return _this.currentDocument.clearSelection(_this.getCharacterFromElement(e, 'range')); })
            .flatMap(function (m) { return Observable.fromEvent(_this.editor, 'mousemove'); })
            .map(function (e) { return _this.getCharacterFromElement(e, 'range'); })
            .filter(function (e) { return e !== null; })
            .takeUntil(Observable.fromEvent(this.editor, 'mouseup')).repeat();
        this.click = Observable.fromEvent(this.editor, 'click')
            .map(function (e) { return _this.getCharacterFromElement(e, 'select'); })
            .filter(function (e) { return e !== null; });
        this.keyDown = Observable.fromEvent(document, 'keydown')
            .filter(function (k) { return k.which === KeyMap.spaceBar || k.which === KeyMap.backSpace; })
            .map(function (k) {
            return { element: k };
        });
        this.keyUp
            .merge(this.click)
            .merge(this.mouseDown)
            .merge(this.keyDown).subscribe(function (e) {
            _this.currentDocument.processInput(e.character, e.operation);
            e.element.preventDefault();
        });
    };
    return TextEditor;
}());
export { TextEditor };
TextEditor.decorators = [
    { type: Component, args: [{
                selector: 'editor',
                templateUrl: './text-editor.html'
            },] },
];
TextEditor.ctorParameters = function () { return []; };
