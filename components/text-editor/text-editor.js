var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var Rx_1 = require('rxjs/Rx');
var character_1 = require('./character');
var document_1 = require('./document');
var key_map_1 = require('./key-map');
var TextEditor = (function () {
    function TextEditor() {
        this.currentDocument = new document_1.Document();
    }
    TextEditor.prototype.isSuportedCharacter = function (keyCode) {
        if (keyCode >= key_map_1.KeyMap.upperCaseA && keyCode < key_map_1.KeyMap.upperCaseZ) {
            return true;
        }
        if (keyCode === key_map_1.KeyMap.enter || keyCode === key_map_1.KeyMap.spaceBar || key_map_1.KeyMap.backSpace) {
            return true;
        }
        return false;
    };
    TextEditor.prototype.ngOnInit = function () {
        var _this = this;
        var editor = document.getElementById('page');
        //Capture supported printable characters
        this.keyUp = Rx_1.Observable.fromEvent(document, 'keyup')
            .filter(function (k) { return _this.isSuportedCharacter(k.which); })
            .map(function (k) {
            return { operation: 'modify', character: new character_1.Character(k.which), element: k };
        });
        //Support document selection
        this.click = Rx_1.Observable.fromEvent(editor, 'click').map(function (e) {
            var index = [].slice.call(editor.children).indexOf(e.target);
            if (index >= 0) {
                return { operation: 'select', character: _this.currentDocument.characters[index], element: e };
            }
            return null;
        }).filter(function (e) { return e !== null; });
        //Prevents page jumping
        this.keyDown = Rx_1.Observable.fromEvent(document, 'keydown')
            .filter(function (k) { return k.which === key_map_1.KeyMap.spaceBar || k.which === key_map_1.KeyMap.backSpace; })
            .map(function (k) {
            return { element: k };
        });
        this.keyUp.merge(this.click).merge(this.keyDown).subscribe(function (e) {
            _this.currentDocument.processInput(e.character, e.operation);
            e.element.preventDefault();
        });
    };
    TextEditor = __decorate([
        core_1.Component({
            selector: 'editor',
            templateUrl: './components/text-editor/text-editor.html'
        }), 
        __metadata('design:paramtypes', [])
    ], TextEditor);
    return TextEditor;
})();
exports.TextEditor = TextEditor;
