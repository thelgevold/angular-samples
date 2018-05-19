import {Component, OnInit} from '@angular/core';
import {Observable, fromEvent} from 'rxjs';

import {
  tap,
  map,
  filter,
  mergeMap,
  takeUntil,
  repeat,
  merge,
  flatMap,
} from 'rxjs/operators';

import {Character} from './character';
import {Document} from './document';
import {KeyMap} from './key-map';

@Component({
  selector: 'editor',
  template: `
    
  <h1>Text editor based on Observables</h1>

  <div class="alert alert-success" role="alert">
      Supports typing of letters and numbers. Basic text selection and cursor placement is also supported.
  </div>

  <div class="editor">
  <div class="page noselect" id="page"><span *ngFor="let char of currentDocument.characters" [ngClass]="{currentChar:char.isCurrent,selectedChar:char.isSelected}">{{char.value}}</span></div>
  </div>

  <h4><a href="http://www.syntaxsuccess.com/viewarticle/observables-in-angular-2.0">Read more here</a></h4>`,
})
export class TextEditor implements OnInit {
  keyUp: any;
  click: any;
  keyDown: any;
  mouseDown: any;
  editor: any;

  currentDocument = new Document();

  isSuportedCharacter(keyCode) {
    if (keyCode >= KeyMap.a && keyCode < KeyMap.z) {
      return true;
    }

    if (
      keyCode === KeyMap.enter ||
      keyCode === KeyMap.spaceBar ||
      keyCode === KeyMap.backSpace
    ) {
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
      return {
        operation: operation,
        character: this.currentDocument.characters[index],
        element: e,
      };
    }
    return null;
  }

  ngOnInit() {
    this.editor = document.getElementById('page');

    this.keyUp = fromEvent(document, 'keyup').pipe(
      filter((k: any) => this.isSuportedCharacter(k.which)),
      map((k: any) => {
        return {
          operation: 'modify',
          character: new Character(k.which),
          element: k,
        };
      }),
    );

    this.mouseDown = fromEvent(this.editor, 'mousedown').pipe(
      tap(e =>
        this.currentDocument.clearSelection(
          this.getCharacterFromElement(e, 'range'),
        ),
      ),
      flatMap(m => fromEvent(this.editor, 'mousemove')),
      map((e: any) => this.getCharacterFromElement(e, 'range')),
      filter(e => e !== null),
      takeUntil(fromEvent(this.editor, 'mouseup')),
      repeat(),
    );

    this.click = fromEvent(this.editor, 'click').pipe(
      map((e: any) => this.getCharacterFromElement(e, 'select')),
      filter(e => e !== null),
    );

    //Prevents page jumping
    this.keyDown = fromEvent(document, 'keydown').pipe(
      filter(
        (k: any) => k.which === KeyMap.spaceBar || k.which === KeyMap.backSpace,
      ),
      map((k: any) => {
        return {element: k};
      }),
    );

    this.keyUp
      .pipe(merge(this.click), merge(this.mouseDown), merge(this.keyDown))
      .subscribe(e => {
        this.currentDocument.processInput(e.character, e.operation);
        e.element.preventDefault();
      });
  }
}
