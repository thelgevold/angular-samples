import {QuestionBase} from './question-base';

export class TextboxQuestion extends QuestionBase<string>{

    type:string;
    isTextbox = true;

    constructor(){
        super();
    }

}