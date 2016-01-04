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
    Document.prototype.addCharacter = function (character) {
        this.characters.push(character);
        if (character.lineBreak) {
            this.deselectPreviousCharacter();
            var placeHolder = new character_1.Character(-1);
            this.characters.push(placeHolder);
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
    return Document;
})();
exports.Document = Document;
