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

    addCharacter(character,index){
        this.characters.splice(index, 0, character);

        if(character.lineBreak){
            this.deselectPreviousCharacter();
            var placeHolder = new Character(-1);
            this.characters.splice(index + 1, 0, placeHolder);
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

    processInput(character, operation){
        if(operation === 'add'){
            var index = this.characters.indexOf(this.currentChar);

            if(index < 0){
                index = this.characters.length - 1;
            }
            this.addCharacter(character,index + 1);
        }
        if(operation === 'select'){
            this.selectCharacter(character);
        }
    }

}