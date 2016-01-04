var character_1 = require('./character');
var Document = (function () {
    function Document() {
        this.characters = [];
    }
    Document.prototype.deselectPreviousCharacter = function () {
        if (this.currentChar) {
            var index = this.characters.indexOf(this.currentChar);
            this.characters[index].isCurrent = false;
        }
    };
    Document.prototype.addCharacter = function (character, index) {
        this.characters.splice(index, 0, character);
        if (character.lineBreak) {
            this.deselectPreviousCharacter();
            var placeHolder = new character_1.Character(-1);
            this.characters.splice(index + 1, 0, placeHolder);
            this.selectCharacter(placeHolder);
        }
        else {
            this.selectCharacter(character);
        }
    };
    Document.prototype.selectCharacter = function (character) {
        this.deselectPreviousCharacter();
        var index = this.characters.indexOf(character);
        this.characters[index].isCurrent = true;
        this.currentChar = character;
    };
    Document.prototype.processInput = function (character, operation) {
        if (operation === 'add') {
            var index = this.characters.indexOf(this.currentChar);
            if (index < 0) {
                index = this.characters.length - 1;
            }
            this.addCharacter(character, index + 1);
        }
        if (operation === 'select') {
            this.selectCharacter(character);
        }
    };
    return Document;
})();
exports.Document = Document;
