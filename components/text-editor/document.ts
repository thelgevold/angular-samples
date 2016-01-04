import {Character} from './character';

export class Document{
    characters = [];

    currentChar;

    deselectPreviousCharacter(){
        if(this.currentChar){
            var index = this.characters.indexOf(this.currentChar);
            this.characters[index].isCurrent = false;
        }
    }

    addCharacter(character){

        this.characters.push(character);

        if(character.lineBreak){
            this.deselectPreviousCharacter();
            var placeHolder = new Character(-1);
            this.characters.push(placeHolder);
            this.selectCharacter(placeHolder);
        }
        else {
            this.selectCharacter(character);
        }
    }

    selectCharacter(character){
        this.deselectPreviousCharacter();

        var index = this.characters.indexOf(character);
        this.characters[index].isCurrent = true;

        this.currentChar = character;
    }

}