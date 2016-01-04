export class Character{

    isCurrent = false;
    lineBreak = false;
    placeHolder = false;
    value:string;

    constructor(keyCode){

        if (keyCode === 13) {
            this.value = '\n';
            this.lineBreak = true;
        }
        else if (keyCode === -1) {
            this.value = '';
            this.placeHolder = true;
        }
        else {
            this.value = String.fromCharCode(keyCode);
        }
    }
}