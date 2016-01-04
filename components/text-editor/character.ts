import {KeyMap} from './key-map';

export class Character{

    isCurrent = false;
    lineBreak = false;
    placeHolder = false;
    value:string;
    deleteChar = false;

    constructor(keyCode){

        if (keyCode === KeyMap.enter) {
            this.value = '\n';
            this.lineBreak = true;
        }
        else if (keyCode === -1) {
            this.value = '';
            this.placeHolder = true;
        }
        else if(keyCode === KeyMap.backSpace){
            this.deleteChar = true;
        }
        else {
            this.value = String.fromCharCode(keyCode);
        }
    }
}