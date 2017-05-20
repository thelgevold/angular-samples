"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/fromEvent");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
require("rxjs/add/operator/filter");
require("rxjs/add/operator/mergeMap");
require("rxjs/add/operator/takeUntil");
require("rxjs/add/operator/repeat");
require("rxjs/add/operator/merge");
var character_1 = require("./character");
var document_1 = require("./document");
var key_map_1 = require("./key-map");
var TextEditor = (function () {
    function TextEditor() {
        this.currentDocument = new document_1.Document();
    }
    TextEditor.prototype.isSuportedCharacter = function (keyCode) {
        if (keyCode >= key_map_1.KeyMap.a && keyCode < key_map_1.KeyMap.z) {
            return true;
        }
        if (keyCode === key_map_1.KeyMap.enter || keyCode === key_map_1.KeyMap.spaceBar || keyCode === key_map_1.KeyMap.backSpace) {
            return true;
        }
        if (keyCode >= key_map_1.KeyMap.zero && keyCode <= key_map_1.KeyMap.nine) {
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
        this.keyUp = Observable_1.Observable.fromEvent(document, 'keyup')
            .filter(function (k) { return _this.isSuportedCharacter(k.which); })
            .map(function (k) {
            return { operation: 'modify', character: new character_1.Character(k.which), element: k };
        });
        this.mouseDown = Observable_1.Observable.fromEvent(this.editor, 'mousedown')
            .do(function (e) { return _this.currentDocument.clearSelection(_this.getCharacterFromElement(e, 'range')); })
            .flatMap(function (m) { return Observable_1.Observable.fromEvent(_this.editor, 'mousemove'); })
            .map(function (e) { return _this.getCharacterFromElement(e, 'range'); })
            .filter(function (e) { return e !== null; })
            .takeUntil(Observable_1.Observable.fromEvent(this.editor, 'mouseup')).repeat();
        this.click = Observable_1.Observable.fromEvent(this.editor, 'click')
            .map(function (e) { return _this.getCharacterFromElement(e, 'select'); })
            .filter(function (e) { return e !== null; });
        //Prevents page jumping
        this.keyDown = Observable_1.Observable.fromEvent(document, 'keydown')
            .filter(function (k) { return k.which === key_map_1.KeyMap.spaceBar || k.which === key_map_1.KeyMap.backSpace; })
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
TextEditor = __decorate([
    core_1.Component({
        selector: 'editor',
        template: "\n    \n  <h1>Text editor based on Observables</h1>\n\n  <div class=\"alert alert-success\" role=\"alert\">\n      Supports typing of letters and numbers. Basic text selection and cursor placement is also supported.\n  </div>\n\n  <div class=\"editor\">\n  <div class=\"page noselect\" id=\"page\"><span *ngFor=\"let char of currentDocument.characters\" [ngClass]=\"{currentChar:char.isCurrent,selectedChar:char.isSelected}\">{{char.value}}</span></div>\n  </div>\n\n  <h4><a href=\"http://www.syntaxsuccess.com/viewarticle/observables-in-angular-2.0\">Read more here</a></h4>"
    })
], TextEditor);
exports.TextEditor = TextEditor;
