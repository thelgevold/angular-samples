import { QuestionBase } from './question-base';
export class TextboxQuestion extends QuestionBase {
    constructor() {
        super();
        this.controlType = 'textbox';
    }
}
