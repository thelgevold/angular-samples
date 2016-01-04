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

    edit(character,index){

        if(character.deleteChar){
            var deleteIndex = this.characters.indexOf(this.currentChar);

            if(deleteIndex >= 0) {
                this.characters.splice(deleteIndex, 1);

                if (this.characters.length > 0) {
                    this.characters[deleteIndex - 1].isCurrent = true;
                    this.currentChar = this.characters[deleteIndex - 1];
                }
                else{
                    this.currentChar = null;
                }
            }

            return;
        }

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
        if(operation === 'modify'){
            var index = this.characters.indexOf(this.currentChar);

            if(index < 0){
                index = this.characters.length - 1;
            }
            this.edit(character,index + 1);
        }
        if(operation === 'select'){
            this.selectCharacter(character);
        }
    }

}