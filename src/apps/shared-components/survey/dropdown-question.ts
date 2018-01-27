import {QuestionBase} from './question-base';

export class DropDownQuestion extends QuestionBase<string>{

    options = [];
    controlType = 'dropdown';

    constructor(){
        super();
    }
}