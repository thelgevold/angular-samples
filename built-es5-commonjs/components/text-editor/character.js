"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var key_map_1 = require("./key-map");
var Character = (function () {
    function Character(keyCode) {
        this.isCurrent = false;
        this.lineBreak = false;
        this.placeHolder = false;
        this.deleteChar = false;
        this.isSelected = false;
        if (keyCode === key_map_1.KeyMap.enter) {
            this.value = '\n';
            this.lineBreak = true;
        }
        else if (keyCode === -1) {
            this.value = '';
            this.placeHolder = true;
        }
        else if (keyCode === key_map_1.KeyMap.backSpace) {
            this.deleteChar = true;
        }
        else {
            this.value = String.fromCharCode(keyCode).toLowerCase();
        }
    }
    return Character;
}());
exports.Character = Character;
