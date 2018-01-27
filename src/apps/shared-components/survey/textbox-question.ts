import {QuestionBase} from './question-base';

export class TextboxQuestion extends QuestionBase<string>{

    type:string;
    controlType = 'textbox';

    constructor(){
        super();
    }

}