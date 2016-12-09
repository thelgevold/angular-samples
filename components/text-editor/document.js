import { Character } from './character';
export class Document {
    constructor() {
        this.characters = [];
        this.firstSelectedCharacter = -1;
        this.currentChar = new Character(-1);
        this.characters.push(this.currentChar);
        this.characters[0].isCurrent = true;
    }
    deselectPreviousCharacter() {
        if (this.currentChar) {
            var index = this.characters.indexOf(this.currentChar);
            this.characters[index].isCurrent = false;
        }
    }
    clearSelection(e) {
        this.firstSelectedCharacter = -1;
        if (e) {
            this.firstSelectedCharacter = this.characters.indexOf(e.character);
        }
        this.characters.forEach(c => c.isSelected = false);
    }
    edit(character, index) {
        if (character.deleteChar) {
            var deleteIndex = this.characters.indexOf(this.currentChar);
            if (deleteIndex >= 1) {
                this.characters.splice(deleteIndex, 1);
                if (this.characters.length > 1) {
                    this.characters[deleteIndex - 1].isCurrent = true;
                    this.currentChar = this.characters[deleteIndex - 1];
                }
                else if (this.characters.length === 1) {
                    this.characters[0].isCurrent = true;
                    this.currentChar = this.characters[0];
                }
            }
        }
        else {
            this.characters.splice(index, 0, character);
            if (character.lineBreak) {
                this.deselectPreviousCharacter();
                var placeHolder = new Character(-1);
                this.characters.splice(index + 1, 0, placeHolder);
                this.placeCursor(placeHolder);
            }
            else {
                this.placeCursor(character);
            }
        }
    }
    placeCursor(character) {
        this.deselectPreviousCharacter();
        var index = this.characters.indexOf(character);
        this.characters[index].isCurrent = true;
        this.currentChar = character;
    }
    selectCharacter(character) {
        var index = this.characters.indexOf(character);
        for (var i = this.firstSelectedCharacter; i <= index; i++) {
            this.characters[i].isSelected = true;
        }
    }
    processInput(character, operation) {
        if (operation === 'modify') {
            var index = this.characters.indexOf(this.currentChar);
            if (index < 0) {
                index = this.characters.length - 1;
            }
            this.edit(character, index + 1);
        }
        if (operation === 'select') {
            this.placeCursor(character);
        }
        if (operation === 'range') {
            this.selectCharacter(character);
        }
    }
}
