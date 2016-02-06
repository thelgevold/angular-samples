import {QuestionBase} from './question-base';

export class DropDownQuestion extends QuestionBase<string>{

    options = [];
    controlType = 'dropdown';

    constructor(){
        super();
    }

    addOption(key,value){
        this.options.push({key:key,value:value});
    }

}